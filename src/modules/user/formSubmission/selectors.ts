import { RootState } from '../..';

export const selectRegistrationFormStatus = (state: RootState): boolean => state.user.formSubmission.registrationFormSubmitted;
export const selectIntegrationFormStatus = (state: RootState): boolean => state.user.formSubmission.integrationFormSubmitted;
export const selectChecklistFormStatus = (state: RootState): boolean => state.user.formSubmission.checklistFormSubmitted;
export const selectChecklistLock = (state: RootState): boolean => state.user.formSubmission.lockChecklistForm;
export const selectIntegrationLock = (state: RootState): boolean => state.user.formSubmission.lockIntegrationForm;
export const selectRegistrationProgress = (state: RootState): string | undefined => state.user.formSubmission.registrationProgress;
