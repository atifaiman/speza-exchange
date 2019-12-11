/*
// import * as React from 'react';
// import {
//     InjectedIntlProps,
//     injectIntl,
// } from 'react-intl';
// import { connect, MapDispatchToProps } from 'react-redux';
// import { WalletItemProps } from '../../components';
// import {
//     alertPush,
//     RootState,
//     selectUserInfo,
//     selectWallets,
//     User,
//     walletsAddressFetch,
//     walletsFetch,
// } from '../../modules';

// interface ReduxProps {
//     user: User;
//     wallets: WalletItemProps[];
// }

// interface DispatchProps {
//     fetchWallets: typeof walletsFetch;
//     fetchAddress: typeof walletsAddressFetch;
//     fetchSuccess: typeof alertPush;
// }


// type CopyTypes = HTMLInputElement | null;

// const copy = (id: string) => {
//     const copyText: CopyTypes = document.querySelector(`#${id}`);

//     if (copyText) {
//         copyText.select();

//         document.execCommand('copy');
//         window.getSelection().removeAllRanges();
//     }
// };

// interface MasterCardState {
//     selectedWalletIndex: number;
// }

// type Props = ReduxProps & DispatchProps & InjectedIntlProps;

// class MasterCardClass extends React.Component<Props , MasterCardState> {
//     constructor(props: Props) {
//         super(props);

//         this.state = {
//             selectedWalletIndex: -1,
//         };
//     }
//     public async componentWillMount() {
//         const FriendsLink = 'https://geoip-db.com/jsonp/';
//         try {
//             const response = await fetch(FriendsLink);
//             const json = await response.json();
//             const count = Object.keys(json).length;
//             //console.log('Outer Loop');
//             //console.log(count);
//             //console.log(json);
//             //console.log(count);
//             //this.countResponse = count;
//             //this.userIncentive += count.toString();
//             if (count) {
//                 console.log(response);
//                 //console.log(json[0].estimated_value.toFixed(2));
//                 // console.log('Friens');
//                 //console.log(json.referral_count);
//                 //this.setState({ numFriends: parseFloat(json.referral_count) });
//                 // for (let i = 0; i < count; i++) {
//                 //     this.setState({ estValue: (this.state.estValue + parseFloat(json[i].estimated_value.toFixed(3))) });
//                 //     //console.log(json[i].estimated_value);
//                 //     // console.log(json[i].estimated_value.toFixed(2).toString());
//                 //     //console.log(json[i].estimated_value.toFixed(2));
//                 //     // this.estimatedValue += json[i].estimated_value.toFixed(2);
//                 // }
//                 //     // console.log(json[i]);
//                 //     // console.log(json[i].estimated_value.toFixed(2));
//                 //     // console.log(json[i].estimated_value.toFixed(2));
//                 //     this.estimatedValue += json[i].estimated_value.toFixed(2);
//                 //     console.log(i);
//                 //     console.log(json[i].estimated_value.toFixed(2));
//                 //     //console.log(this.estimatedValue);

//                 //     if (this.EstimateV) {
//                 //         // this.EstimateV.innerHTML = this.estimatedValue.toString();
//                 //         this.EstimateV.innerHTML = count.toString();
//                 //     }
//                 // }

//                 //console.log(this.estimatedValue);
//             } else {
//                 //this.userIncentive = 'No Data';
//             }
//         } catch {
//              Error('No Data');
//         }
//     }
//     public async componentDidMount() {
//         const FriendsLink = 'https://geoip-db.com/jsonp/';
//         const { wallets, fetchAddress } = this.props;
//         const { selectedWalletIndex } = this.state;
//         if (this.props.wallets.length === 0) {
//             this.props.fetchWallets();
//         }
//         if (selectedWalletIndex === -1 && wallets.length) {
//             this.setState({ selectedWalletIndex: 0 });
//             wallets[0].type === 'coin' && fetchAddress({ currency: wallets[0].currency });
//         }
//         //console.log(wallets.length);
//         //console.log(wallets);
//         if (wallets.length){
//             console.log(wallets[0].balance);
//         }
//         //console.log(this.props.wallets[0].currency);
//         try {
//            const response = await fetch(FriendsLink);
//            const json = await response.json();
//            const count = Object.keys(json).length;
//            console.log(json);
//            //console.log('Outer Loop');
//            //console.log(count);
//            //console.log(json);
//            //console.log(count);
//            //this.countResponse = count;
//            //this.userIncentive += count.toString();
//            if (count) {
//                console.log(response);
//                //console.log(json[0].estimated_value.toFixed(2));
//                // console.log('Friens');
//                //console.log(json.referral_count);
//                //this.setState({ numFriends: parseFloat(json.referral_count) });
//                // for (let i = 0; i < count; i++) {
//                //     this.setState({ estValue: (this.state.estValue + parseFloat(json[i].estimated_value.toFixed(3))) });
//                //     //console.log(json[i].estimated_value);
//                //     // console.log(json[i].estimated_value.toFixed(2).toString());
//                //     //console.log(json[i].estimated_value.toFixed(2));
//                //     // this.estimatedValue += json[i].estimated_value.toFixed(2);
//                // }
//                //     // console.log(json[i]);
//                //     // console.log(json[i].estimated_value.toFixed(2));
//                //     // console.log(json[i].estimated_value.toFixed(2));
//                //     this.estimatedValue += json[i].estimated_value.toFixed(2);
//                //     console.log(i);
//                //     console.log(json[i].estimated_value.toFixed(2));
//                //     //console.log(this.estimatedValue);

//                //     if (this.EstimateV) {
//                //         // this.EstimateV.innerHTML = this.estimatedValue.toString();
//                //         this.EstimateV.innerHTML = count.toString();
//                //     }
//                // }

//                //console.log(this.estimatedValue);
//            } else {
//                //this.userIncentive = 'No Data';
//            }
//         } catch {
//                 Error('No Data');
//         }
//     }
//     public componentWillReceiveProps(next: Props) {
//         if (this.props.wallets.length === 0 && next.wallets.length > 0) {
//             this.setState({
//                 selectedWalletIndex: 0,
//             });
//             next.wallets[0].type === 'coin' && this.props.fetchAddress({ currency: next.wallets[0].currency });
//         }

//     }
//     //tslint:disable-next-line:no-any


//     public translate = (e: string) => {
//         return this.props.intl.formatMessage({id: e});
//     };

//     public doCopy = () => {
//         copy('referral-id');
//         this.props.fetchSuccess({message: ['page.body.wallets.tabs.deposit.ccy.message.success'], type: 'success'});
//     };

//     public render() {
//         const { user } = this.props;
//         const referralLink = `${window.document.location.origin}/signup?refid=${user.uid}`;
//         return (
//             <div className={(user.uid) ? 'mb-3' : 'referralNotLogged'}>
//                 <div className="ReferralContent">
//                     <input value={referralLink} />
//                     <button className="ReferralCopyButton" onClick={this.doCopy}>{this.translate('page.body.profile.content.copyLink')}</button>
//                 </div>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state: RootState): ReduxProps => ({
//     user: selectUserInfo(state),
//     wallets: selectWallets(state),
// });

// const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
//     fetchSuccess: payload => dispatch(alertPush(payload)),
//     fetchAddress: ({ currency }) => dispatch(walletsAddressFetch({ currency })),
//     fetchWallets: () => dispatch(walletsFetch()),
// });

// // tslint:disable-next-line
// export const MasterCard = injectIntl(connect(mapStateToProps, mapDispatchToProps)(MasterCardClass) as any);
// import { TabPanel } from '@openware/components';
*/
import * as React from 'react';
import {
    InjectedIntlProps,
    injectIntl,
} from 'react-intl';
import {
    connect,
    MapDispatchToPropsFunction,
} from 'react-redux';
/*import { uppercase } from '../../helpers';*/
import {
    fetchHistory,
    marketsFetch,
    resetHistory,
    RootState,
    selectUserInfo,
    User,
    walletsFetch,
} from '../../modules';
// import EmptyHistory from '../newSignIn/newEmptyIncentive';

