// import { TabPanel } from '@openware/components';
import * as React from 'react';
import {
    InjectedIntlProps,
    injectIntl,
} from 'react-intl';
import {
    connect,
    MapDispatchToPropsFunction,
} from 'react-redux';
import { uppercase } from '../../helpers';
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

class RefferalAccountClass extends React.Component<Props, State> {
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
        const { user } = this.props;
        //
        const applogic = window.env.api.applogicUrl;
        //const incentiveLink = `${applogic.substring(0, applogic.length - 11)}   ${user.uid}`;
        const incentiveLink = `${applogic.substring(0, applogic.length - 11)}v1/campaign/campaign_logs?user_id=${user.uid}`;
        const barong = window.env.api.authUrl;
        const FriendsLink = `${barong}/resource/users/referrals`;

        // https://www.app.local/api/v2/barong/resource/users/referrals
        // const incentiveLink = `http://www.app.local/api/v1/campaign_logs?user_id=${user.uid}`;
        //const incentiveLink = `http://www.app.local/api/v1/campaign/campaign_logs?user_id=ID123456`;

        try {
            const response = await fetch(FriendsLink);
            const json = await response.json();
            const count = Object.keys(json).length;
            //console.log('Outer Loop');
            //console.log(count);
            //console.log(json);
            //console.log(count);
            //this.countResponse = count;
            //this.userIncentive += count.toString();
            if (count) {
                //console.log(json[0].estimated_value.toFixed(2));
                // console.log('Friens');
                //console.log(json.referral_count);
                this.setState({ numFriends: parseFloat(json.referral_count) });
                // for (let i = 0; i < count; i++) {
                //     this.setState({ estValue: (this.state.estValue + parseFloat(json[i].estimated_value.toFixed(3))) });
                //     //console.log(json[i].estimated_value);
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
            const response = await fetch(incentiveLink);
            const json = await response.json();
            const count = Object.keys(json).length;
            //console.log('Outer Loop');
            //console.log(count);
            //console.log(json);
            //console.log(count);
            //this.countResponse = count;
            //this.userIncentive += count.toString();
            if (count) {
                //console.log(json[0].estimated_value.toFixed(2));
                //console.log('true');
                for (let i = 0; i < count; i++) {
                    const value = (this.state.estValue + parseFloat(json[i].receive_amount));
                    this.setState({ estValue: value });
                }
                //this.setState({ estValue: parseFloat(json[0].estimated_value) });
                //this.estimatedValue = this.estimatedValue + parseFloat(json[0].estimated_value) ;
                //console.log('Estimate');
                //console.log(this.estimatedValue);
                // console.log('Estimate State');
                //console.log(this.state.estValue);
                //console.log(json[0].estimated_value);
                //console.log(parseFloat(json[0].estimated_value));
                this.BaseCur = uppercase(json[0].base_currency);
                this.forceUpdate();
                // for (let i = 0; i < count; i++) {
                //     //console.log(json[i].estimated_value);
                //     console.log('Estimate');
                //     console.log(this.estimatedValue);
                //     console.log(json[i].estimated_value);
                //     this.estimatedValue += parseFloat(json[i].estimated_value.toFixed(3)) ;
                //     this.BaseCur = uppercase(json[i].base_currency);
                //     this.forceUpdate();
                //     //this.setState({ estValue: (this.state.estValue + parseFloat(json[i].estimated_value.toFixed(3))) });
                //     // this.setState({ baseCurrency: uppercase(json[i].base_currency)}, () => {
                //     //     this.forceUpdate();
                //     // });
                //     //console.log(json[i].estimated_value);
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
            //console.log(this.BaseCur);
            //console.log(this.state.estValue);
            //console.log(this.state.numFriends);
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
                        <img src={require('./cube.png')}  className="ReferralSectionImage2"/>
                 </div>
                 <div className="col-xl-9 col-l-9 col-md-9 col-sm-9 col-xs-12"  style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                     <div>
                        <h1 style={{color: '#000' , margin:'auto'}} >Your Referral Account</h1>
                        <div style={{color:'#000'}}>
                                <table className="referralAccount">
                                    <thead>
                                        <tr>
                                            <th>Referral ID</th><th style={{textAlign:'center'}}>Referral Friends</th><th style={{textAlign:'center'}}>Estimated value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {user.uid}
                                            </td>
                                            <td style={{textAlign:'center'}}>
                                                {this.state.numFriends}
                                            </td>
                                            <td style={{textAlign:'center'}}>
                                                {/* {this.state.estValue} / {this.BaseCur} */}
                                                {this.state.estValue} / SVT
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

const RefferalAccount = injectIntl(connect(mapStateToProps, mapDispatchToProps)(RefferalAccountClass));

export {
    RefferalAccount,
};
