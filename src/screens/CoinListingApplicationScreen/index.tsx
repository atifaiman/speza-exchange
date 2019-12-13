import axios from 'axios';
import * as React from 'react';
import { FormattedHTMLMessage, FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import Modal from 'react-responsive-modal';
import { RouteChildrenProps, RouterProps } from 'react-router';
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

type Props = ReduxProps & RouterProps & DispatchProps & RouteChildrenProps & InjectedIntlProps;


// tslint:disable-next-line
const CoinListingApplicationComponent: React.FC<Props> = (props: Props) => {
    const [project, setProject] = React.useState({
        name: undefined,
        tokenFullName: undefined,
        tokenAbbreviation: undefined,
        email: undefined,
    });
    const [integrationSubmission, setIntegrationSubmission] = React.useState(false);
    const [checklistSubmission, setChecklistSubmission] = React.useState(false);
    const [projectID, setProjectID] = React.useState(0);
    // tslint:disable-next-line
    const [selectedProject, setSelectedProject] = React.useState({} as any);
    const handleProjectChange = (e: React.FormEvent<HTMLInputElement>) => {
        setProject({ ...project, [e.currentTarget.name]: e.currentTarget.value });
    };
    const [progress, setProgress] = React.useState({
        currentProgress: 1,
        totalProgress: 2,
    });
    const [isDisabled, setDisabled] = React.useState(true);
    // tslint:disable-next-line
    const [projectList, setProjectList] = React.useState([]);
    const [toggleDropdown, setToggleDropdown] = React.useState(false);
    const [toggleModal, setToggleModal] = React.useState(false);
    const [toggleForm, setToggleForm] = React.useState(false);

    // fetch data and map
    React.useEffect(() => {
        const applogic = window.env.api.applogicUrl;
        // tslint:disable-next-line
        const url = applogic.substring(0, applogic.length - 11) + 'v1/listing/listings?uid=' + props.user.uid;
        axios.get(url)
        .then(res => {
            // tslint:disable-next-line
            let tempProjectList = res.data.filter(elem => elem.form === 'Coin Listing Registration') as any;
            // tslint:disable-next-line
            tempProjectList.forEach((project: any, index: number) => {
                tempProjectList[index].json_data = JSON.parse(project.json_data.replace(/=>/g, ':'));
            });
            setProjectList(tempProjectList);
            if (props.location.state) {
                const tempSelectedProject = tempProjectList.find(proj => proj.id === props.location.state.projectID);
                setProjectID(props.location.state.projectID);
                setSelectedProject(tempSelectedProject);
                setProgress({ ...progress, currentProgress: 2 });
            }
        })
        .catch(error => console.log(error));
    }, []);

    // empty checks
    React.useEffect(() => {
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

    React.useEffect(() => {
        const applogic = window.env.api.applogicUrl;
        // tslint:disable-next-line
        const url = applogic.substring(0, applogic.length - 11) + 'v1/listing/listings?uid=' + props.user.uid;
        axios.get(url)
        .then(res => {
            // tslint:disable-next-line
            let tempForms = res.data.filter(elem => elem.form !== 'Coin Listing Registration') as any;
            // tslint:disable-next-line
            tempForms.forEach((form: any, index: number) => {
                tempForms[index].json_data = JSON.parse(form.json_data.replace(/=>/g, ':'));
            });
            if (tempForms.find(formItem => (formItem.form === 'Token Listing Integration') && (formItem.json_data.registration_id === projectID))) {setIntegrationSubmission(true);} else {setIntegrationSubmission(false);}
            if (tempForms.find(formItem => (formItem.form === 'Token Listing Checklist') && (formItem.json_data.registration_id === projectID))) {setChecklistSubmission(true);} else {setChecklistSubmission(false);}
        })
        .catch(error => console.log(error));
    }, [selectedProject]);

    React.useEffect(() => {
        if (integrationSubmission && checklistSubmission) {
            setDisabled(false);
        }
    }, [integrationSubmission, checklistSubmission]);


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
            setProjectID(res.data.id);
            setSelectedProject(res.data);
            setProgress({ ...progress, currentProgress: progress.currentProgress + 1 });
        })
        .catch(error => {
            props.history.push('/signIn');
        });
        window.scrollTo(0, 0);
    };

    const handleProjectAccess = projectInfo => {
        setToggleDropdown(false);
        setProjectID(projectInfo.id);
        setSelectedProject(projectInfo);
        setProgress({ ...progress, currentProgress: 2 });
    };

    const closeModal = () => {setToggleModal(false);};

    const handlePrevSection = () => {
        setProgress({ ...progress, currentProgress: progress.currentProgress - 1 });
        window.scrollTo(0, 0);
    };
    const handleIntegrationForm = () => {
        props.history.push({
            pathname: '/form/token-listing-integration',
            state: { projectID: projectID },
        });
    };
    const handleChecklistForm = () => {
        props.history.push({
            pathname: '/form/token-listing-checklist',
            state: { projectID: projectID },
        });
    };
    const handleSubmitButton = () => {
        console.log('Modal here');
        setToggleModal(true);
    };
    const handleReferralPage = () => {
        props.history.push('/referral');
    };
    const handleDropdownList = () => {
        setToggleDropdown(!toggleDropdown);
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
    const handleToggleForm = () => {
        setToggleForm(true);
        setToggleDropdown(false);
    };
    return (
        <div>
            <div className="page-body">
                {/* <div className="new-form-container"> */}
                <div className="new-form-container">
                    <h1><FormattedMessage id="page.body.form.application.title" /></h1>
                    <p className="row-helper-text"><br /><FormattedMessage id="page.body.form.helper-text.existing-project1"/></p>
                    <p className="row-helper-text"><FormattedMessage id="page.body.form.helper-text.existing-project2"/></p>
                    {/* tslint:disable-next-line */}
                    <div>
                        <div className="dropdown-main-button" onClick={handleDropdownList}><FormattedMessage id="page.body.form.existing-project" /></div>
                        <div className={toggleDropdown ? 'dropdown-lists' : 'dropdown-lists-invisible'}>
                            {/* tslint:disable-next-line */}
                            <div className="dropdown-item" style={{ fontWeight: 700 }} onClick={handleToggleForm}>Create new project</div>
                            {/* tslint:disable-next-line */}
                            {projectList.map((project: any, index: number) => <div key={index} className="dropdown-item" onClick={() => handleProjectAccess(project)}>{project.json_data.page_1.item_1}</div>)}
                        </div>
                    </div>
                    <div className={toggleForm ? 'new-form-content' : 'new-form-content-invisible'}>
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 1 && (
                                <div className="new-form-content-page">
                                    <div className="new-form-content-title-bar">
                                        <p className="new-form-content-title"><FormattedMessage id="page.body.form.application.secProject" /></p>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.application.secProjectQuestion1" /></p>
                                            <input className={project.name === '' ? `row-input row-input-error` : `row-input`} type="text" name="name" value={project.name} onChange={handleProjectChange} />
                                            {project.name === '' ? <p className="row-error"><FormattedMessage id="page.body.form.error.input-required" /></p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.application.secProjectQuestion2" /></p>
                                            <input className={project.tokenFullName === '' ? `row-input row-input-error` : `row-input`} type="text" name="tokenFullName" value={project.tokenFullName} onChange={handleProjectChange} />
                                            {project.tokenFullName === '' ? <p className="row-error"><FormattedMessage id="page.body.form.error.input-required" /></p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">3.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.application.secProjectQuestion3" /></p>
                                            <input className={project.tokenAbbreviation === '' ? `row-input row-input-error` : `row-input`} type="text" name="tokenAbbreviation" value={project.tokenAbbreviation} onChange={handleProjectChange} />
                                            {project.tokenAbbreviation === '' ? <p className="row-error"><FormattedMessage id="page.body.form.error.input-required" /></p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">4.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.application.secProjectQuestion4" /></p>
                                            <input className={project.email === '' ? `row-input row-input-error` : `row-input`} type="text" name="email" value={project.email} onChange={handleProjectChange} />
                                            {project.email === '' ? <p className="row-error"><FormattedMessage id="page.body.form.error.input-required" /></p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 2 && (
                                <div className="new-form-content-page">
                                    <p style={{ textAlign: 'center' }}><FormattedMessage id="page.body.form.complete-detailed-information" /></p>
                                    <div className="new-form-content-alert">
                                        <div className="alert-icon" id="icon-info" />
                                        <div className="alert-text">
                                            <p><FormattedMessage id="page.body.form.alert.info1" /></p>
                                        </div>
                                    </div>
                                    {/* <div className="new-form-project-name"><p>{selectedProject.json_data.page_1.item_1}</p></div> */}
                                    <div className="new-form-track-progress">
                                        <div className="progress-track-line"/>
                                        <div className="progress-list">
                                            <div className={integrationSubmission ? 'progress-item progress-done' : 'progress-item'}>
                                                <div className="progress-item-number"><p>1</p></div>
                                                <div className="progress-item-title"><FormattedMessage id="page.body.form.token-listing-integration" /></div>
                                                {/* {integrationSubmission ? (<Link to="/form/token-listing-integration" target="_blank"className="progress-item-link">Token Listing Integration Form</Link>) : (<Link to="#" target="_blank" className="progress-item-link-disabled">Token Listing Integration Form</Link>)} */}
                                                {/* <Link to="/form/token-listing-integration" target="_blank"className="progress-item-link">Token Listing Integration Form</Link> */}
                                                <div className="progress-item-link" onClick={handleIntegrationForm}>Token Listing Integration Form</div>
                                            </div>
                                            <div className={integrationSubmission ? (checklistSubmission ? 'progress-item progress-done' : 'progress-item') : 'progress-item progress-disabled'}>
                                                <div className="progress-item-number"><p>2</p></div>
                                                <div className="progress-item-title"><FormattedMessage id="page.body.form.speza-exchange-token-listing-checklist" /></div>
                                                {/* <Link to="/form/token-listing-checklist" target="_blank" className="progress-item-link">Token Listing Checklist Form</Link> */}
                                                <div className="progress-item-link" onClick={handleChecklistForm}>Token Listing Checklist Form</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="new-form-button-container">
                            {progress.currentProgress !== 1 && <input type="submit" value={props.intl.formatMessage({id: 'page.body.form.back'})} className="new-form-button-box new-form-button-back" onClick={handlePrevSection}/>}
                            {progress.currentProgress < progress.totalProgress && <input type="submit" value={props.intl.formatMessage({id: 'page.body.form.next'})} className={isDisabled ? `new-form-button-box new-form-button-next new-form-button-disabled` : `new-form-button-box new-form-button-next`} disabled={isDisabled} onClick={handleNextSection}/>}
                            {progress.currentProgress === progress.totalProgress && <input type="submit" value={props.intl.formatMessage({id: 'page.body.form.submit'})} className={!checklistSubmission ? `new-form-button-box new-form-button-next new-form-button-disabled` : `new-form-button-box new-form-button-next`} disabled={!checklistSubmission} onClick={handleSubmitButton}/>}
                            {/* <input type="submit" value="Reset" className="new-form-button-box new-form-button-next" onClick={handleReset} /> */}
                            {/* <input type="submit" value="Submit Integration" className="new-form-button-box new-form-button-next" onClick={handleFakeIntegrationSubmit} /> */}
                            {/* <input type="submit" value="Submit Checklist" className="new-form-button-box new-form-button-next" onClick={handleFakeChecklistSubmit}  /> */}
                        </div>
                        <Modal open={toggleModal} onClose={closeModal}>
                            <div id="AwepayForm" className="new-form-modal">
                                <div id="icon-verified" />
                                <p><FormattedMessage id="page.body.form.modal.success.line1" /><br /><FormattedMessage id="page.body.form.modal.success.line2" /></p>
                                {/* tslint:disable-next-line */}
                                <input type="submit" value={props.intl.formatMessage({id: 'page.body.form.ok'})} className="new-form-button-box new-form-button-next" onClick={() => props.history.push('/landing')}/>
                            </div>
                        </Modal>
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
const CoinListingApplicationScreen = injectIntl(withRouter(connect(mapStateToProps, mapDispatchToProps)(CoinListingApplicationComponent) as any));

export {
    CoinListingApplicationScreen,
};
