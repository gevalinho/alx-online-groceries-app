import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function NumberScreen() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  return (
    <>
      {/* Hide header */}
      <Stack.Screen options={{ headerShown: false }} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1 bg-white px-6 pt-16"
      >
        {/* Back button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute left-6 top-12 z-10"
        >
          <Ionicons name="chevron-back" size={24} color="#1F232B" />
        </TouchableOpacity>

        {/* Title */}
        <Text className="text-2xl font-semibold text-[#1F232B] mb-8 mt-10">
          Enter your mobile number
        </Text>

        {/* Label */}
        <Text className="text-sm text-gray-500 mb-2">Mobile Number</Text>

        {/* Input field */}
        <View className="flex-row items-center border-b border-gray-300 pb-3 mb-10">
          <Image
            source={{ uri: "https://flagcdn.com/w40/bd.png" }}
            className="w-7 h-5 mr-2 rounded"
          />
          <Text className="text-[#1F232B] mr-2 text-base font-medium">+880</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="Enter number"
            className="flex-1 text-base text-[#1F232B]"
            placeholderTextColor="#A1A1A1"
          />
        </View>

        {/* Continue button */}
        <View className="flex-1 items-end justify-end mb-12">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("/signin")}
            className="bg-[#34A853] w-14 h-14 rounded-full items-center justify-center shadow-lg"
          >
            <Ionicons name="arrow-forward" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
