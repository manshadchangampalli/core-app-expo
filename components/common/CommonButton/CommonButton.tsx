import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { clsx } from "clsx";

interface CommonButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: "primary" | "secondary";
}

const CommonButton: React.FC<CommonButtonProps> = ({
    title,
    variant = "primary",
    className,
    ...props
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            className={clsx(
                "w-full py-4 rounded-xl items-center justify-center",
                variant === "primary" ? "bg-[#0F172A]" : "bg-gray-100",
                className
            )}
            {...props}
        >
            <Text
                className={clsx(
                    "text-lg font-bold",
                    variant === "primary" ? "text-white" : "text-gray-900"
                )}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CommonButton;
