import React, { useState, useMemo } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { GlassIconButton, SlideButton, QtyButton } from '../../components/common';
import SelectionOption from '../../components/product/SelectionOption/SelectionOption';
import { productsConfig } from '../../components/common/ProductList/products.config';

export default function ProductDetail() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const product = useMemo(() => {
        return productsConfig.find(p => p.id === id) || productsConfig[0];
    }, [id]);

    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || { id: 'default', label: 'Regular', price: product.price });
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
    const [isAdded, setIsAdded] = useState(false);
    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
        setIsAdded(true);
    };

    const toggleExtra = (extraId: string) => {
        setSelectedExtras((prev) =>
            prev.includes(extraId)
                ? prev.filter((id) => id !== extraId)
                : [...prev, extraId]
        );
    };

    const calculateTotal = () => {
        let total = typeof selectedSize.price === 'string' ? parseFloat(selectedSize.price as string) : selectedSize.price;

        if (product.extras) {
            product.extras.forEach((extra) => {
                if (selectedExtras.includes(extra.id)) {
                    total += typeof extra.price === 'string' ? parseFloat(extra.price as string) : extra.price;
                }
            });
        }
        return total;
    };

    return (
        <View className="flex-1 bg-white">
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />

            {/* Hero Image & Header */}
            <View className="relative h-80 w-full">
                <Image
                    source={{ uri: product.image }}
                    className="w-full h-full"
                    resizeMode="cover"
                />
                {/* Gradient Overlay for text visibility if needed, or just status bar protection */}
                <View className="absolute top-0 left-0 right-0 h-24 bg-black/20" />

                <SafeAreaView className="absolute top-0 left-0 right-0 flex-row justify-between px-4">
                    <GlassIconButton onPress={() => router.back()} backgroundColor="#000000B3">
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </GlassIconButton>
                    <View className='flex-row gap-2'>
                        <GlassIconButton onPress={() => { }} backgroundColor="#000000B3">
                            <Ionicons name="heart-outline" size={24} color="white" />
                        </GlassIconButton>
                        <GlassIconButton onPress={() => { }} backgroundColor="#000000B3">
                            <Ionicons name="cart-outline" size={24} color="white" />
                        </GlassIconButton>
                    </View>
                </SafeAreaView>
            </View>

            <ScrollView className="flex-1 -mt-6 bg-white rounded-t-3xl pt-8 px-6" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Header Info */}
                <View className="flex-row justify-between items-start mb-2">
                    <Text className="text-3xl font-extrabold text-gray-900 flex-1 mr-2">{product.title}</Text>
                    <View>
                        {product.originalPrice && (
                            <Text className="text-gray-400 text-xs line-through text-right">AED {product.originalPrice}</Text>
                        )}
                        <Text className="text-2xl font-black text-gray-900">AED {calculateTotal()}</Text>
                    </View>
                </View>

                {/* Rating & Time */}
                <View className="flex-row items-center mb-4">
                    <View className="flex-row items-center bg-orange-100 px-2 py-1 rounded-lg mr-3">
                        <Ionicons name="star" size={14} color="#F97316" />
                        <Text className="text-orange-600 font-bold ml-1 text-xs">{product.rating} (120+ reviews)</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Ionicons name="time-outline" size={16} color="#9CA3AF" />
                        <Text className="text-gray-500 ml-1 text-sm">{product.deliveryTime || '30 mins'}</Text>
                    </View>
                </View>

                <Text className="text-gray-500 text-base leading-6 mb-6">
                    {product.description}
                </Text>

                {/* Choose Size */}
                {product.sizes && product.sizes.length > 0 && (
                    <>
                        <Text className="text-gray-500 font-bold mb-4 text-sm tracking-wider uppercase">CHOOSE SIZE</Text>
                        <View className="mb-6">
                            {product.sizes.map((size) => (
                                <SelectionOption
                                    key={size.id}
                                    label={size.label}
                                    price={typeof size.price === 'string' ? parseFloat(size.price) : size.price}
                                    selected={selectedSize.id === size.id}
                                    type="radio"
                                    onPress={() => setSelectedSize(size)}
                                />
                            ))}
                        </View>
                    </>
                )}

                {/* Add Extras */}
                {product.extras && product.extras.length > 0 && (
                    <>
                        <Text className="text-gray-500 font-bold mb-4 text-sm tracking-wider uppercase">ADD EXTRAS</Text>
                        <View className="mb-6">
                            {product.extras.map((extra) => (
                                <SelectionOption
                                    key={extra.id}
                                    label={extra.label}
                                    price={typeof extra.price === 'string' ? parseFloat(extra.price) : extra.price}
                                    selected={selectedExtras.includes(extra.id)}
                                    type="checkbox"
                                    onPress={() => toggleExtra(extra.id)}
                                />
                            ))}
                        </View>
                    </>
                )}
            </ScrollView>

            {/* Sticky Footer */}
            <View className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100 pb-10 shadow-2xl">
                {!isAdded ? (
                    <TouchableOpacity
                        className="w-full bg-[#0F172A] py-4 rounded-2xl flex-row justify-between items-center px-6"
                        activeOpacity={0.9}
                        onPress={handleAddToCart}
                    >
                        <Text className="text-white font-bold text-lg">Add to Cart</Text>
                        <View className="bg-white/20 px-3 py-1 rounded-lg">
                            <Text className="text-white font-bold text-base">AED {calculateTotal()}.00</Text>
                        </View>
                    </TouchableOpacity>
                ) : (
                    <View className="flex-row items-center justify-between gap-4">
                        <View className="max-w-[140px]">
                            <QtyButton
                                qty={qty}
                                onIncrement={() => setQty(prev => prev + 1)}
                                onDecrement={() => setQty(prev => prev > 1 ? prev - 1 : 1)}
                                backgroundColor="#F3F4F6" // bg-gray-100
                                textColor="black"
                                height={60}
                                buttonPaddingX="px-4"
                            />
                        </View>

                        <TouchableOpacity
                            className="flex-1 bg-[#0F172A] py-4 rounded-2xl flex-row justify-between items-center px-6"
                            activeOpacity={0.9}
                        >
                            <Text className="text-white font-bold text-lg">Added</Text>
                            <View className="bg-white/20 px-3 py-1 rounded-lg">
                                <Text className="text-white font-bold text-base">AED {calculateTotal() * qty}.00</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
}
