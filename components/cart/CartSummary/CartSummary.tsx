import { View, Text } from 'react-native'
import React from 'react'

interface CartSummaryProps {
    subtotal: number;
    deliveryFee: number;
    total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, deliveryFee, total }) => {
    return (
        <View className="m-4 mt-6 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
            <View className="flex-row justify-between mb-4">
                <Text className="text-gray-500 font-medium">Subtotal</Text>
                <Text className="text-gray-900 font-bold">AED {subtotal}</Text>
            </View>
            <View className="flex-row justify-between mb-6 pb-6 border-b border-gray-100 border-dashed">
                <View className="flex-row items-center gap-2">
                    <Text className="text-gray-500 font-medium">Delivery Fee</Text>
                    <View className='bg-gray-100 px-1.5 py-0.5 rounded-md'>
                        <Text className='text-[10px] text-gray-500 font-bold'>2.5km</Text>
                    </View>
                </View>
                <Text className="text-gray-900 font-bold">AED {deliveryFee}</Text>
            </View>
            <View className="flex-row justify-between items-center mb-1">
                <Text className="text-xl font-extrabold text-gray-900">Grand Total</Text>
                <Text className="text-xl font-extrabold text-gray-900">AED {total}</Text>
            </View>
        </View>
    )
}

export default CartSummary
