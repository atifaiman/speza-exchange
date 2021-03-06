import * as React from 'react';
import { WalletItem, WalletItemProps } from '../WalletItem';

interface WalletListProps {
    walletItems: WalletItemProps[];
    activeIndex: number;
    /**
     * Callback function which is invoked whenever wallet item is clicked
     */
    onWalletSelectionChange(item: WalletItemProps): void;
    /**
     * Callback function which is invoked whenever wallet item is clicked
     */
    onActiveIndexChange(index: number): void;
}

const removeAlt = (str: string): string => str.replace('-alt', '');

const style: React.CSSProperties = {
    listStyleType: 'none',
    padding: 'calc(var(--gap) * 0.5) calc(var(--gap))',
};

/**
 * Component to display list of user wallets. It is scrollable and reacts on WalletItem click.
 */
export class WalletList
    extends React.Component<WalletListProps> {

    constructor(props: WalletListProps) {
        super(props);
    }
    public itemState = (i: number) => {
        return this.props.activeIndex === i;
    };
    public makeWalletItem = (props: WalletItemProps, i: number) => (
        <li
            key={i}
            style={style}
            onClick={this.handleClick.bind(this, i, props)}
        >
            <WalletItem
                key={i}
                {...{
                    ...props,
                    active: this.itemState(i),
                    currency: removeAlt(props.currency),
                }}
            />
        </li>
    );
    public handleClick = (i: number, props: WalletItemProps) => {
        if (this.props.onWalletSelectionChange) {
            this.props.onWalletSelectionChange(props);
        }
        if (this.props.onActiveIndexChange) {
            this.props.onActiveIndexChange(i);
        }
    };

    public render() {
        return (
            <div className="col-12 cr-tab-panel__navigation-container draggable-container" style={{background:'transparent' , borderRadius:'15px' ,    borderBottom: 'none'}}>
                <div className="col-12 cr-tab-panel">
                    <div className="cr-table-header__content" style={{height:'43px' , zIndex:'auto'}}>Funds</div>
                    <div className="walletscroll">
                        <div className="cr-tab-content cr-tab-content__active">
                            <ul className="cr-wallet-list">
                                {this.props.walletItems.map(this.makeWalletItem)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export {
    WalletListProps,
};