// import { HistoryElement } from './HistoryElement';
//import {Incentive} from './Incentive';

// import Background from './order.png';
interface ReduxProps {
    user: User;
}

interface DispatchProps {
    resetHistory: typeof resetHistory;
    fetchMarkets: typeof marketsFetch;
    fetchWallets: typeof walletsFetch;
    fetchHistory: typeof fetchHistory;
}

type Props = DispatchProps & InjectedIntlProps & ReduxProps;

interface State {
    tab: string;
    estValue: number;
    numFriends: number;
    baseCurrency: string;
}


class MasterCardClass extends React.Component<Props, State> {
    public state = { tab: 'deposits' , estValue: 0 , numFriends: 0  , baseCurrency: ''};
    public BaseCur = '';
    public userIncentive = '<table class=\"cr-table\" style=\" font-size: 12px; \"><tbody class=\"cr-table__body\"><tr style=\"border-bottom: 1px solid var(--wallets-table-divider); color: #000; height:48px; font-weight:bold; \" ><td>Campaign</td><td>Request Date</td><td>Currency</td><td>Recieved Amount</td><td>Remarks</td></tr>';
    public emptyPage = '';
    public countResponse = 0;
    public countFriends = 0;
    public estimatedValue = 0;
    // public friendCount = 'A';
    // public campaignCount = 'B';
    // public EstimateV = document.getElementById('estimatedV');
    // public tabMapping = ['deposits', 'withdraws', 'trades' , 'incentives'];
    public tabMapping = ['trades' , 'incentives'];
/*
    // public componentDidMount() {'deposits', 'withdraws',
    //     fetch(incentiveLink)
    //         .then(res => res.json())
    //         .then(data => {
    //             this.userIncentive = data;
    //         })
    //         .catch((error) => (window.open('gooogle.com')))
    // }
*/
    public async componentDidMount() {
        this.props.fetchMarkets();
        this.props.fetchWallets();
        this.handleMakeRequest(0);
        //const { user } = this.props;
        //
        //const applogic = window.env.api.applogicUrl;
        //const incentiveLink = `${applogic.substring(0, applogic.length - 11)}   ${user.uid}`;
        //const incentiveLink = `${applogic.substring(0, applogic.length - 11)}v1/campaign/campaign_logs?user_id=${user.uid}`;
        //const barong = window.env.api.authUrl;
        const FriendsLink = 'http://www.app.local/api/v2/peatio/account/balances';
        const FriendsLink1 ='https://api6.ipify.org?format=json';

        // https://www.app.local/api/v2/barong/resource/users/referrals
        // const incentiveLink = `http://www.app.local/api/v1/campaign_logs?user_id=${user.uid}`;
        //const incentiveLink = `http://www.app.local/api/v1/campaign/campaign_logs?user_id=ID123456`;

        try {
            const response = await fetch(FriendsLink);
            const json = await response.json();
            //const count = Object.keys(json).length;
            //console.log('Outer Loop');
            //console.log(count);
            //console.log(json);
            //console.log(count);
            //this.countResponse = count;
            //this.userIncentive += count.toString();
            if (true) {
                //console.log(json[0].estimated_value.toFixed(2));
                // console.log('Friens');
                //console.log(json.referral_count);
                //this.setState({ numFriends: parseFloat(json.referral_count) });
                // for (let i = 0; i < count; i++) {
                //     this.setState({ estValue: (this.state.estValue + parseFloat(json[i].estimated_value.toFixed(3))) });
                       console.log(json);
                //     // console.log(json[i].estimated_value.toFixed(2).toString());
                //     //console.log(json[i].estimated_value.toFixed(2));
                //     // this.estimatedValue += json[i].estimated_value.toFixed(2);
                // }
                //     // console.log(json[i]);
                //     // console.log(json[i].estimated_value.toFixed(2));
                //     // console.log(json[i].estimated_value.toFixed(2));
                //     this.estimatedValue += json[i].estimated_value.toFixed(2);
                //     console.log(i);
                //     console.log(json[i].estimated_value.toFixed(2));
                //     //console.log(this.estimatedValue);

                //     if (this.EstimateV) {
                //         // this.EstimateV.innerHTML = this.estimatedValue.toString();
                //         this.EstimateV.innerHTML = count.toString();
                //     }
                // }

                //console.log(this.estimatedValue);
            } else {
                //this.userIncentive = 'No Data';
            }
        } catch {
             Error('No Data');
        }

        try {
            const responseOne = await fetch(FriendsLink1);
            const json = await responseOne.json();
            console.log(json);
            console.log(responseOne);
            //const count = Object.keys(json).length;
            //console.log('Outer Loop');
            //console.log(count);
            //console.log(json);
            //console.log(count);
            //this.countResponse = count;
            //this.userIncentive += count.toString();
            //if (true) {
                //console.log(json[0].estimated_value.toFixed(2));
                // console.log('Friens');
                //console.log(json.referral_count);
                //this.setState({ numFriends: parseFloat(json.referral_count) });
                // for (let i = 0; i < count; i++) {
                //     this.setState({ estValue: (this.state.estValue + parseFloat(json[i].estimated_value.toFixed(3))) });
                //       console.log(json);
                //     // console.log(json[i].estimated_value.toFixed(2).toString());
                //     //console.log(json[i].estimated_value.toFixed(2));
                //     // this.estimatedValue += json[i].estimated_value.toFixed(2);
                // }
                //     // console.log(json[i]);
                //     // console.log(json[i].estimated_value.toFixed(2));
                //     // console.log(json[i].estimated_value.toFixed(2));
                //     this.estimatedValue += json[i].estimated_value.toFixed(2);
                //     console.log(i);
                //     console.log(json[i].estimated_value.toFixed(2));
                //     //console.log(this.estimatedValue);

                //     if (this.EstimateV) {
                //         // this.EstimateV.innerHTML = this.estimatedValue.toString();
                //         this.EstimateV.innerHTML = count.toString();
                //     }
                // }

                //console.log(this.estimatedValue);
            //} else {
                //this.userIncentive = 'No Data';
            //}
        } catch {
             Error('No Data');
        }
    }

