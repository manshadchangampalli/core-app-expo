import React from 'react';
import { View, Text, TouchableOpacity,  Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SelectionOptionProps {
  label: string;
  price?: number;
  selected: boolean;
  type: 'radio' | 'checkbox';
  onPress: () => void;
}

const SelectionOption: React.FC<SelectionOptionProps> = ({
  label,
  price,
  selected,
  type,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center justify-between p-4 mb-3 rounded-xl border ${
        selected ? 'border-black bg-white' : 'border-gray-200 bg-white'
      } ${selected && type === 'radio' ? 'border-2' : 'border'}`}
    >
      <View className="flex-row items-center">
        {/* Icon */}
        <View
          className={`w-6 h-6 rounded-full items-center justify-center mr-3 ${
            type === 'radio'
              ? 'border-2 border-gray-300'
              : 'border-2 border-gray-300 rounded-md'
          } ${selected ? 'border-black bg-black' : ''}`}
        >
          {selected && (
            type === 'radio' ? (
                 <View className="w-2.5 h-2.5 rounded-full bg-white" />
            ) : (
                <Ionicons name="checkmark" size={16} color="white" />
            )
          )}
        </View>

        {/* Label */}
        <Text className="text-base font-semibold text-gray-900">{label}</Text>
      </View>

      {/* Price */}
      {price !== undefined && (
        <Text className="text-base font-bold text-gray-900">
          {price > 0 ? `+ AED ${price}` : 'Free'}
        </Text>
      )}
    </Pressable>
  );
};

export default SelectionOption;
