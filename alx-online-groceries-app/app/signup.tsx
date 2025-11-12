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

export default function SignUpScreen() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    const valid = /\S+@\S+\.\S+/.test(text);
    setIsValidEmail(valid);
  };

  const handleSignUp = () => {
    if (!username || !email || !password) return;
    router.replace("/location"); // proceed to location screen
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
              Sign Up
            </Text>
            <Text className="text-gray-500 mb-10">
              Enter your credentials to continue
            </Text>

            {/* 👤 Username */}
            <Text className="text-sm text-gray-500 mb-1">Username</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Enter your name"
              className="border-b border-gray-300 pb-2 text-base text-[#1F232B] mb-8"
              placeholderTextColor="#A1A1A1"
            />

            {/* 📧 Email */}
            <Text className="text-sm text-gray-500 mb-1">Email</Text>
            <View className="flex-row items-center border-b border-gray-300 pb-2 mb-8">
              <TextInput
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                className="flex-1 text-base text-[#1F232B]"
                placeholderTextColor="#A1A1A1"
              />
              {isValidEmail && (
                <Ionicons name="checkmark" size={20} color="#34A853" />
              )}
            </View>

            {/* 🔒 Password */}
            <Text className="text-sm text-gray-500 mb-1">Password</Text>
            <View className="flex-row items-center border-b border-gray-300 pb-2 mb-6">
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

            {/* Terms of Service */}
            <Text className="text-gray-500 text-sm mb-8">
              By continuing you agree to our{" "}
              <Text className="text-[#179454] font-medium">Terms of Service</Text>{" "}
              and{" "}
              <Text className="text-[#179454] font-medium">Privacy Policy</Text>.
            </Text>

            {/* ✅ Sign Up button */}
            <TouchableOpacity
              onPress={handleSignUp}
              activeOpacity={0.9}
              className={`py-4 rounded-xl ${
                username && email && password
                  ? "bg-[#34A853]"
                  : "bg-[#CDE8D6]"
              }`}
            >
              <Text className="text-white text-center text-lg font-semibold">
                Sign Up
              </Text>
            </TouchableOpacity>

            {/* 🦶 Footer */}
            <View className="mt-10 mb-8 flex-row justify-center">
              <Text className="text-gray-500">Already have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/login")}>
                <Text className="text-[#34A853] font-semibold">Signin</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
