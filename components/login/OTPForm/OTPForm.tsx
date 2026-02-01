import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { OtpInput } from "react-native-otp-entry";

interface OTPFormProps {
    onCodeChanged: (code: string) => void;
}

const OTPForm: React.FC<OTPFormProps> = ({ onCodeChanged }) => {
    const [timeLeft, setTimeLeft] = React.useState(60);
    const [canResend, setCanResend] = React.useState(false);

    React.useEffect(() => {
        if (timeLeft === 0) {
            setCanResend(true);
            return;
        }

        const intervalId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const handleResend = () => {
        setTimeLeft(60);
        setCanResend(false);
        // Trigger resend logic here
        console.log("Resending OTP...");
    };

    return (
        <View className="w-full">
            <OtpInput
                numberOfDigits={6}
                onTextChange={onCodeChanged}
                focusColor="#0F172A"
                theme={{
                    pinCodeContainerStyle: styles.pinCodeContainer,
                    pinCodeTextStyle: styles.pinCodeText,
                    focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                }}
            />

            <View className="mt-4 flex-row">
                {canResend ? (
                    <Text
                        onPress={handleResend}
                        className="text-primary font-bold text-base"
                    >
                        Resend Code
                    </Text>
                ) : (
                    <Text className="text-gray-400 text-base">
                        Resend code in {timeLeft}s
                    </Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pinCodeContainer: {
        width: 50,
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        backgroundColor: "#F9FAFB",
    },
    activePinCodeContainer: {
        borderColor: "#0F172A",
    },
    pinCodeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#111827",
    },
});

export default OTPForm;
