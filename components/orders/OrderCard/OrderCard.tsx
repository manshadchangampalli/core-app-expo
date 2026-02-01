import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

interface OrderCardProps {
    image: string;
    title: string;
    date: string;
    price: number;
    status: 'Delivered' | 'Cancelled' | 'Processing';
    onReorderPress: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
    image,
    title,
    date,
    price,
    status,
    onReorderPress
}) => {
    const isDelivered = status === 'Delivered';
    const statusColor = isDelivered ? 'text-green-600' : status === 'Cancelled' ? 'text-red-600' : 'text-blue-600';
    const statusBg = isDelivered ? 'bg-green-100' : status === 'Cancelled' ? 'bg-red-100' : 'bg-blue-100';

    return (
        <View className="bg-white p-4 mx-4 rounded-3xl mb-4 shadow-sm border border-gray-100">
            <View className="flex-row items-start">
                {/* Image */}
                <Image
                    source={{ uri: image }}
                    className="w-20 h-20 rounded-2xl bg-gray-100"
                    resizeMode="cover"
                />

                {/* Content */}
                <View className="flex-1 ml-4 mr-2">
                    <View className="flex-row justify-between items-start">
                        <Text className="text-gray-900 font-bold text-lg flex-1 mr-2" numberOfLines={1}>
                            {title}
                        </Text>
                        <View className={`${statusBg} px-2 py-1 rounded-full`}>
                            <Text className={`${statusColor} font-bold text-xs`}>{status}</Text>
                        </View>
                    </View>

                    <Text className="text-gray-500 text-sm mt-1">
                        {date} • AED {price}
                    </Text>
                </View>
            </View>

            {/* Reorder Button */}
            <TouchableOpacity
                onPress={onReorderPress}
                className="w-full bg-orange-50 py-3 rounded-xl flex-row items-center justify-center mt-4 active:bg-orange-100"
            >
                <Ionicons name="refresh" size={18} color="#EA580C" />
                <Text className="text-orange-600 font-bold text-base ml-2">Reorder</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrderCard;
