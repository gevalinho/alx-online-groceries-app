import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) return;
    router.replace("/(home)/shop"); // redirect after successful login
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1 bg-white"
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex-1 px-6 pt-16">
            {/* 🥕 Logo */}
            <View className="items-center mb-10">
              <Image
                source={require("../assets/images/carrot_logo.png")} // replace with your asset
                className="w-12 h-12"
                resizeMode="contain"
              />
            </View>

            {/* 🧾 Heading */}
            <Text className="text-2xl font-bold text-[#1F232B] mb-1">
              Log in
            </Text>
            <Text className="text-gray-500 mb-10">
              Enter your emails and password
            </Text>

            {/* 📧 Email */}
            <Text className="text-sm text-gray-500 mb-1">Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              className="border-b border-gray-300 pb-2 text-base text-[#1F232B] mb-8"
              placeholderTextColor="#A1A1A1"
            />

            {/* 🔒 Password */}
            <Text className="text-sm text-gray-500 mb-1">Password</Text>
            <View className="flex-row items-center border-b border-gray-300 pb-2 mb-3">
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                className="flex-1 text-base text-[#1F232B]"
                placeholderTextColor="#A1A1A1"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity className="self-end mb-8">
              <Text className="text-[#179454] text-sm font-medium">
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* ✅ Log In button */}
            <TouchableOpacity
              onPress={handleLogin}
              activeOpacity={0.9}
              className={`py-4 rounded-xl ${
                email && password ? "bg-[#34A853]" : "bg-[#CDE8D6]"
              }`}
            >
              <Text className="text-white text-center text-lg font-semibold">
                Log In
              </Text>
            </TouchableOpacity>

            {/* 🦶 Footer */}
            <View className="mt-10 mb-8 flex-row justify-center">
              <Text className="text-gray-500">Don’t have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/signup")}>
                <Text className="text-[#34A853] font-semibold">Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
