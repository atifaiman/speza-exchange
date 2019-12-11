import axios from 'axios';
import * as React from 'react';
import {
    FormattedHTMLMessage,
} from 'react-intl';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
// import DatePicker from 'react-date-picker';
import {
    RootState,
    selectIntegrationFormStatus,
    selectUserInfo,
    submitIntegrationForm,
    User,
} from '../../modules';
// import DatePicker from 'react-date-picker';

interface ReduxProps {
    user: User;
    integrationFormSubmitted: boolean;
}

interface DispatchProps {
    submitIntegrationForm: typeof submitIntegrationForm;
}

type Props = ReduxProps & DispatchProps & RouterProps;

const TokenListingIntegrationComponent: React.FC<Props> = props => {
    const [project, setProject] = React.useState({
        secProjectAnswer1: undefined,
        secProjectAnswer2: undefined,
        secProjectAnswer3: undefined,
        secProjectAnswer4: undefined,
        secPriceAnswer5: undefined,
        secPriceAnswer6: undefined,
        secPriceAnswer7: undefined,
        secPriceAnswer8: undefined,
        secPriceAnswer9: undefined,
        secDocumentationAnswer10a: undefined,
        secDocumentationAnswer10b: undefined,
        secDocumentationAnswer10c: undefined,
        secDocumentationAnswer10d: undefined,
        secDocumentationAnswer11a: undefined,
        secDocumentationAnswer11b: undefined,
        secDocumentationAnswer11c: undefined,
    });
    const handleProjectChange = (e: React.FormEvent<HTMLInputElement>) => {
        setProject({ ...project, [e.currentTarget.name]: e.currentTarget.value });
    };
    const [progress, setProgress] = React.useState({
        currentProgress: 1,
        totalProgress: 3,
    });
    const [isDisabled, setDisabled] = React.useState(true);
    // tslint:disable-next-line

    React.useEffect(() => {
        // tslint:disable-next-line
        let formSection: any[] = [];
        switch (progress.currentProgress) {
            case 1: formSection = [project.secProjectAnswer1, project.secProjectAnswer2, project.secProjectAnswer3, project.secProjectAnswer4];
                    break;
            case 2: formSection = [project.secPriceAnswer5, project.secPriceAnswer6, project.secPriceAnswer7, project.secPriceAnswer8, project.secPriceAnswer9];
                    break;
            case 3: formSection = [project.secDocumentationAnswer10a];
                    break;
            default: formSection = [project];
        }
        // tslint:disable-next-line
        let emptyErrorFlag: Boolean = formSection.every(particular => particular !== undefined && particular !== '');
        // tslint:disable-next-line
        !emptyErrorFlag ? setDisabled(true) : setDisabled(false);
    });
    const handleNextSection = () => {
        setProgress({ ...progress, currentProgress: progress.currentProgress + 1 });
        window.scrollTo(0, 0);
    };
    const handlePrevSection = () => {
        setProgress({ ...progress, currentProgress: progress.currentProgress - 1 });
        window.scrollTo(0, 0);
    };
    const handleSubmitButton = () => {
        // do POST API here
        const applogic = window.env.api.applogicUrl;
        // tslint:disable-next-line
        const url = applogic.substring(0, applogic.length - 11) + 'v1/listing/listings';
        axios.post(url, {
            uid: props.user.uid,
            form: 'Token Listing Integration',
            json_data: {
                page_1: {
                    item_1: project.secProjectAnswer1,
                    item_2: project.secProjectAnswer2,
                    item_3: project.secProjectAnswer3,
                    item_4: project.secProjectAnswer4,
                },
                page_2: {
                    item_1: project.secPriceAnswer5,
                    item_2: project.secPriceAnswer6,
                    item_3: project.secPriceAnswer7,
                    item_4: project.secPriceAnswer8,
                    item_5: project.secPriceAnswer9,
                },
                page_3: {
                    item_1: project.secDocumentationAnswer10a,
                    item_2: project.secDocumentationAnswer10b,
                    item_3: project.secDocumentationAnswer10c,
                    item_4: project.secDocumentationAnswer10d,
                    item_5: project.secDocumentationAnswer11a,
                    item_6: project.secDocumentationAnswer11b,
                    item_7: project.secDocumentationAnswer11c,
                },
            },
        })
        .then(res => {
            props.submitIntegrationForm();
            props.history.push('/form/request-sent');
        })
        .catch(error => {
            console.log(error);
        });
    };
    const handleReferralPage = () => {
        props.history.push('/referral');
    };
    return (
        <div>
            <div className="page-body">
                {/* <div className="new-form-container"> */}
                <div className="new-form-container">
                    <h1>Speza Exchange - Token &amp; Project Info</h1>
                    <p className="new-form-progress-indicator">{progress.currentProgress}/{progress.totalProgress}</p>
                    <div className="new-form-content">
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 1 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Project Summary</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Project Name</p>
                                            <input className={project.secProjectAnswer1 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer1" value={project.secProjectAnswer1} onChange={handleProjectChange} />
                                            {project.secProjectAnswer1 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Token/Coin Full Name</p>
                                            <input className={project.secProjectAnswer2 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer2" value={project.secProjectAnswer2} onChange={handleProjectChange} />
                                            {project.secProjectAnswer2 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">3.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Token/Coin Symbol or Abbreviation</p>
                                            <input className={project.secProjectAnswer3 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer3" value={project.secProjectAnswer3} onChange={handleProjectChange} />
                                            {project.secProjectAnswer3 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">4.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Icon Picture Upload</p>
                                            <input className={project.secProjectAnswer4 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer4" value={project.secProjectAnswer4} onChange={handleProjectChange} />
                                            {project.secProjectAnswer4 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 2 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Price &amp; Supply</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">5.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Issue Date</p>
                                            <input className={project.secPriceAnswer5 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secPriceAnswer5" value={project.secPriceAnswer5} onChange={handleProjectChange} />
                                            {project.secPriceAnswer5 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">6.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Issue Price (eg. 1 BTC = 5000 token)</p>
                                            <input className={project.secPriceAnswer6 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secPriceAnswer6" value={project.secPriceAnswer6} onChange={handleProjectChange} />
                                            {project.secPriceAnswer6 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">7.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Total Supply</p>
                                            <input className={project.secPriceAnswer7 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secPriceAnswer7" value={project.secPriceAnswer7} onChange={handleProjectChange} />
                                            {project.secPriceAnswer7 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">8.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Max Supply</p>
                                            <input className={project.secPriceAnswer8 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secPriceAnswer8" value={project.secPriceAnswer8} onChange={handleProjectChange} />
                                            {project.secPriceAnswer8 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">9.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Circulating Supply</p>
                                            <input className={project.secPriceAnswer9 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secPriceAnswer9" value={project.secPriceAnswer9} onChange={handleProjectChange} />
                                            {project.secPriceAnswer9 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 3 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Documentation</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">10.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Full API Documentation</p>
                                            <br />
                                            <p className="row-question">RPC</p>
                                            <input className={project.secDocumentationAnswer10a === '' ? `row-input row-input-error` : `row-input`} type="text" name="secDocumentationAnswer10a" value={project.secDocumentationAnswer10a} onChange={handleProjectChange} />
                                            {project.secDocumentationAnswer10a === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                            <br />
                                            <p className="row-question">Price (if any)</p>
                                            <input className={project.secDocumentationAnswer10b === '' ? `row-input row-input-error` : `row-input`} type="text" name="secDocumentationAnswer10b" value={project.secDocumentationAnswer10b} onChange={handleProjectChange} />
                                            <p className="row-space">---</p>
                                            <br />
                                            <p className="row-question">3rd Party Node (if any)</p>
                                            <input className={project.secDocumentationAnswer10c === '' ? `row-input row-input-error` : `row-input`} type="text" name="secDocumentationAnswer10c" value={project.secDocumentationAnswer10c} onChange={handleProjectChange} />
                                            <p className="row-space">---</p>
                                            <br />
                                            <p className="row-question">If the above is unavailable, please provide full documentation to set up the blockchain server</p>
                                            <input className={project.secDocumentationAnswer10d === '' ? `row-input row-input-error` : `row-input`} type="text" name="secDocumentationAnswer10d" value={project.secDocumentationAnswer10d} onChange={handleProjectChange} />
                                            <p className="row-space">---</p>
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">11.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">If the token is ERC-20, please provide the following</p>
                                            <br />
                                            <p className="row-question">Token Contract Address</p>
                                            <input className={project.secDocumentationAnswer11a === '' ? `row-input row-input-error` : `row-input`} type="text" name="secDocumentationAnswer11a" value={project.secDocumentationAnswer11a} onChange={handleProjectChange} />
                                            <p className="row-space">---</p>
                                            <br />
                                            <p className="row-question">Coin Decimals</p>
                                            <input className={project.secDocumentationAnswer11b === '' ? `row-input row-input-error` : `row-input`} type="text" name="secDocumentationAnswer11b" value={project.secDocumentationAnswer11b} onChange={handleProjectChange} />
                                            <p className="row-space">---</p>
                                            <br />
                                            <p className="row-question">Price API (if any)</p>
                                            <input className={project.secDocumentationAnswer11c === '' ? `row-input row-input-error` : `row-input`} type="text" name="secDocumentationAnswer11c" value={project.secDocumentationAnswer11c} onChange={handleProjectChange} />
                                            <p className="row-space">---</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="new-form-button-container">
                            {progress.currentProgress !== 1 && <input type="submit" value="Back" className="new-form-button-box new-form-button-back" onClick={handlePrevSection}/>}
                            {progress.currentProgress < progress.totalProgress && <input type="submit" value="Next" className={isDisabled ? `new-form-button-box new-form-button-next new-form-button-disabled` : `new-form-button-box new-form-button-next`} disabled={isDisabled} onClick={handleNextSection}/>}
                            {progress.currentProgress === progress.totalProgress && <input type="submit" value="Submit" className={isDisabled ? `new-form-button-box new-form-button-next new-form-button-disabled` : `new-form-button-box new-form-button-next`} disabled={isDisabled} onClick={handleSubmitButton}/>}
                        </div>
                    </div>
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
        integrationFormSubmitted: selectIntegrationFormStatus(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
    submitIntegrationForm: () => dispatch(submitIntegrationForm()),
});

// tslint:disable-next-line:no-any
const TokenListingIntegrationScreen = withRouter(connect(mapStateToProps, mapDispatchToProps)(TokenListingIntegrationComponent) as any);

export {
    TokenListingIntegrationScreen,
};
