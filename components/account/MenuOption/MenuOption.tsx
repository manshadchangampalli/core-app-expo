import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

interface MenuOptionProps {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress: () => void;
    isDestructive?: boolean;
}

const MenuOption: React.FC<MenuOptionProps> = ({ icon, label, onPress, isDestructive = false }) => {
    const color = isDestructive ? '#EF4444' : '#1F2937'; // red-500 or gray-800

    return (
        <TouchableOpacity
            onPress={onPress}
            className="mx-4 flex-row items-center justify-between bg-white py-4 px-4 rounded-2xl mb-3 border border-gray-100 shadow-sm"
        >
            <View className="flex-row items-center gap-4">
                <Ionicons name={icon} size={22} color={color} />
                <Text className={`font-semibold text-base ${isDestructive ? 'text-red-500' : 'text-gray-900'}`}>{label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#D1D5DB" />
        </TouchableOpacity>
    )
}

export default MenuOption;
