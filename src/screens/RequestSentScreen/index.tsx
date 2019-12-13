import * as React from 'react';
import {
    connect,
    MapStateToProps,
} from 'react-redux';
import { RouteChildrenProps, RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
// import DatePicker from 'react-date-picker';
import {
    RootState,
    selectChecklistFormStatus,
    selectIntegrationFormStatus,
    selectUserInfo,
    User,
} from '../../modules';

interface ReduxProps {
    user: User;
    integrationFormSubmitted: boolean;
    checklistFormSubmitted: boolean;
}

type Props = ReduxProps & RouterProps & RouteChildrenProps;

const RequestSentComponent: React.FC<Props> = (props: Props) => {
    React.useEffect(() => {
        console.log(props);
        setTimeout(() => {
            props.history.push({
                pathname: '/form/coin-listing-application',
                state: {projectID: props.location.state.projectID},
            });
        }, 5000);
    });
    return (
        <div>
            <div className="page-body">
                {/* <div className="new-form-container"> */}
                <div className="new-form-container" id="form-verified">
                    <div id="icon-verified" />
                    <h2>Request successfully sent!</h2>
                    <br />
                    <p>Thank you for your time.<br />You will be redirected back in 5 seconds.</p>
                </div>
            </div>
            <div className="footer-menu" />
        </div>
    );
};

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> =
    (state: RootState): ReduxProps => ({
        user: selectUserInfo(state),
        integrationFormSubmitted: selectIntegrationFormStatus(state),
        checklistFormSubmitted: selectChecklistFormStatus(state),
});

// tslint:disable-next-line:no-any
const RequestSentScreen = withRouter(connect(mapStateToProps)(RequestSentComponent) as any);

export {
    RequestSentScreen,
};
