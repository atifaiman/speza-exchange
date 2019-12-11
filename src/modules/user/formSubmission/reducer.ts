// importing action to be used by reducer
import { FormSubmissionAction } from './actions';
import {
    CHECK_CHECKLIST_FORM_SUBMISSION,
    CHECK_INTEGRATION_FORM_SUBMISSION,
    CHECK_REGISTRATION_FORM_SUBMISSION,
    RESET_SUBMISSION_STATUS,
    SUBMIT_CHECKLIST_FORM,
    SUBMIT_INTEGRATION_FORM,
    SUBMIT_REGISTRATION_FORM,
    UNLOCK_CHECKLIST_FORM,
    UNLOCK_INTEGRATION_FORM,
} from './constants';

// type checking for store state
export interface FormSubmissionState {
    registrationFormSubmitted: boolean;
    integrationFormSubmitted: boolean;
    checklistFormSubmitted: boolean;
    lockIntegrationForm: boolean;
    lockChecklistForm: boolean;
    registrationProgress?: string;
}

// declare initial state
const initialState: FormSubmissionState = {
    registrationFormSubmitted: false,
    integrationFormSubmitted: false,
    checklistFormSubmitted: false,
    lockIntegrationForm: false,
    lockChecklistForm: false,
};

// mapping action to reducer
export const formSubmissionReducer = (state: FormSubmissionState = initialState, action: FormSubmissionAction) => {
    switch (action.type) {
        // check submission, lock checklist form
        case SUBMIT_CHECKLIST_FORM: // reading action type passed
            return {
                ...state, // fetch all existing state
                checklistFormSubmitted: true, // update new specific state
                lockChecklistForm: true,
            };
        // check submission, lock integration form
        case SUBMIT_INTEGRATION_FORM:
            return {
                ...state,
                integrationFormSubmitted: true,
                lockIntegrationForm: true,
            };
        // check submission, set progress to 'PENDING'
        case SUBMIT_REGISTRATION_FORM:
            return {
                ...state,
                registrationFormSubmitted: true,
                registrationProgress: 'PENDING',
            };
        // if need changes, unlock Checklist form
        case UNLOCK_CHECKLIST_FORM:
            return {
                ...state,
                lockChecklistForm: false,
            };
        // if need changes, unlock Integration form
        case UNLOCK_INTEGRATION_FORM:
            return {
                ...state,
                lockIntegrationForm: false,
            };
        // for test purpose only, will dispose for deployment
        case RESET_SUBMISSION_STATUS:
            return {
                ...state,
                registrationFormSubmitted: false,
                integrationFormSubmitted: false,
                checklistFormSubmitted: false,
            };
        case CHECK_CHECKLIST_FORM_SUBMISSION:
            return {
                ...state,
                checklistFormSubmitted: true,
            };
        case CHECK_INTEGRATION_FORM_SUBMISSION:
            return {
                ...state,
                integrationFormSubmitted: true,
            };
        case CHECK_REGISTRATION_FORM_SUBMISSION:
            return {
                ...state,
                registrationFormSubmitted: true,
            };
        // if action is not mapped
        default:
            return state;
    }
};
