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
}

class RefferalCommissionClass extends React.Component<Props, State> {
    public state = { tab: 'deposits' };
    public userIncentive = '<table class=\"referralHistory\" style=\"font-size: 12px; \"><thead class=\"\"><tr style=\"border-bottom: 1px solid var(--wallets-table-divider); color: #000; height:48px; font-weight:bold; \" ><td>Campaign</td><td>Request Date</td><td>Currency</td><td>Recieved Amount</td><td>Remarks</td></tr></thead><tbody>';
    public emptyPage = '';
    public countResponse = 0;
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
        const applogic = window.env.api.applogicUrl;
        //const incentiveLink = `${applogic.substring(0, applogic.length - 11)}   ${user.uid}` ;
        const incentiveLink = `${applogic.substring(0, applogic.length - 11)}v1/campaign/campaign_logs?user_id=${user.uid}`;
        //const incentiveLink = `http://www.app.local/api/v1/campaign/campaign_logs?user_id=${user.uid}`;
       // const incentiveLink = `http://www.app.local/api/v1/campaign_logs?user_id=${user.uid}`;
        //const incentiveLink = `http://www.app.local/api/v1/campaign/campaign_logs?user_id=ID123456`;


        try {
            const response = await fetch(incentiveLink);
            const json = await response.json();
            const count = Object.keys(json).length;
            this.countResponse = count;
            //console.log('count');
           // console.log(count);
            //console.log(this.countResponse);
            // this.userIncentive += count.toString();
            if (count){
                for (let i = 0; i < count; i++) {
                    this.userIncentive += '<tr style=\"border-bottom: 1px solid var(--wallets-table-divider); color: #000; height:48px;\">';
                    this.userIncentive += `<td>${json[i].campaign_name}</td>`;
                    this.userIncentive += `<td>${json[i].request_date.substr(0, 10)}</td>`;
                    this.userIncentive += `<td>${uppercase(json[i].receive_currency)}</td>`;
                    this.userIncentive += `<td>${json[i].receive_amount}</td>`;
                    this.userIncentive += `<td>${json[i].remark}</td>`;
                    this.userIncentive += '</tr>';
                }
                this.userIncentive += '</tbody></table>';
                this.forceUpdate();
               // console.log(json);
              //  console.log(this.userIncentive);
            } else {
                this.userIncentive = 'No Data</tbody></table>';
            }
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

            <div className={(user.uid) ? 'row  py-1 ReferralSection' : 'referralNotLogged'} style={{background: '#fff'}}>
                <div className="container_banners">
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center' , width: '100%'}}>
                                <div>
                                <h3 style={{textAlign:'center' ,color:'#000' , margin:'50px auto' ,fontSize: '24px' ,  fontWeight:'bold'}}>Latest Commission History</h3>
                                <div className="col-12 mx-0">
                                    {(this.countResponse > 0) ?  <div dangerouslySetInnerHTML={{ __html: this.userIncentive }}  className="cr-table-container" /> :  <div style={{ display:'flex' , flexDirection:'column'}}><img src={require('./activityhistory.png')}  className="ReferralSectionImage4"/><div style={{fontSize: '18px', margin:'30px auto', fontWeight:'bold' , color:'#000'}}>Have no activity history</div></div>}
                                </div>
                                </div>
                    </div>
                </div>
            </div>
            // <div className="background">
            //     <div className="pg-history-tab pg-container">
            //         <div className="pg-history-tab__tabs-content">
            //             <TabPanel
            //                 panels={this.renderTabs()}
            //                 onTabChange={this.handleMakeRequest}
            //             />
            //         </div>
            //     </div>
            // </div>
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

const RefferalCommission = injectIntl(connect(mapStateToProps, mapDispatchToProps)(RefferalCommissionClass));

export {
    RefferalCommission,
};
