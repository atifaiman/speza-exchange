import * as React from 'react';
// import { FormattedMessage } from 'react-intl';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { ProfileAccountActivity } from '../../containers/ProfileAccountActivity';
import { ProfileApiKeys } from '../../containers/ProfileApiKeys';
import { ProfileAuthDetails } from '../../containers/ProfileAuthDetails';
import { ProfileVerification } from '../../containers/ProfileVerification';
import { ReferralProgram } from '../../containers/ReferralProgram';
import { setDocumentTitle } from '../../helpers';

class ProfileComponent extends React.Component<RouterProps> {

    public componentDidMount() {
        setDocumentTitle('Profile');
    }

    public goBack = () => {
        this.props.history.goBack();
    };

    public render() {
        return (
            <div className="container pg-profile-page">
                <div className="pg-profile-page__details">
                    <div className="row pg-profile-page-header pg-profile-page-header-first">
                        <div className="row" style={{display:'block' , width:'100%'}}>
                            <div className="cr-tab-panel">
                            <div className="cr-tab-panel__navigation-container draggable-container" style={{ justifyContent:'center'}}>
                                <ul className="nav nav-tabs">
                                    <li className="active">
                                        <a  data-toggle="tab" href="#ProfileInfo">Profile</a>
                                    </li>
                                    <li >
                                        <a data-toggle="tab" href="#IdentiyVer">Identity Verification</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" >
                                <div  id="ProfileInfo"  className="tab-pane fade in active" >
                                                <ProfileAuthDetails/>
                                </div>
                                <div id="IdentiyVer" className="tab-pane fade">
                                                <ProfileVerification/>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="row px-4" style={{paddingTop: '20px'}}>
                        <div className="col-12 mx-0">
                            <ReferralProgram/>
                        </div>
                    </div>
                </div>
                <div className="pg-profile-page__details">
                    <div className="row pg-profile-page-header pg-profile-page-header-first">
                <div className="row" style={{display:'block' , width:'100%'}}>
                <div className="cr-tab-panel">
                            <div className="cr-tab-panel__navigation-container draggable-container" style={{ justifyContent:'center'}}>
                            <ul className="nav nav-tabs">
                                <li className="active">
                                    <a data-toggle="tab" href="#AccountActivity">Account Activity</a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#APIkeys">API keys</a>
                                </li>
                            </ul>
                    </div></div>
                    <div className="tab-content" >
                        <div id="AccountActivity" className="tab-pane fade">
                                <ProfileAccountActivity/>
                        </div>
                        <div  id="APIkeys"  className="tab-pane fade in active" >
                                <ProfileApiKeys/>
                        </div>
                    </div>
                </div>
                </div></div>
            </div>
        );
    }
}

// tslint:disable-next-line:no-any
const ProfileScreen = withRouter(ProfileComponent as any);

export {
    ProfileScreen,
};
/*
    <div className="row">
        <div className="col-12 col-md-6 mx-0">
            <div className="row col-12 mx-0">
                <ProfileAuthDetails/>
            </div>
        </div>
        <div className="col-12 col-md-6">
            <ProfileVerification/>
        </div>
    </div>

    <h3 className="col-12" >
        <FormattedMessage id="page.body.profile.header.account"/>
    </h3>

    <div className="row">
    <div className="col-12">
        <ProfileApiKeys/>
    </div>
    <div className="col-12">
        <ProfileAccountActivity/>
    </div>
    </div>
*/