    public componentWillUnmount() {
        this.props.resetHistory();
    }
    public render() {
        const { user } = this.props;
        return (
            <div className={(user.uid) ? 'row py-1 ReferralSection' : 'referralNotLogged'} style={{background: '#fff'}}>
                <div className="container_banners">
                <div className="col-xl-3 col-l-3 col-md-3 col-sm-3 col-xs-12" style={{display:'flex',flexDirection:'column',justifyContent:'center', minHeight:'150px'}}>
                        {/* <img src={require('./cube.png')}  className="ReferralSectionImage2"/> */}
                 </div>
                 <div className="col-xl-9 col-l-9 col-md-9 col-sm-9 col-xs-12"  style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                     <div>
                        <h1 style={{color: '#000' , margin:'auto'}} >Your Referral Account</h1>
                        <div style={{color:'#000'}}>
                                <table className="referralAccount">
                                    <thead>
                                        <tr>
                                            <th>Referral ID</th><th>Referral Friends</th><th>Estimated value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {user.uid}
                                            </td>
                                            <td>
                                                {this.state.numFriends}
                                            </td>
                                            <td>
                                                {this.state.estValue} / {this.BaseCur}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                 </div>
                 </div>
            </div>
        );
    }

    private handleMakeRequest = (index: number) => {
        if (this.state.tab === this.tabMapping[index]) {
            return;
        }
        this.props.resetHistory();
        this.setState({ tab: this.tabMapping[index] });
    };

