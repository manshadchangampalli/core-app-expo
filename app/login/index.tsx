import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonButton, CustomPhoneInput, GlassIconButton } from '../../components/common';
import { Ionicons } from '@expo/vector-icons';
import NameForm from '../../components/login/NameForm/NameForm';
import OTPForm from '../../components/login/OTPForm/OTPForm';
import { authConfig, AuthState } from './auth.config';


import { useAuth } from './useAuth';

export default function Login() {
  const {
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
  } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-white px-6 py-4" edges={['top', 'bottom']}>
      {/* Header / Back Button */}
      <View className="mb-8 items-start">
        <GlassIconButton onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </GlassIconButton>
      </View>

      <View className="flex-1 justify-between">
        <View>
          {/* Title & Subtitle */}
          <Text className="text-4xl font-extrabold text-gray-900 mb-2">{config.heading}</Text>
          <Text className="text-gray-500 mb-8 text-base font-medium">
            {config.description}
          </Text>

          {/* Form */}
          <View>
            {currentState === AuthState.LOGIN && (
              <CustomPhoneInput
                value={inputValue}
                onChangePhoneNumber={handleInputValue}
                selectedCountry={selectedCountry}
                onChangeSelectedCountry={handleSelectedCountry}
                required
              />
            )}

            {currentState === AuthState.OTP && (
              <OTPForm onCodeChanged={setOtpCode} />
            )}

            {currentState === AuthState.SIGNUP && (
              <NameForm value={name} onChangeText={setName} />
            )}
          </View>
        </View>

        {/* Bottom Button */}
        <View className="mb-4">
          <CommonButton title={config.buttonText} onPress={handleContinue} />
        </View>
      </View>
    </SafeAreaView>
  );
}