import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

interface UpsellCardProps {
    title: string;
    price: number;
    image: string;
    onAdd?: () => void;
}

const UpsellCard: React.FC<UpsellCardProps> = ({ title, price, image, onAdd }) => {
    return (
        <View className='w-[140px] p-3 bg-white rounded-3xl shadow-sm mt-4 mb-2 items-center mx-1'>
            <View className='relative mb-2'>
                <Image
                    source={{ uri: image }}
                    className='w-20 h-20 rounded-full'
                    resizeMode='cover'
                />
                <TouchableOpacity
                    onPress={onAdd}
                    className='absolute -bottom-0 -right-2 bg-white rounded-full p-1.5 shadow-sm border border-gray-100'
                >
                    <Ionicons name="add" size={20} color="#10B981" />
                </TouchableOpacity>
            </View>
            <Text className='font-bold text-gray-900 text-center text-sm mb-1' numberOfLines={1}>{title}</Text>
            <Text className='font-extrabold text-black text-sm'>AED {price}</Text>
        </View>
    )
}

export default UpsellCard
