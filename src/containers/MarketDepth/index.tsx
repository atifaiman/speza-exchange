import { MarketDepths } from '@openware/components';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect, MapStateToProps } from 'react-redux';
import { preciseData } from '../../helpers';
import {
    Market,
    RootState,
    selectCurrentMarket,
    selectDepthAsks,
    selectDepthBids,
} from '../../modules';

interface ReduxProps {
    asksItems: string[][];
    bidsItems: string[][];
    currentMarket: Market | undefined;
}

type Props = ReduxProps;

const settings = {
    tooltip: true,
    dataKeyX: 'price',
    dataKeyY: 'cumulativeVolume',
    height: 200,
};

class MarketDepthContainer extends React.Component<Props> {
    public shouldComponentUpdate(prev, next) {
        const { asksItems, bidsItems } = prev;
        const ordersLength = Number(asksItems.length) + Number(bidsItems.length);

        return ordersLength !== (this.props.asksItems.length + this.props.bidsItems.length);
    }

    public render() {
        const { asksItems, bidsItems } = this.props;
        const colors = {
            fillAreaAsk: '#BF357F',
            fillAreaBid: '#12C096',
            gridBackgroundStart: '#1a243b',
            gridBackgroundEnd: '#1a243b',
            strokeAreaAsk: '#BF357F',
            strokeAreaBid: '#12C096',
            strokeGrid: ' #B8E9F5',
            strokeAxis: '#cccccc',
        };
        return (
            <div>
                <div className="cr-table-header__content"  style={{zIndex: 'auto'}}>
                    <div className={'pg-market-depth__title'}>
                        <FormattedMessage id="page.body.trade.header.marketDepths" />
                    </div>
                </div>
                {(asksItems.length || bidsItems.length) ? this.renderMarketDepth(colors) : null}
            </div>
        );
    }

    private renderMarketDepth(colors) {
        return (
            <MarketDepths
                settings={settings}
                className={'pg-market-depth'}
                colors={colors}
                data={this.convertToDepthFormat()}
            />);
    }

    private convertToCumulative = (data, type) => {
        if (!this.props.currentMarket) {
            return;
        }

        const [askCurrency, bidCurrency] = [this.props.currentMarket.ask_unit.toUpperCase(), this.props.currentMarket.bid_unit.toUpperCase()];
        const tipLayout = ({ volume, price, cumulativeVolume, cumulativePrice }) => (
            <span className={'pg-market-depth__tooltip'}>
                <span><FormattedMessage id="page.body.trade.header.marketDepths.content.price" /> : {price} {bidCurrency}</span>
                <span><FormattedMessage id="page.body.trade.header.marketDepths.content.volume" /> : {volume} {askCurrency}</span>
                <span><FormattedMessage id="page.body.trade.header.marketDepths.content.cumulativeVolume" /> : {preciseData(cumulativeVolume, 2)} {askCurrency}</span>
                <span><FormattedMessage id="page.body.trade.header.marketDepths.content.cumulativeValue" /> : {preciseData(cumulativePrice, 2)} {bidCurrency}</span>
            </span>
        );

        let cumulativeVolumeData = 0;
        let cumulativePriceData = 0;

        const cumulative = data.map((item, index) => {
            const [price, volume] = item;
            const numberVolume = Number(volume);
            const numberPrice = Number(price);
            cumulativeVolumeData = numberVolume + cumulativeVolumeData;
            cumulativePriceData = cumulativePriceData + (numberPrice * numberVolume);
            return {
                [type]: cumulativeVolumeData,
                cumulativePrice: preciseData(cumulativePriceData, 2),
                cumulativeVolume: preciseData(cumulativeVolumeData, 2),
                volume: Number(volume),
                price: Number(price),
                name: tipLayout({ volume, price, cumulativeVolume: cumulativeVolumeData, cumulativePrice: cumulativePriceData }),
            };
        });

        return type === 'bid' ? cumulative
            .sort((a, b) => b.bid - a.bid) :
            cumulative.sort((a, b) => a.ask - b.ask);
    };

    private convertToDepthFormat() {
        const { asksItems, bidsItems } = this.props;
        const asksItemsLength = asksItems.length;
        const bidsItemsLength = bidsItems.length;


        const resultLength = asksItemsLength > bidsItemsLength ? bidsItemsLength : asksItemsLength;
        const asks = asksItems.slice(0, resultLength);
        const bids = bidsItems.slice(0, resultLength);

        const asksVolume = this.convertToCumulative(asks, 'ask');
        const bidsVolume = this.convertToCumulative(bids, 'bid');

        return [...bidsVolume, ...asksVolume];
    }
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> = state => ({
    asksItems: selectDepthAsks(state),
    bidsItems: selectDepthBids(state),
    currentMarket: selectCurrentMarket(state),
});

export const MarketDepthsComponent = connect(mapStateToProps)(MarketDepthContainer);
