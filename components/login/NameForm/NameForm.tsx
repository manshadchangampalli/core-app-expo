import React from "react";
import { View, Text, TextInput } from "react-native";

interface NameFormProps {
    value: string;
    onChangeText: (text: string) => void;
}

const NameForm: React.FC<NameFormProps> = ({ value, onChangeText }) => {
    return (
        <View className="w-full">
            <Text className="text-gray-900 font-semibold mb-2">
                Full Name <Text className="text-red-500">*</Text>
            </Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="Enter your full name"
                className="w-full bg-white border border-gray-200 rounded-xl p-4 text-gray-900 text-base"
                placeholderTextColor="#9CA3AF"
            />
        </View>
    );
};

export default NameForm;