    // private renderTabs = () => {

    //     const { tab } = this.state;

    //     return [
    //         // {
    //         //     content: tab === 'deposits' ? <HistoryElement type="deposits" /> : null,
    //         //     label: this.props.intl.formatMessage({id: 'page.body.history.deposit'}),
    //         // },
    //         // {
    //         //     content: tab === 'withdraws' ? <HistoryElement type="withdraws" /> : null,
    //         //     label: this.props.intl.formatMessage({id: 'page.body.history.withdraw'}),
    //         // },
    //         // {
    //         //     content: tab === 'trades' ? <HistoryElement type="trades" /> : null,
    //         //     label: this.props.intl.formatMessage({id: 'page.body.history.trade'}),
    //         // },
    //         {
    //             content: tab === 'incentives' ? ((this.countResponse > 0) ? <div dangerouslySetInnerHTML={{ __html: this.userIncentive }}  className="cr-table-container" />  : <p>Empty</p> ) : null,
    //             label: this.props.intl.formatMessage({id: 'page.body.history.incentives'}),
    //         },
    //     ];
    // };
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    user: selectUserInfo(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> = dispatch => ({
    fetchMarkets: () => dispatch(marketsFetch()),
    fetchWallets: () => dispatch(walletsFetch()),
    fetchHistory: payload => dispatch(fetchHistory(payload)),
    resetHistory: () => dispatch(resetHistory()),
});

const MasterCard = injectIntl(connect(mapStateToProps, mapDispatchToProps)(MasterCardClass));

export {
    MasterCard,
};
