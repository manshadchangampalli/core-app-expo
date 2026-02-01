import React from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import GlassIconButton from '../GlassIconButton/GlassIconButton';

interface BackButtonProps {
    fallbackRoute?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ fallbackRoute = '/(tabs)' }) => {
    const router = useRouter();

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace(fallbackRoute as any);
        }
    };

    return (
        <GlassIconButton onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </GlassIconButton>
    );
};

export default BackButton;
