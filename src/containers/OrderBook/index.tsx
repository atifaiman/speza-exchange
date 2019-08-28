import { CombinedOrderBook, Decimal, Loader } from '@openware/components';
import classNames from 'classnames';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import { accumulateVolume, calcMaxVolume, sortAsks, sortBids } from '../../helpers';
import {
    Market,
    RootState,
    selectCurrentMarket,
    selectCurrentPrice,
    selectDepthAsks,
    selectDepthBids,
    selectDepthLoading,
    selectMarketTickers,
    setCurrentPrice,
} from '../../modules';

interface ReduxProps {
    bids: string[][];
    isLoading: boolean;
    asks: string[][];
    currentMarket: Market | undefined;
    currentPrice: number | undefined;
}

interface DispatchProps {
    setCurrentPrice: typeof setCurrentPrice;
}

interface State {
    width: number;
}

type Props = ReduxProps & DispatchProps & InjectedIntlProps;

// render big/small breakpoint
const breakpoint = 448;

class OrderBookContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            width: 0,
        };

        this.orderRef = React.createRef();
    }

    private orderRef;

    public componentDidUpdate() {
        if (this.orderRef.current && this.state.width !== this.orderRef.current.clientWidth) {
            this.setState({
                width: this.orderRef.current.clientWidth,
            });
        }
    }

    public render() {
        const { bids, isLoading, asks } = this.props;
        const isLarge = this.state.width > breakpoint;
        const cn = classNames('pg-combined-order-book ', {
            'cr-combined-order-book--loading': isLoading,
            'pg-combined-order-book--no-data-first': (!asks.length && !isLarge) || (!bids.length && isLarge),
            'pg-combined-order-book--no-data-second': (!bids.length && !isLarge) || (!asks.length && isLarge),
        });

        return (
            <div className={cn} ref={this.orderRef}>
                {isLoading ? <div><Loader /></div> : this.orderBook(sortBids(bids), sortAsks(asks))}
            </div>
        );
    }

    private orderBook = (bids, asks) => {
        const isLarge = this.state.width > breakpoint;
        const asksData = isLarge ? asks : asks.slice(0).reverse();
        return (
            <React.Fragment>
                <div className={'cr-table-header__content'}>
                    {this.props.intl.formatMessage({id: 'page.body.trade.orderbook'})}
                </div>
                <CombinedOrderBook
                    maxVolume={calcMaxVolume(bids, asks)}
                    orderBookEntryAsks={accumulateVolume(asks)}
                    orderBookEntryBids={accumulateVolume(bids)}
                    rowBackgroundColorAsks={'rgba(191,53, 127, 0.4)'}
                    rowBackgroundColorBids={'rgba(18, 192, 150, 0.4)'}
                    dataAsks={this.renderOrderBook(asksData, 'asks', this.props.intl.formatMessage({id: 'page.noDataToShow'}), this.props.currentMarket)}
                    dataBids={this.renderOrderBook(bids, 'bids', this.props.intl.formatMessage({id: 'page.noDataToShow'}), this.props.currentMarket)}
                    headers={this.renderHeaders()}
                    lastPrice={this.lastPrice()}
                    onSelectAsks={this.handleOnSelectAsks}
                    onSelectBids={this.handleOnSelectBids}
                    isLarge={isLarge}
                />
            </React.Fragment>
        );
    };

    private lastPrice = () => {
        const { marketTickers, currentMarket } = this.props;
        const defaultTicker = {
            last: 0,
            price_change_percent: '+0.00%',
        };
        if (currentMarket && marketTickers[currentMarket.id] && marketTickers[currentMarket.id].price_change_percent) {
          const cn = classNames('', {
            'cr-combined-order-book__market-negative': (marketTickers[currentMarket.id] || defaultTicker).price_change_percent.includes('-'),
            'cr-combined-order-book__market-positive': (marketTickers[currentMarket.id] || defaultTicker).price_change_percent.includes('+'),
          });
          return (
              <React.Fragment>
                  <span className={cn}>
                      {Decimal.format(Number((marketTickers[currentMarket.id] || defaultTicker).last), currentMarket.ask_precision)} {currentMarket.bid_unit.toUpperCase()}
                  </span>
                  <span>{this.props.intl.formatMessage({id: 'page.body.trade.orderbook.lastMarket'})}</span>
              </React.Fragment>
            );
        } else {
          return <React.Fragment><span className={'cr-combined-order-book__market-negative'}>0</span><span>{this.props.intl.formatMessage({id: 'page.body.trade.orderbook.lastMarket'})}</span></React.Fragment>;
        }
    };

    private renderHeaders = () => {
        const { intl, currentMarket } = this.props;
        return [
            `${intl.formatMessage({id: 'page.body.trade.orderbook.header.price'})} (${currentMarket && currentMarket.bid_unit.toUpperCase()})`,
            `${intl.formatMessage({id: 'page.body.trade.orderbook.header.amount'})} (${currentMarket && currentMarket.ask_unit.toUpperCase()})`,
            `${intl.formatMessage({id: 'page.body.trade.orderbook.header.volume'})} (${currentMarket && currentMarket.ask_unit.toUpperCase()})`,
        ];
    };

    private renderOrderBook = (array: string[][], side: string, message: string, currentMarket?: Market) => {
        let total = accumulateVolume(array);
        const isLarge = this.state.width > breakpoint;
        const priceFixed = currentMarket ? currentMarket.bid_precision : 0;
        const amountFixed = currentMarket ? currentMarket.ask_precision : 0;
        // const priceFixed = 5;
        // const amountFixed = 5;
        return (array.length > 0) ? array.map((item, i) => {
            const [price, volume] = item;
            switch (side) {
                case 'asks':
                    total = isLarge ? accumulateVolume(array) : accumulateVolume(array.slice(0).reverse()).slice(0).reverse();
                    return [
                        <span key={i}><Decimal fixed={priceFixed}>{price}</Decimal></span>,
                        <Decimal key={i} fixed={amountFixed}>{volume}</Decimal>,
                        <Decimal key={i} fixed={amountFixed}>{total[i]}</Decimal>,
                    ];
                default:
                    if (isLarge) {
                        return [
                            <Decimal key={i} fixed={amountFixed}>{total[i]}</Decimal>,
                            <Decimal key={i} fixed={amountFixed}>{volume}</Decimal>,
                            <span key={i}><Decimal fixed={priceFixed}>{price}</Decimal></span>,
                            ];
                    } else {
                        return [
                            <span key={i}><Decimal fixed={priceFixed}>{price}</Decimal></span>,
                            <Decimal key={i} fixed={amountFixed}>{volume}</Decimal>,
                            <Decimal key={i} fixed={amountFixed}>{total[i]}</Decimal>,
                            ];
                    }
            }
        }) : [[[''], message]];
    }

    private handleOnSelectBids = (index: string) => {
        const { currentPrice, bids } = this.props;
        const priceToSet = bids[Number(index)] && Number(bids[Number(index)][0]);
        if (currentPrice !== priceToSet) {
            this.props.setCurrentPrice(priceToSet);
        }
    };
    private handleOnSelectAsks = (index: string) => {
        const { currentPrice, asks } = this.props;
        const isLarge = this.state.width >= breakpoint;
        const asksData = isLarge ? asks : asks.slice(0).reverse();
        const priceToSet = asksData[Number(index)] && Number(asksData[Number(index)][0]);
        if (currentPrice !== priceToSet) {
            this.props.setCurrentPrice(priceToSet);
        }
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> = state => ({
    bids: selectDepthBids(state),
    asks: selectDepthAsks(state),
    isLoading: selectDepthLoading(state),
    currentMarket: selectCurrentMarket(state),
    currentPrice: selectCurrentPrice(state),
    marketTickers: selectMarketTickers(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        setCurrentPrice: payload => dispatch(setCurrentPrice(payload)),
    });

const OrderBook = injectIntl(connect(mapStateToProps, mapDispatchToProps)(OrderBookContainer));
type OrderBookProps = ReduxProps;

export {
    OrderBook,
    OrderBookProps,
};
