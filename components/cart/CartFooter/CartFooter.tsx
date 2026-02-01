import { View, Text, FlatList } from 'react-native'
import React from 'react'
import UpsellCard from '../UpsellCard/UpsellCard'
import { deliveryFee, upsellItemsConfig } from '../cart.config'
import CartSummary from '../CartSummary/CartSummary'
import { SlideButton } from '../../common'

const CartFooter = () => {
    return (
        <View className='mt-6'>
            <View className='flex-row px-4 justify-between items-center '>
                <Text className='text-lg font-bold text-gray-900'>Complete Your Meal</Text>
                <View className='p-2 rounded-full bg-purple-200'>
                    <Text className='text-purple-600 text-[10px] font-bold px-1'>Trending</Text>
                </View>
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={upsellItemsConfig}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                ItemSeparatorComponent={() => <View className="w-2" />}
                renderItem={({ item }) => (
                    <UpsellCard
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        onAdd={() => console.log('Add upsell item', item.id)}
                    />
                )}
            />

            <CartSummary
                subtotal={115}
                deliveryFee={deliveryFee}
                total={127}
            />

            <View className='px-4 my-6'>
                <SlideButton
                    text="Checkout"
                    onComplete={() => alert('Checkout Completed!')}
                />
            </View>
        </View>
    )
}

export default CartFooter
