import { useState } from 'react';
import { useRouter } from 'expo-router';
import { ICountry } from 'react-native-international-phone-number';
import { authConfig, AuthState } from './auth.config';

export const useAuth = () => {
    const router = useRouter();
    const [currentState, setCurrentState] = useState<AuthState>(AuthState.LOGIN);
    const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [otpCode, setOtpCode] = useState<string>('');
    const [name, setName] = useState<string>('');

    const config = authConfig[currentState];

    function handleInputValue(phoneNumber: string) {
        setInputValue(phoneNumber);
    }

    function handleSelectedCountry(country: ICountry) {
        setSelectedCountry(country);
    }

    const handleBack = () => {
        if (currentState === AuthState.OTP) {
            setCurrentState(AuthState.LOGIN);
            return;
        }

        if (currentState === AuthState.SIGNUP) {
            setCurrentState(AuthState.OTP);
            return;
        }

        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace('/(tabs)');
        }
    };

    const handleContinue = () => {
        if (currentState === AuthState.LOGIN) {
            // TODO: Validate phone number here
            setCurrentState(AuthState.OTP);
        } else if (currentState === AuthState.OTP) {
            // TODO: Validate OTP here
            setCurrentState(AuthState.SIGNUP);
        } else if (currentState === AuthState.SIGNUP) {
            // TODO: Create account logic here
            router.replace('/(tabs)');
        }
    };

    return {
        currentState,
        config,
        selectedCountry,
        inputValue,
        otpCode,
        name,
        setOtpCode,
        setName,
        handleInputValue,
        handleSelectedCountry,
        handleBack,
        handleContinue
    };
};
