import React from 'react';
import { View, Text } from 'react-native';
import PhoneInput, {
    ICountry,
} from 'react-native-international-phone-number';

interface CustomPhoneInputProps {
    value: string;
    onChangePhoneNumber: (phoneNumber: string) => void;
    selectedCountry: ICountry | null;
    onChangeSelectedCountry: (country: ICountry) => void;
    label?: string;
    required?: boolean;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
    value,
    onChangePhoneNumber,
    selectedCountry,
    onChangeSelectedCountry,
    label = "Phone Number",
    required = false,
}) => {
    return (
        <View>
            <Text className="text-gray-900 font-semibold mb-2">
                {label} {required && <Text className="text-red-500">*</Text>}
            </Text>
            <View className="w-full">
                <PhoneInput
                    defaultCountry="AE"
                    defaultValue="+971"
                    value={value}
                    placeholder="Phone Number"
                    onChangePhoneNumber={onChangePhoneNumber}
                    selectedCountry={selectedCountry}
                    onChangeSelectedCountry={onChangeSelectedCountry}
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
    );
};

export default CustomPhoneInput;
