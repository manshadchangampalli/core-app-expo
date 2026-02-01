import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { OfferConfig } from './offers.config';
import { AddToCartButton } from '../../common';

interface OfferCardProps {
    item: OfferConfig;
}

const OfferCard: React.FC<OfferCardProps> = ({ item }) => {
    return (
        <View className="bg-white rounded-3xl overflow-hidden shadow-md mb-6 border border-gray-300">
            {/* Image Section */}
            <View className="relative h-64 w-full">
                <Image
                    source={{ uri: item.image }}
                    className="w-full h-full"
                    resizeMode="cover"
                />

                {/* Gradient Overlay for text readability (optional but good for white text on images) */}
                <View className="absolute inset-0 bg-[#09090952]" />

                {/* AI Pick Badge */}
                {item.isHighlighted && (
                    <View className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 flex-row items-center gap-3 shadow-sm">
                        <View className="bg-pink-100 p-1.5 rounded-full">
                            <Ionicons name="sparkles" size={16} color="#F472B6" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-[#FF6B35] font-bold text-xs tracking-wider">AI PICK</Text>
                            <Text className="text-gray-800 text-sm font-semibold" numberOfLines={1}>
                                {item.aiReason}
                            </Text>
                        </View>
                    </View>
                )}

                {/* Bottom Overlay Content */}
                <View className="absolute bottom-4 left-4 right-4">
                    {/* Discount Tag */}
                    <View className="bg-[#4a4a4a]/90 self-start px-3 py-1.5 rounded-full flex-row items-center gap-1.5 mb-2">
                        <Ionicons name="pricetag" size={12} color="white" />
                        <Text className="text-white font-bold text-xs">{item.discount}</Text>
                    </View>

                    {/* Title */}
                    <Text className="text-white text-2xl font-extrabold shadow-sm tracking-tight">{item.title}</Text>
                </View>
            </View>

            {/* Content Body */}
            <View className="p-5">
                <Text className="text-gray-500 text-sm leading-5 mb-5 font-medium">
                    {item.description}
                </Text>

                <View className="flex-row items-center justify-between">
                    <View>
                        <Text className="text-gray-400 text-xs font-semibold line-through">
                            AED {item.originalPrice}
                        </Text>
                        <Text className="text-gray-900 text-2xl font-extrabold">
                            AED {item.price}
                        </Text>
                    </View>

                    <AddToCartButton qty={0} />
                </View>
            </View>
        </View>
    );
};

export default OfferCard;
