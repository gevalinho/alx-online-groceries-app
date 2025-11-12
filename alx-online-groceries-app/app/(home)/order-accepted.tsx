import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

export default function OrderAccepted() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <Stack.Screen options={{ headerShown: false }} />

      {/* Checkmark Circle */}
     <LottieView
  source={require("../../assets/animations/order-success.json")}
  autoPlay
  loop={false}
  style={{ width: 200, height: 200 }}
/>

      {/* Title */}
      <Text className="text-[20px] font-semibold text-[#1F232B] mb-2 text-center">
        Your Order has been accepted
      </Text>

      {/* Subtitle */}
      <Text className="text-gray-500 text-[14px] text-center mb-10 leading-5">
        Your items have been placed and are on their way to being processed.
      </Text>

      {/* Track Order */}
      <TouchableOpacity
        className="bg-[#34A853] py-4 w-full rounded-2xl items-center mb-5"
        onPress={() => router.push("/(home)/orders")}
      >
        <Text className="text-white font-semibold text-[16px]">
          Track Order
        </Text>
      </TouchableOpacity>

      {/* Back to Home */}
      <TouchableOpacity onPress={() => router.push("/(home)/shop")}>
        <Text className="text-[15px] font-medium text-[#1F232B]">
          Back to home
        </Text>
      </TouchableOpacity>
    </View>
  );
}
