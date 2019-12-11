import {
    CHECK_CHECKLIST_FORM_SUBMISSION,
    CHECK_INTEGRATION_FORM_SUBMISSION,
    CHECK_REGISTRATION_FORM_SUBMISSION,
    LOCK_CHECKLIST_FORM,
    LOCK_INTEGRATION_FORM,
    RESET_SUBMISSION_STATUS,
    SET_REGISTRATION_PROGRESS,
    SUBMIT_CHECKLIST_FORM,
    SUBMIT_INTEGRATION_FORM,
    SUBMIT_REGISTRATION_FORM,
    UNLOCK_CHECKLIST_FORM,
    UNLOCK_INTEGRATION_FORM,
} from './constants';

// type checking for actions
export interface SubmitChecklistForm {
    type: typeof SUBMIT_CHECKLIST_FORM;
}

export interface SubmitIntegrationForm {
    type: typeof SUBMIT_INTEGRATION_FORM;
}

export interface SubmitRegistrationForm {
    type: typeof SUBMIT_REGISTRATION_FORM;
}

export interface ResetSubmissionStatus {
    type: typeof RESET_SUBMISSION_STATUS;
}

export interface SetRegistrationProgress {
    type: typeof SET_REGISTRATION_PROGRESS;
}

export interface LockChecklistForm {
    type: typeof LOCK_CHECKLIST_FORM;
}

export interface LockIntegrationForm {
    type: typeof LOCK_INTEGRATION_FORM;
}

export interface UnlockChecklistForm {
    type: typeof UNLOCK_CHECKLIST_FORM;
}

export interface UnlockIntegrationForm {
    type: typeof UNLOCK_INTEGRATION_FORM;
}

export interface CheckChecklistFormSubmission {
    type: typeof CHECK_CHECKLIST_FORM_SUBMISSION;
}

export interface CheckIntegrationFormSubmission {
    type: typeof CHECK_INTEGRATION_FORM_SUBMISSION;
}

export interface CheckRegistrationFormSubmission {
    type: typeof CHECK_REGISTRATION_FORM_SUBMISSION;
}

// compile into one action reference
export type FormSubmissionAction =
    SubmitChecklistForm
    | SubmitIntegrationForm
    | SubmitRegistrationForm
    | SetRegistrationProgress
    | LockIntegrationForm
    | LockChecklistForm
    | UnlockIntegrationForm
    | UnlockChecklistForm
    | ResetSubmissionStatus
    | CheckChecklistFormSubmission
    | CheckIntegrationFormSubmission
    | CheckRegistrationFormSubmission;

// mapping actions to constant
export const submitChecklistForm = (): SubmitChecklistForm => ({
    type: SUBMIT_CHECKLIST_FORM,
});

export const submitIntegrationForm = (): SubmitIntegrationForm => ({
    type: SUBMIT_INTEGRATION_FORM,
});

export const submitRegistrationForm = (): SubmitRegistrationForm => ({
    type: SUBMIT_REGISTRATION_FORM,
});

export const resetSubmissionStatus = (): ResetSubmissionStatus => ({
    type: RESET_SUBMISSION_STATUS,
});

export const setRegistrationProgress = (): SetRegistrationProgress => ({
    type: SET_REGISTRATION_PROGRESS,
});

export const lockChecklistForm = (): LockChecklistForm => ({
    type: LOCK_CHECKLIST_FORM,
});

export const lockIntegrationForm = (): LockIntegrationForm => ({
    type: LOCK_INTEGRATION_FORM,
});

export const unlockChecklistForm = (): UnlockChecklistForm => ({
    type: UNLOCK_CHECKLIST_FORM,
});

export const unlockIntegrationForm = (): UnlockIntegrationForm => ({
    type: UNLOCK_INTEGRATION_FORM,
});

export const checkChecklistFormSubmission = (): CheckChecklistFormSubmission => ({
    type: CHECK_CHECKLIST_FORM_SUBMISSION,
});

export const checkIntegrationFormSubmission = (): CheckIntegrationFormSubmission => ({
    type: CHECK_INTEGRATION_FORM_SUBMISSION,
});

export const checkRegistrationFormSubmission = (): CheckRegistrationFormSubmission => ({
    type: CHECK_REGISTRATION_FORM_SUBMISSION,
});
