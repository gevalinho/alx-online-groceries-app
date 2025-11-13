import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100">
      <ImageBackground
        // source={{ uri: "https://images.unsplash.com/photo-1601046003300-50f9f8a3b5b4" }} // replace with your exported Figma asset if available
        source={require("../assets/images/onbording_bg.png")}
        
        resizeMode="cover"
        className="flex-1 justify-end"
      >
        {/* Overlay for readability */}
        <View className="bg-black/40 px-6 py-10 rounded-t-3xl">
          <View className="items-center mb-6">
            {/* Logo / Icon */}
            <View className="w-12 h-12 bg-white rounded-full items-center justify-center mb-3">
              <Text className="text-2xl">🥕</Text>
            </View>

            <Text className="text-white text-2xl font-bold text-center">
              Welcome to our store
            </Text>
            <Text className="text-gray-200 text-center mt-2">
              Get your groceries in as fast as one hour
            </Text>
          </View>

          {/* Button */}
          <TouchableOpacity
            onPress={() => router.push("/signin")}
            className="bg-[#34A853] py-4 rounded-2xl"
            activeOpacity={0.8}
          >
            <Text className="text-white text-center text-lg font-semibold">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
