import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneInput, {
  ICountry,
} from 'react-native-international-phone-number';
import { Ionicons } from '@expo/vector-icons';
import { CommonButton, GlassIconButton } from '../components/common';

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

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)');
    }
  };

  const handleContinue = () => {
    router.replace('/(tabs)');
  };

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
          <Text className="text-4xl font-extrabold text-gray-900 mb-2">Login</Text>
          <Text className="text-gray-500 mb-8 text-base font-medium">
            Enter your phone number to continue
          </Text>

          {/* Form */}
          <View>
            <Text className="text-gray-900 font-semibold mb-2">
              Phone Number <Text className="text-red-500">*</Text>
            </Text>
            <View className="w-full">
              <PhoneInput
                defaultValue="+971"
                value={inputValue}
                onChangePhoneNumber={handleInputValue}
                selectedCountry={selectedCountry}
                onChangeSelectedCountry={handleSelectedCountry}
                phoneInputStyles={{
                  container: {
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: '#E5E7EB', // gray-200
                    borderRadius: 12,
                    height: 56,
                  },
                  flagContainer: {
                    backgroundColor: 'transparent',
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                  },
                  input: { // The text input itself
                    backgroundColor: 'transparent',
                    color: '#111827', // gray-900
                    fontSize: 16,
                  },
                  callingCode: {
                    fontSize: 16,
                    color: '#4B5563', // gray-600
                  },
                  caret: {
                    fontSize: 16,
                    color: '#4B5563',
                  },
                  divider: {
                      backgroundColor: '#E5E7EB',
                  }
                }}
              />
            </View>
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