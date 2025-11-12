// app/verification.tsx
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useMemo, useRef, useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";

export default function VerificationScreen() {
  const router = useRouter();

  // 4-code state
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  // resend timer
  const [seconds, setSeconds] = useState(30);
  React.useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const isComplete = useMemo(() => code.every((c) => c.length === 1), [code]);
  const value = code.join("");

  const handleChange = (idx: number, char: string) => {
    // allow pasting "1234"
    if (char.length > 1) {
      const arr = char.replace(/\D/g, "").slice(0, 4).split("");
      const next = [...code];
      for (let i = 0; i < 4; i++) next[i] = arr[i] ?? "";
      setCode(next);
      const last = Math.min(arr.length, 4) - 1;
      if (last >= 0) inputs[last]?.current?.focus();
      return;
    }

    const next = [...code];
    next[idx] = char.replace(/\D/g, "").slice(0, 1);
    setCode(next);

    if (char && idx < 3) inputs[idx + 1].current?.focus();
    if (!char && idx > 0) inputs[idx - 1].current?.focus();
  };

  const handleKeyPress = (idx: number, e: any) => {
    if (e.nativeEvent.key === "Backspace" && !code[idx] && idx > 0) {
      inputs[idx - 1].current?.focus();
    }
  };

  const onContinue = () => {
    if (!isComplete) return;
    // TODO: verify code via API, then navigate:
    router.replace("/(home)/shop");
  };

  const onResend = () => {
    if (seconds > 0) return;
    setSeconds(30);
    // TODO: trigger resend via API
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1 bg-white px-6 pt-16"
      >
        {/* Back */}
        <Pressable onPress={() => router.back()} className="absolute left-6 top-12 z-10">
          <Ionicons name="chevron-back" size={24} color="#1F232B" />
        </Pressable>

        {/* Title */}
        <Text className="text-2xl font-semibold text-[#1F232B] mt-10 mb-6">
          Enter your 4-digit code
        </Text>

        {/* Label */}
        <Text className="text-sm text-gray-500 mb-2">Code</Text>

        {/* OTP Inputs */}
        <View className="flex-row gap-3 mb-10">
          {code.map((c, i) => (
            <TextInput
              key={i}
              ref={inputs[i]}
              value={c}
              onChangeText={(t) => handleChange(i, t)}
              onKeyPress={(e) => handleKeyPress(i, e)}
              keyboardType="number-pad"
              maxLength={1}
              autoFocus={i === 0}
              className="w-14 h-14 rounded-2xl border border-gray-300 text-center text-xl text-[#1F232B]"
              placeholder="-"
              placeholderTextColor="#A1A1A1"
              returnKeyType={i === 3 ? "done" : "next"}
            />
          ))}
        </View>

        {/* Resend */}
        <Pressable onPress={onResend} disabled={seconds > 0}>
          <Text className={`text-[${seconds > 0 ? "#94a3b8" : "#179454"}]`}>
            {seconds > 0 ? `Resend Code in ${seconds}s` : "Resend Code"}
          </Text>
        </Pressable>

        {/* Continue FAB */}
        <View className="flex-1 items-end justify-end mb-12">
          <Pressable
            onPress={onContinue}
            disabled={!isComplete}
            className={`w-14 h-14 rounded-full items-center justify-center ${
              isComplete ? "bg-[#34A853]" : "bg-[#CDE8D6]"
            }`}
          >
            <Ionicons name="arrow-forward" size={26} color="#fff" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
