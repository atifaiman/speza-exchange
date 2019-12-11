import * as React from 'react';
import {
    FormattedHTMLMessage,
} from 'react-intl';
import {
    connect,
    MapStateToProps,
} from 'react-redux';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
// import DatePicker from 'react-date-picker';
import {
    RootState,
    selectUserInfo,
    User,
} from '../../modules';

interface ReduxProps {
    user: User;
}

type Props = ReduxProps & RouterProps;

const RegistrationDoneComponent: React.FC<Props> = (props: Props) => {
    const handleReferralPage = () => {
        props.history.push('/referral');
    };
    return (
        <div>
            <div className="page-body">
                {/* <div className="new-form-container"> */}
                <div className="new-form-container" id="form-verified">
                    <div id="icon-verified" />
                    <h2>You have successfully submitted the application pending for approval.</h2>
                    <p><br />Once your application is approved, we will notify you via email at {props.user.email}</p>
                </div>
            </div>
            <div className="footer-menu">
                <div className="landpage-Banners">
                    <div className="spezaButtomBanner" style={{ background:'#212328'}}>
                        <div className="row">
                            <div className="row container_banners" style={{maxHeight:'400px'}}>
                                <div className="col-5" style={{height:'400px' , background:'#212328', display:'flex'}}>
                                    <div style={{margin:'110px -10px', display:'flex' , flexDirection:'column' , textAlign:'left' , lineHeight:'12px'}} >
                                        <img src={require('../LandingScreen/Speza_logo_full_beta.gif')} style={{ height:'55px', marginBottom:'-10px'}}/>
                                        <h3 style={{fontSize:'14px' , color:'#fff' , marginTop:'30px', fontWeight:'bold'}}>HAVE QUESTIONS?</h3>
                                        <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link1"/></p>
                                        <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link2"/></p>
                                        <p><FormattedHTMLMessage id="page.header.panelbottom.col1.link3"/></p>
                                        <p><span style={{color: '#fff'}}>+603 7490 7707</span></p>
                                    </div>
                                </div>
                                <div className="col-1.2" style={{height:'400px' , background:'#212328', display:'flex' }}>
                                    <div style={{marginTop:'163px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px' ,flexDirection:'column'}} >
                                        <h3 style={{fontSize:'14px' , color:'#fff', fontWeight:'bold'}}>COMPANY</h3>
                                        <ul style={{ listStyleType: 'none' , padding: '0' , lineHeight: '20px'}}>
                                        <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}>About Us</li>
                                        <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us/articles/360033576071-Term-of-Service">Terms</a></li>
                                        <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank"  href="https://speza.zendesk.com/hc/en-us/articles/360032045111-Privacy-Policy">Privacy</a></li>
                                        <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}>Fees</li>
                                        {/* tslint: disable-next-line */}
                                        <li style={{fontSize:'12px' , color:'#fff' , cursor: 'pointer'}}><a className="buttomFotter" onClick={handleReferralPage}>Referral</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-2-1" style={{height:'400px' , background:'#212328', display:'flex' }}>
                                    <div style={{marginTop:'163px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px', flexDirection:'column'}}>
                                        <h3 style={{fontSize:'14px' , color:'#fff', fontWeight:'bold'}}>PRODUCTS</h3>
                                        <ul style={{ listStyleType: 'none',  padding: '0' , lineHeight: '20px'}}>
                                        <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/regulated-digital-asset-exchange.html">Regulated Exchange Platform</a></li>
                                        <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/regulated-digital-asset-token-offering.html">Regulated Asset Backed Tokenization</a></li>
                                        {/* <li style={{fontSize:'12px' , color:'#1E252F'}}>Offshore Virtual Currency</li> */}
                                        <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/ovce.html">Exchange License</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-1.5" style={{height:'400px' , background:'#212328', display:'flex' }}>
                                    <div style={{marginTop:'163px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px', flexDirection:'column'}}>
                                        <h3 style={{fontSize:'14px' , color:'#fff', fontWeight:'bold'}}>RESOURCES</h3>
                                        <ul style={{ listStyleType: 'none' , padding: '0' , lineHeight: '20px'}}>
                                            <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/blog.html">Blog</a></li>
                                            <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us/sections/360003652372-Announcements">Announcements</a></li>
                                            <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}><a className="buttomFotter" target="_blank" href="https://app.swaggerhub.com/apis-docs/SpezaOrg/SpezaExchange/2.0.39">API Docs</a></li>
                                            <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us/categories/360001478292-FAQ">FAQ</a></li>
                                            <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://speza.zendesk.com/hc/en-us">Support Center</a></li>
                                            <li style={{fontSize:'12px' , color:'#fff' , display:'none'}}>Contact Us</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-1.3" style={{height:'400px' , background:'#212328', display:'flex' }}>
                                    <div style={{marginTop:'163px', display:'flex' , marginLeft: '40px' , textAlign:'left' , lineHeight:'14px',flexDirection:'column'}}>
                                        <h3 style={{fontSize:'14px' , color:'#fff' , fontWeight:'bold'}}>CAREERS</h3>
                                        <ul style={{ listStyleType: 'none',  padding: '0' , lineHeight: '20px'}}>
                                        <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/careers.html">Careers</a></li>
                                        <li style={{fontSize:'12px' , color:'#fff'}}><a className="buttomFotter" target="_blank" href="https://www.speza.org/apply-to-speza.html">Apply to SPEZA</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> =
    (state: RootState): ReduxProps => ({
        user: selectUserInfo(state),
});

// tslint:disable-next-line:no-any
const RegistrationDoneScreen = withRouter(connect(mapStateToProps)(RegistrationDoneComponent) as any);

export {
    RegistrationDoneScreen,
};
