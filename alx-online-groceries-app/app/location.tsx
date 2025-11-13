import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function LocationScreen() {
  const router = useRouter();
  const [zone, setZone] = useState("Nigeria");
  const [area, setArea] = useState("");

  const handleSubmit = () => {
    if (!zone || !area) return;
    router.replace("/(home)/shop"); // redirect after selection
  };

  return (
    <>
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

        {/* Map illustration */}
        <View className="items-center mt-10">
          <Image
            source={require("../assets/images/location_marker.png")} // replace with your Figma asset
            className="w-40 h-40 mb-6"
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text className="text-2xl font-semibold text-center text-[#1F232B] mb-2">
          Select Your Location
        </Text>
        <Text className="text-gray-500 text-center mb-10">
          Switch on your location to stay in tune with what's happening in your
          area
        </Text>

        {/* Zone picker */}
        <Text className="text-sm text-gray-500 mb-1">Your Zone</Text>
        <View className="border border-gray-300 rounded-xl mb-5">
          <Picker
            selectedValue={zone}
            onValueChange={(val) => setZone(val)}
            dropdownIconColor="#1F232B"
          >
            <Picker.Item label="Nigeria" value="Nigeria" />
            <Picker.Item label="South Africa" value="southafrica" />
            <Picker.Item label="Ghan" value="Ghana" />
            <Picker.Item label="Cameroon" value="Cameroon" />
          </Picker>
        </View>

        {/* Area picker */}
        <Text className="text-sm text-gray-500 mb-1">Your Area</Text>
        <View className="border border-gray-300 rounded-xl mb-10">
          <Picker
            selectedValue={area}
            onValueChange={(val) => setArea(val)}
            dropdownIconColor="#1F232B"
          >
            <Picker.Item label="Types of your area" value="" />
            <Picker.Item label="Residential" value="Residential" />
            <Picker.Item label="Commercial" value="Commercial" />
            <Picker.Item label="Industrial" value="Industrial" />
          </Picker>
        </View>

        {/* Submit button */}
        <TouchableOpacity
          onPress={handleSubmit}
          activeOpacity={0.9}
          className={`py-4 rounded-xl ${
            zone && area ? "bg-[#34A853]" : "bg-[#CDE8D6]"
          }`}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Submit
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}
