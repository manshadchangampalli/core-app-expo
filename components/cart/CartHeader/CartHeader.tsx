import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { GlassIconButton } from '../../common'

const CartHeader = () => {
  return (
    <View className='p-4 gap-4 mb-6 border border-t-0 rounded-b-3xl border-gray-300'>
      <View className='flex-row items-center justify-between'>
        <View className='flex-row items-center gap-2'>
          {/* <GlassIconButton onPress={() => { }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </GlassIconButton> */}
          <Text className='text-2xl font-bold'>Cart</Text>
        </View>
        <TouchableOpacity>
          <Text className='font-semibold text-red-500'>clear</Text>
        </TouchableOpacity>
      </View>
      <View className='bg-orange-50 border border-orange-100 rounded-3xl p-4 flex-row items-center justify-between'>
        <View className='flex-row items-center gap-4'>
          <View className='w-12 h-12 rounded-full bg-white items-center justify-center shadow-sm'>
            <Ionicons name="location" size={24} color="#FF6B35" />
          </View>
          <View>
            <View className="flex-row items-center gap-2">
              <Text className='text-[#0F172A] text-lg font-bold'>Home</Text>
              <View className="bg-gray-200 px-2 py-0.5 rounded-md">
                <Text className="text-[10px] font-bold text-gray-600">WORK</Text>
              </View>
            </View>
            <Text className='text-gray-500 text-sm' numberOfLines={1}>Villa 32, Street 14B, Jumeirah 1</Text>
            <Text className='text-[#FF6B35] text-sm font-bold mt-1'>Delivery in 25 mins</Text>
          </View>
        </View>
        <GlassIconButton onPress={() => { }}>
          <FontAwesome name="edit" size={18} color="black" />
        </GlassIconButton>
      </View>
    </View >
  )
}

export default CartHeader
