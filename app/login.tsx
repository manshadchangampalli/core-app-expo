import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICountry } from 'react-native-international-phone-number';
import { CommonButton, BackButton, CustomPhoneInput } from '../components/common';

export default function Login() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
  const [inputValue, setInputValue] = useState<string>('');

  function handleInputValue(phoneNumber: string) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }


  const handleContinue = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6 py-4" edges={['top', 'bottom']}>
      {/* Header / Back Button */}
      <View className="mb-8 items-start">
        <BackButton fallbackRoute="/(tabs)" />
      </View>

      <View className="flex-1 justify-between">
        <View>
          {/* Title & Subtitle */}
          <Text className="text-4xl font-extrabold text-gray-900 mb-2">Login</Text>
          <Text className="text-gray-500 mb-8 text-base font-medium">
            Enter your phone number to continue
          </Text>

          {/* Form */}
          <View>
            <CustomPhoneInput
              value={inputValue}
              onChangePhoneNumber={handleInputValue}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
              required
            />
          </View>
        </View>

        {/* Bottom Button */}
        <View className="mb-4">
          <CommonButton title="Continue" onPress={handleContinue} />
        </View>
      </View>
    </SafeAreaView>
  );
}