import axios from 'axios';
import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import {
    checkChecklistFormSubmission,
    checkIntegrationFormSubmission,
    checkRegistrationFormSubmission,
    resetSubmissionStatus,
    RootState,
    selectChecklistFormStatus,
    selectIntegrationFormStatus,
    selectRegistrationFormStatus,
    selectUserInfo,
    submitChecklistForm,
    submitIntegrationForm,
    submitRegistrationForm,
    User,
} from '../../modules';
// import DatePicker from 'react-date-picker';

interface ReduxProps {
    user: User;
    integrationFormSubmitted: boolean;
    checklistFormSubmitted: boolean;
    registrationFormSubmitted: boolean;
}

interface DispatchProps {
    resetSubmissionStatus: typeof resetSubmissionStatus;
    submitChecklistForm: typeof submitChecklistForm;
    submitIntegrationForm: typeof submitIntegrationForm;
    submitRegistrationForm: typeof submitRegistrationForm;
    checkChecklistFormSubmission: typeof checkChecklistFormSubmission;
    checkIntegrationFormSubmission: typeof checkIntegrationFormSubmission;
    checkRegistrationFormSubmission: typeof checkRegistrationFormSubmission;
}

type Props = ReduxProps & RouterProps & DispatchProps;


// tslint:disable-next-line
const CoinListingApplicationComponent: React.FC<Props> = (props: Props) => {
    const [project, setProject] = React.useState({
        name: undefined,
        tokenFullName: undefined,
        tokenAbbreviation: undefined,
        email: undefined,
    });
    const handleProjectChange = (e: React.FormEvent<HTMLInputElement>) => {
        setProject({ ...project, [e.currentTarget.name]: e.currentTarget.value });
    };
    const [progress, setProgress] = React.useState({
        currentProgress: 1,
        totalProgress: 2,
    });
    const [isDisabled, setDisabled] = React.useState(true);
    React.useEffect(() => {
        const applogic = window.env.api.applogicUrl;
        // tslint:disable-next-line
        const url = applogic.substring(0, applogic.length - 11) + 'v1/listing/listings?uid=' + props.user.uid;
        axios.get(url)
        .then(res => {
            console.log(res);
            // tslint:disable-next-line
            const formArray: any = res;
            formArray.data.find(resItem => resItem.form === 'Token Listing Integration') && props.checkIntegrationFormSubmission();
            formArray.data.find(resItem => resItem.form === 'Token Listing Checklist') && props.checkChecklistFormSubmission();
            formArray.data.find(resItem => resItem.form === 'Coin Listing Registration') && props.checkRegistrationFormSubmission();
        })
        .catch(error => console.log(error));
        // tslint:disable-next-line
        props.registrationFormSubmitted ? props.history.push('/registration-complete') : (props.integrationFormSubmitted && setProgress({ ...progress, currentProgress: 2 }));
        // tslint:disable-next-line
        let formSection: any[] = [];
        switch (progress.currentProgress) {
            case 1: formSection = [project.name, project.tokenFullName, project.tokenAbbreviation, project.email];
                    break;
            default: formSection = [project];
        }
        // tslint:disable-next-line
        let emptyErrorFlag: Boolean = formSection.every(particular => particular !== undefined && particular !== '');
        // tslint:disable-next-line
        !emptyErrorFlag ? setDisabled(true) : setDisabled(false);
    }, [project]);
    const handleNextSection = () => {
        const applogic = window.env.api.applogicUrl;
        // tslint:disable-next-line
        const url = applogic.substring(0, applogic.length - 11) + 'v1/listing/listings';
        axios.post(url, {
            uid: props.user.uid,
            form: 'Coin Listing Registration',
            json_data: {
                page_1: {
                    item_1: project.name,
                    item_2: project.tokenFullName,
                    item_3: project.tokenAbbreviation,
                    item_4: project.email,
                },
            },
        })
        .then(res => {
            setProgress({ ...progress, currentProgress: progress.currentProgress + 1 });
        })
        .catch(error => {
            console.log(error);
        });
        window.scrollTo(0, 0);
    };
    const handlePrevSection = () => {
        setProgress({ ...progress, currentProgress: progress.currentProgress - 1 });
        window.scrollTo(0, 0);
    };
    const handleIntegrationForm = () => {
        props.history.push('/form/token-listing-integration');
    };
    const handleChecklistForm = () => {
        props.history.push('/form/token-listing-checklist');
    };
    const handleSubmitButton = () => {
        props.submitRegistrationForm();
        props.history.push('/form/registration-complete');
    };
    const handleReferralPage = () => {
        props.history.push('/referral');
    };
    // const handleReset = () => {
    //     props.resetSubmissionStatus();
    // };
    // const handleFakeIntegrationSubmit = () => {
    //     props.submitIntegrationForm();
    // };
    // const handleFakeChecklistSubmit = () => {
    //     props.submitChecklistForm();
    // };
    return (
        <div>
            <div className="page-body">
                {/* <div className="new-form-container"> */}
                <div className="new-form-container">
                    <h1>Listing a Coin on SPEZA Exchange</h1>
                    <div className="new-form-content">
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 1 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Fill Out Basic Information</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Project Name</p>
                                            <input className={project.name === '' ? `row-input row-input-error` : `row-input`} type="text" name="name" value={project.name} onChange={handleProjectChange} />
                                            {project.name === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Token/Coin Full Name</p>
                                            <input className={project.tokenFullName === '' ? `row-input row-input-error` : `row-input`} type="text" name="tokenFullName" value={project.tokenFullName} onChange={handleProjectChange} />
                                            {project.tokenFullName === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">3.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Token/Coin Symbol</p>
                                            <input className={project.tokenAbbreviation === '' ? `row-input row-input-error` : `row-input`} type="text" name="tokenAbbreviation" value={project.tokenAbbreviation} onChange={handleProjectChange} />
                                            {project.tokenAbbreviation === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">4.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question">Email</p>
                                            <input className={project.email === '' ? `row-input row-input-error` : `row-input`} type="text" name="email" value={project.email} onChange={handleProjectChange} />
                                            {project.email === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 2 && (
                                <div className="new-form-content-page">
                                    <p style={{ textAlign: 'center' }}>Complete Detailed Information</p>
                                    <div className="new-form-content-alert">
                                        <div className="alert-icon" id="icon-form" />
                                        <div className="alert-text">
                                            <p>You have successfully uploaded the basic information required for your listing application. Please make sure to click the below links and upload the additional information required through the SPEZA Token Listing Info and SPEZA Token Listing Info Webpage.</p>
                                        </div>
                                    </div>
                                    <div className="new-form-track-progress">
                                        <div className="progress-track-line"/>
                                        <div className="progress-list">
                                            <div className={props.integrationFormSubmitted ? 'progress-item progress-done' : 'progress-item'}>
                                                <div className="progress-item-number"><p>1</p></div>
                                                <div className="progress-item-title">Token Listing Integration</div>
                                                {/* {props.integrationFormSubmitted ? (<Link to="/form/token-listing-integration" target="_blank"className="progress-item-link">Token Listing Integration Form</Link>) : (<Link to="#" target="_blank" className="progress-item-link-disabled">Token Listing Integration Form</Link>)} */}
                                                {/* <Link to="/form/token-listing-integration" target="_blank"className="progress-item-link">Token Listing Integration Form</Link> */}
                                                <div className="progress-item-link" onClick={handleIntegrationForm}>Token Listing Integration Form</div>
                                            </div>
                                            <div className={props.integrationFormSubmitted ? (props.checklistFormSubmitted ? 'progress-item progress-done' : 'progress-item') : 'progress-item progress-disabled'}>
                                                <div className="progress-item-number"><p>2</p></div>
                                                <div className="progress-item-title">Token Listing Checklist</div>
                                                {/* <Link to="/form/token-listing-checklist" target="_blank" className="progress-item-link">Token Listing Checklist Form</Link> */}
                                                <div className="progress-item-link" onClick={handleChecklistForm}>Token Listing Integration Form</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="new-form-button-container">
                            {progress.currentProgress !== 1 && <input type="submit" value="Back" className="new-form-button-box new-form-button-back" onClick={handlePrevSection}/>}
                            {progress.currentProgress < progress.totalProgress && <input type="submit" value="Next" className={isDisabled ? `new-form-button-box new-form-button-next new-form-button-disabled` : `new-form-button-box new-form-button-next`} disabled={isDisabled} onClick={handleNextSection}/>}
                            {progress.currentProgress === progress.totalProgress && <input type="submit" value="Apply" className={!props.checklistFormSubmitted ? `new-form-button-box new-form-button-next new-form-button-disabled` : `new-form-button-box new-form-button-next`} disabled={!props.checklistFormSubmitted} onClick={handleSubmitButton}/>}
                            {/* <input type="submit" value="Reset" className="new-form-button-box new-form-button-next" onClick={handleReset} /> */}
                            {/* <input type="submit" value="Submit Integration" className="new-form-button-box new-form-button-next" onClick={handleFakeIntegrationSubmit} /> */}
                            {/* <input type="submit" value="Submit Checklist" className="new-form-button-box new-form-button-next" onClick={handleFakeChecklistSubmit}  /> */}
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
        checklistFormSubmitted: selectChecklistFormStatus(state),
        registrationFormSubmitted: selectRegistrationFormStatus(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        submitChecklistForm: () => dispatch(submitChecklistForm()),
        submitIntegrationForm: () => dispatch(submitIntegrationForm()),
        submitRegistrationForm: () => dispatch(submitRegistrationForm()),
        resetSubmissionStatus: () => dispatch(resetSubmissionStatus()),
        checkChecklistFormSubmission: () => dispatch(checkChecklistFormSubmission()),
        checkIntegrationFormSubmission: () => dispatch(checkIntegrationFormSubmission()),
        checkRegistrationFormSubmission: () => dispatch(checkRegistrationFormSubmission()),
});

// tslint:disable-next-line:no-any
const CoinListingApplicationScreen = withRouter(connect(mapStateToProps, mapDispatchToProps)(CoinListingApplicationComponent) as any);

export {
    CoinListingApplicationScreen,
};
