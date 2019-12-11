import axios from 'axios';
import * as React from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import {
    RootState,
    selectChecklistFormStatus,
    selectUserInfo,
    submitChecklistForm,
    User,
} from '../../modules';
// import DatePicker from 'react-date-picker';

interface ReduxProps {
    user: User;
    checklistFormSubmitted: boolean;
}

interface DispatchProps {
    submitChecklistForm: typeof submitChecklistForm;
}

type Props = ReduxProps & DispatchProps & RouterProps;

// tslint:disable-next-line
const TokenListingChecklistComponent: React.FC<Props> = (props: Props) => {
    const [project, setProject] = React.useState({
        // section 1: Project Summary
        secProjectAnswer1: undefined,
        secProjectAnswer2: undefined,
        secProjectAnswer3: undefined,
        secProjectAnswer4: undefined,
        secProjectAnswer5: undefined,
        secProjectAnswer6: undefined,
        secProjectAnswer7: undefined,
        secProjectAnswer8: undefined,
        secProjectAnswer9: undefined,
        secProjectAnswer10: undefined,
        secProjectAnswer11: undefined,
        secProjectAnswer12: undefined,
        secProjectAnswer13: undefined,
        // section 2: Users and Community
        secUserAnswer1: undefined,
        secUserAnswer2: undefined,
        secUserAnswer3: undefined,
        // section 3: Product
        secProductAnswer1: undefined,
        secProductAnswer2: undefined,
        secProductAnswer3: undefined,
        secProductAnswer4: undefined,
        secProductAnswer5: undefined,
        // section 4: Team
        secTeamAnswer1: undefined,
        secTeamAnswer2: undefined,
        secTeamAnswer3: undefined,
        //section 5: Token Economics
        secTokenAnswer1: undefined,
        secTokenAnswer2: undefined,
        secTokenAnswer3: undefined,
        secTokenAnswer4: undefined,
        // section 6: ICO and Other Offerings of the Token/Coin
        secICOAnswer1: undefined,
        secICOAnswer2: undefined,
        secICOAnswer3: undefined,
        secICOAnswer4: undefined,
        secICOAnswer5: undefined,
        secICOAnswer6: undefined,
        secICOAnswer7: undefined,
        secICOAnswer8: undefined,
        secICOAnswer9: undefined,
        secICOAnswer10: undefined,
        secICOAnswer11: undefined,
        secICOAnswer12a: undefined,
        secICOAnswer12b: undefined,
        secICOAnswer12c: undefined,
        secICOAnswer13: undefined,
        secICOAnswer14: undefined,
        // section 7: Wallet
        secWalletAnswer1: undefined,
        secWalletAnswer2: undefined,
        secWalletAnswer3: undefined,
        secWalletAnswer4: undefined,
        secWalletAnswer5: undefined,
        secWalletAnswer6: undefined,
        secWalletAnswer7: undefined,
        // section 8: Market
        secMarketAnswer1: undefined,
        secMarketAnswer2: undefined,
        // section 9: Fees
        secFeesAnswer1: undefined,
        secFeesAnswer2: undefined,
        // section 10: Miscellaneous
        secMiscellaneousAnswer1: false,
    });
    const handleProjectChange = (e: React.FormEvent<HTMLInputElement>) => {
        setProject({ ...project, [e.currentTarget.name]: e.currentTarget.value });
    };
    const [progress, setProgress] = React.useState({
        currentProgress: 1,
        totalProgress: 10,
    });
    const [isDisabled, setDisabled] = React.useState(true);
    React.useEffect(() => {
        console.clear();
        console.log(`Checklist form submission status: ${props.checklistFormSubmitted}`);
        console.log(props);
        // tslint:disable-next-line
        let formSection: any[] = [];
        switch (progress.currentProgress) {
            case 1: formSection = [project.secProjectAnswer1, project.secProjectAnswer2, project.secProjectAnswer3, project.secProjectAnswer4, project.secProjectAnswer5, project.secProjectAnswer6, project.secProjectAnswer7, project.secProjectAnswer8, project.secProjectAnswer9, project.secProjectAnswer10, project.secProjectAnswer11, project.secProjectAnswer12, project.secProjectAnswer13];
                    break;
            case 2: formSection = [project.secUserAnswer1, project.secUserAnswer2, project.secUserAnswer3];
                    break;
            case 3: formSection = [project.secProductAnswer1, project.secProductAnswer2, project.secProductAnswer3, project.secProductAnswer4, project.secProductAnswer5];
                    break;
            case 4: formSection = [project.secTeamAnswer1, project.secTeamAnswer2, project.secTeamAnswer3];
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
            form: 'Token Listing Checklist',
            json_data: {
                page_1: { // section: Project Summary
                    item_1: project.secProjectAnswer1,
                    item_2: project.secProjectAnswer2,
                    item_3: project.secProjectAnswer3,
                    item_4: project.secProjectAnswer4,
                    item_5: project.secProjectAnswer5,
                    item_6: project.secProjectAnswer6,
                    item_7: project.secProjectAnswer7,
                    item_8: project.secProjectAnswer8,
                    item_9: project.secProjectAnswer9,
                    item_10: project.secProjectAnswer10,
                    item_11: project.secProjectAnswer11,
                    item_12: project.secProjectAnswer12,
                    item_13: project.secProjectAnswer13,
                },
                page_2: { // section: Users and Community
                    item_1: project.secUserAnswer1,
                    item_2: project.secUserAnswer2,
                    item_3: project.secUserAnswer3,
                },
                page_3: { // section: Product
                    item_1: project.secProductAnswer1,
                    item_2: project.secProductAnswer2,
                    item_3: project.secProductAnswer3,
                    item_4: project.secProductAnswer4,
                    item_5: project.secProductAnswer5,
                },
                page_4: { // section: Team
                    item_1: project.secTeamAnswer1,
                    item_2: project.secTeamAnswer1,
                    item_3: project.secTeamAnswer1,
                },
                page_5: { // section: Token Economics
                    item_1: project.secTokenAnswer1,
                    item_2: project.secTokenAnswer1,
                    item_3: project.secTokenAnswer1,
                    item_4: project.secTokenAnswer1,
                },
                page_6: { // section: ICO and Other Offerings of the Token/Coin
                    item_1: project.secICOAnswer1,
                    item_2: project.secICOAnswer1,
                    item_3: project.secICOAnswer1,
                    item_4: project.secICOAnswer1,
                    item_5: project.secICOAnswer1,
                    item_6: project.secICOAnswer1,
                    item_7: project.secICOAnswer1,
                    item_8: project.secICOAnswer1,
                    item_9: project.secICOAnswer1,
                    item_10: project.secICOAnswer1,
                    item_11: project.secICOAnswer1,
                    item_12: project.secICOAnswer1,
                    item_13: project.secICOAnswer1,
                    item_14: project.secICOAnswer1,
                    item_15: project.secICOAnswer1,
                    item_16: project.secICOAnswer1,
                },
                page_7: { // section: Wallet
                    item_1: project.secWalletAnswer1,
                    item_2: project.secWalletAnswer1,
                    item_3: project.secWalletAnswer1,
                    item_4: project.secWalletAnswer1,
                    item_5: project.secWalletAnswer1,
                    item_6: project.secWalletAnswer1,
                    item_7: project.secWalletAnswer1,
                },
                page_8: { // section: Market
                    item_1: project.secMarketAnswer1,
                    item_2: project.secMarketAnswer1,
                },
                page_9: { // section: Fees
                    item_1: project.secFeesAnswer1,
                    item_2: project.secFeesAnswer1,
                },
                page_10: { // section: Miscellaneous
                    item_1: project.secMiscellaneousAnswer1,
                },
            },
        })
        .then(res => {
            props.submitChecklistForm();
            props.history.push('/form/request-sent');
        })
        .catch(error => {
            console.log(error);
        });
    };
    const handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
        setProject({ ...project, [event.currentTarget.name]: event.currentTarget.checked });
    };
    const handleReferralPage = () => {
        props.history.push('/referral');
    };
    return (
        <div>
            <div className="page-body">
                {/* <div className="new-form-container"> */}
                <div className="new-form-container">
                    <h1>SPEZA Exchange Token Listing</h1>
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
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion1" /></p>
                                            <input className={project.secProjectAnswer1 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer1" value={project.secProjectAnswer1} onChange={handleProjectChange} />
                                            {project.secProjectAnswer1 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion2" /></p>
                                            <input className={project.secProjectAnswer2 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer2" value={project.secProjectAnswer2} onChange={handleProjectChange} />
                                            {project.secProjectAnswer2 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">3.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion3" /></p>
                                            <input className={project.secProjectAnswer3 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer3" value={project.secProjectAnswer3} onChange={handleProjectChange} />
                                            {project.secProjectAnswer3 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">4.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion4" /></p>
                                            <input className={project.secProjectAnswer4 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer4" value={project.secProjectAnswer4} onChange={handleProjectChange} />
                                            {project.secProjectAnswer4 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">5.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion5" /></p>
                                            <input className={project.secProjectAnswer5 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer5" value={project.secProjectAnswer5} onChange={handleProjectChange} />
                                            {project.secProjectAnswer5 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">6.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion6" /></p>
                                            <input className={project.secProjectAnswer6 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer6" value={project.secProjectAnswer6} onChange={handleProjectChange} />
                                            {project.secProjectAnswer6 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">7.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion7" /></p>
                                            <input className={project.secProjectAnswer7 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer7" value={project.secProjectAnswer7} onChange={handleProjectChange} />
                                            {project.secProjectAnswer7 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">8.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion8" /></p>
                                            <input className={project.secProjectAnswer8 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer8" value={project.secProjectAnswer8} onChange={handleProjectChange} />
                                            {project.secProjectAnswer8 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">9.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion9" /></p>
                                            <input className={project.secProjectAnswer9 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer9" value={project.secProjectAnswer9} onChange={handleProjectChange} />
                                            {project.secProjectAnswer9 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">10.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion10" /></p>
                                            <input className={project.secProjectAnswer10 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer10" value={project.secProjectAnswer10} onChange={handleProjectChange} />
                                            {project.secProjectAnswer10 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">11.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion11" /></p>
                                            <input className={project.secProjectAnswer11 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer11" value={project.secProjectAnswer11} onChange={handleProjectChange} />
                                            {project.secProjectAnswer11 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">12.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion12" /></p>
                                            <input className={project.secProjectAnswer12 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer12" value={project.secProjectAnswer12} onChange={handleProjectChange} />
                                            {project.secProjectAnswer12 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">13.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProjectQuestion13" /></p>
                                            <input className={project.secProjectAnswer13 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProjectAnswer13" value={project.secProjectAnswer13} onChange={handleProjectChange} />
                                            {project.secProjectAnswer13 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 2 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Users and Community</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secUserQuestion1" /></p>
                                            <input className={project.secUserAnswer1 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secUserAnswer1" value={project.secUserAnswer1} onChange={handleProjectChange} />
                                            {project.secUserAnswer1 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secUserQuestion2" /></p>
                                            <input className={project.secUserAnswer2 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secUserAnswer2" value={project.secUserAnswer2} onChange={handleProjectChange} />
                                            {project.secUserAnswer2 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">3.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secUserQuestion3" /></p>
                                            <input className={project.secUserAnswer3 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secUserAnswer3" value={project.secUserAnswer3} onChange={handleProjectChange} />
                                            {project.secUserAnswer3 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 3 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Product</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProductQuestion1" /></p>
                                            <input className={project.secProductAnswer1 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProductAnswer1" value={project.secProductAnswer1} onChange={handleProjectChange} />
                                            {project.secProductAnswer1 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProductQuestion2" /></p>
                                            <input className={project.secProductAnswer2 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProductAnswer2" value={project.secProductAnswer2} onChange={handleProjectChange} />
                                            {project.secProductAnswer2 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">3.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProductQuestion3" /></p>
                                            <input className={project.secProductAnswer3 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProductAnswer3" value={project.secProductAnswer3} onChange={handleProjectChange} />
                                            {project.secProductAnswer3 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">4.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProductQuestion4" /></p>
                                            <input className={project.secProductAnswer4 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProductAnswer4" value={project.secProductAnswer4} onChange={handleProjectChange} />
                                            {project.secProductAnswer4 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">5.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secProductQuestion5" /></p>
                                            <input className={project.secProductAnswer5 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secProductAnswer5" value={project.secProductAnswer5} onChange={handleProjectChange} />
                                            {project.secProductAnswer5 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 4 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Team</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secTeamQuestion1" /></p>
                                            <input className={project.secTeamAnswer1 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secTeamAnswer1" value={project.secTeamAnswer1} onChange={handleProjectChange} />
                                            {project.secTeamAnswer1 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secTeamQuestion2" /></p>
                                            <input className={project.secTeamAnswer2 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secTeamAnswer2" value={project.secTeamAnswer2} onChange={handleProjectChange} />
                                            {project.secTeamAnswer2 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">3.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secTeamQuestion3" /></p>
                                            <input className={project.secTeamAnswer3 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secTeamAnswer3" value={project.secTeamAnswer3} onChange={handleProjectChange} />
                                            {project.secTeamAnswer3 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 5 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Token Economics</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secTokenQuestion1" /></p>
                                            <input className={project.secTokenAnswer1 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secTokenAnswer1" value={project.secTokenAnswer1} onChange={handleProjectChange} />
                                            {project.secTokenAnswer1 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secTokenQuestion2" /></p>
                                            <input className={project.secTokenAnswer2 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secTokenAnswer2" value={project.secTokenAnswer2} onChange={handleProjectChange} />
                                            {project.secTokenAnswer2 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">3.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secTokenQuestion3" /></p>
                                            <input className={project.secTokenAnswer3 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secTokenAnswer3" value={project.secTokenAnswer3} onChange={handleProjectChange} />
                                            {project.secTokenAnswer3 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">4.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secTokenQuestion4" /></p>
                                            <input className={project.secTokenAnswer4 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secTokenAnswer4" value={project.secTokenAnswer4} onChange={handleProjectChange} />
                                            {project.secTokenAnswer4 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 6 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">ICO and Other Offerings of the Token/Coin</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion1" /></p>
                                            <input className={project.secICOAnswer1 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer1" value={project.secICOAnswer1} onChange={handleProjectChange} />
                                            {project.secICOAnswer1 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion2" /></p>
                                            <input className={project.secICOAnswer2 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer2" value={project.secICOAnswer2} onChange={handleProjectChange} />
                                            {project.secICOAnswer2 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">3.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion3" /></p>
                                            <input className={project.secICOAnswer3 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer3" value={project.secICOAnswer3} onChange={handleProjectChange} />
                                            {project.secICOAnswer3 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">4.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion4" /></p>
                                            <input className={project.secICOAnswer4 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer4" value={project.secICOAnswer4} onChange={handleProjectChange} />
                                            {project.secICOAnswer4 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">5.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion5" /></p>
                                            <input className={project.secICOAnswer5 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer5" value={project.secICOAnswer5} onChange={handleProjectChange} />
                                            {project.secICOAnswer5 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">6.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion6" /></p>
                                            <input className={project.secICOAnswer6 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer6" value={project.secICOAnswer6} onChange={handleProjectChange} />
                                            {project.secICOAnswer6 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">7.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion7" /></p>
                                            <input className={project.secICOAnswer7 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer7" value={project.secICOAnswer7} onChange={handleProjectChange} />
                                            {project.secICOAnswer7 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">8.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion8" /></p>
                                            <input className={project.secICOAnswer8 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer8" value={project.secICOAnswer8} onChange={handleProjectChange} />
                                            {project.secICOAnswer8 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">9.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion9" /></p>
                                            <input className={project.secICOAnswer9 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer9" value={project.secICOAnswer9} onChange={handleProjectChange} />
                                            {project.secICOAnswer9 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">10.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion10" /></p>
                                            <input className={project.secICOAnswer10 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer10" value={project.secICOAnswer10} onChange={handleProjectChange} />
                                            {project.secICOAnswer10 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">11.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion11" /></p>
                                            <input className={project.secICOAnswer11 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer11" value={project.secICOAnswer11} onChange={handleProjectChange} />
                                            {project.secICOAnswer11 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">12.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion12a" /></p>
                                            <input className={project.secICOAnswer12a === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer12a" value={project.secICOAnswer12a} onChange={handleProjectChange} />
                                            {project.secICOAnswer12a === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                            <br />
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion12b" /></p>
                                            <input className={project.secICOAnswer12b === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer12b" value={project.secICOAnswer12b} onChange={handleProjectChange} />
                                            {project.secICOAnswer12b === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                            <br />
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion12c" /></p>
                                            <input className={project.secICOAnswer12c === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer12c" value={project.secICOAnswer12c} onChange={handleProjectChange} />
                                            {project.secICOAnswer12c === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">13.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion13" /></p>
                                            <input className={project.secICOAnswer13 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer13" value={project.secICOAnswer13} onChange={handleProjectChange} />
                                            {project.secICOAnswer13 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">14.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secICOQuestion14" /></p>
                                            <input className={project.secICOAnswer14 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secICOAnswer14" value={project.secICOAnswer14} onChange={handleProjectChange} />
                                            {project.secICOAnswer14 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 7 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Wallet</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secWalletQuestion1" /></p>
                                            <input className={project.secWalletAnswer1 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secWalletAnswer1" value={project.secWalletAnswer1} onChange={handleProjectChange} />
                                            {project.secWalletAnswer1 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secWalletQuestion2" /></p>
                                            <input className={project.secWalletAnswer2 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secWalletAnswer2" value={project.secWalletAnswer2} onChange={handleProjectChange} />
                                            {project.secWalletAnswer2 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">3.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secWalletQuestion3" /></p>
                                            <input className={project.secWalletAnswer3 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secWalletAnswer3" value={project.secWalletAnswer3} onChange={handleProjectChange} />
                                            {project.secWalletAnswer3 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">4.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secWalletQuestion4" /></p>
                                            <input className={project.secWalletAnswer4 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secWalletAnswer4" value={project.secWalletAnswer4} onChange={handleProjectChange} />
                                            {project.secWalletAnswer4 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">5.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secWalletQuestion5" /></p>
                                            <input className={project.secWalletAnswer5 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secWalletAnswer5" value={project.secWalletAnswer5} onChange={handleProjectChange} />
                                            {project.secWalletAnswer5 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">6.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secWalletQuestion6" /></p>
                                            <input className={project.secWalletAnswer6 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secWalletAnswer6" value={project.secWalletAnswer6} onChange={handleProjectChange} />
                                            {project.secWalletAnswer6 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">7.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secWalletQuestion7" /></p>
                                            <input className={project.secWalletAnswer7 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secWalletAnswer7" value={project.secWalletAnswer7} onChange={handleProjectChange} />
                                            {project.secWalletAnswer7 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 8 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Market</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secMarketQuestion1" /></p>
                                            <input className={project.secMarketAnswer1 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secMarketAnswer1" value={project.secMarketAnswer1} onChange={handleProjectChange} />
                                            {project.secMarketAnswer1 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secMarketQuestion2" /></p>
                                            <input className={project.secMarketAnswer2 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secMarketAnswer2" value={project.secMarketAnswer2} onChange={handleProjectChange} />
                                            {project.secMarketAnswer2 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 9 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Fees</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secFeesQuestion1" /></p>
                                            <input className={project.secFeesAnswer1 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secFeesAnswer1" value={project.secFeesAnswer1} onChange={handleProjectChange} />
                                            {project.secFeesAnswer1 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">2.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secFeesQuestion2" /></p>
                                            <input className={project.secFeesAnswer2 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secFeesAnswer2" value={project.secFeesAnswer2} onChange={handleProjectChange} />
                                            {project.secFeesAnswer2 === '' ? <p className="row-error">This input is required.</p> : <p className="row-space">---</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        {/* tslint:disable-next-line */}
                        {
                            progress.currentProgress === 10 && (
                                <div className="new-form-content-page">
                                    <p className="new-form-content-title">Miscellaneous</p>
                                    <div className="new-form-content-row">
                                        <div className="row-numbering">
                                            <p className="row-question">1.</p>
                                        </div>
                                        <div className="row-item">
                                            <p className="row-question"><FormattedMessage id="page.body.form.checklist.secMiscellaneousQuestion1" /></p>
                                            {/* <input className={project.secMiscellaneousAnswer1 === '' ? `row-input row-input-error` : `row-input`} type="text" name="secMiscellaneousAnswer1" value={project.secMiscellaneousAnswer1} onChange={handleProjectChange} /> */}
                                            <label className="container">I agree<input type="checkbox" checked={project.secMiscellaneousAnswer1} name="secMiscellaneousAnswer1" onChange={handleCheckboxChange}/><span className="checkmark" /></label>
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
        checklistFormSubmitted: selectChecklistFormStatus(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        submitChecklistForm: () => dispatch(submitChecklistForm()),
});

// tslint:disable-next-line:no-any
const TokenListingChecklistScreen = withRouter(connect(mapStateToProps, mapDispatchToProps)(TokenListingChecklistComponent) as any);

export {
    TokenListingChecklistScreen,
};
