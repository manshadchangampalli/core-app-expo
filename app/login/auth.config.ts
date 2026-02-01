export enum AuthState {
    LOGIN = 'LOGIN',
    OTP = 'OTP',
    SIGNUP = 'SIGNUP'
}

export interface AuthConfigItem {
    heading: string;
    description: string;
    buttonText: string;
}

export const authConfig: Record<AuthState, AuthConfigItem> = {
    [AuthState.LOGIN]: {
        heading: 'Login',
        description: 'Enter your phone number to continue',
        buttonText: 'Continue'
    },
    [AuthState.OTP]: {
        heading: 'Verification',
        description: 'Enter the code sent to your phone',
        buttonText: 'Verify'
    },
    [AuthState.SIGNUP]: {
        heading: "What's your name?",
        description: 'Let us know how to address you',
        buttonText: 'Start Ordering'
    }
}
