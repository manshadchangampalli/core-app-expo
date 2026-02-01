import React from "react";
import { TouchableOpacity } from "react-native";
import { LiquidGlassView } from "@callstack/liquid-glass";

interface GlassIconButtonProps {
    onPress?: () => void;
    children?: React.ReactNode;
    backgroundColor?: string;
}

const GlassIconButton: React.FC<GlassIconButtonProps> = ({
    onPress,
    children,
    backgroundColor = '#00000010'
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LiquidGlassView
                style={{
                    padding: 10,
                    borderRadius: 9999,
                    borderColor: '#00000010',
                    borderWidth: 1,
                    backgroundColor: backgroundColor
                }}
                effect={'clear'}
                interactive
            >
                {children}
            </LiquidGlassView>
        </TouchableOpacity>
    );
};

export default GlassIconButton;
