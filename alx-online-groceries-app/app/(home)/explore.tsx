import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";

export default function Explore() {
  const router = useRouter();

  const categories = [
    {
      id: 1,
      title: "Fresh Fruits & Vegetable",
      color: "bg-green-50",
      image: require("../../assets/images/vegetables.png"),
      path: "/(home)/shop",
    },
    {
      id: 2,
      title: "Cooking Oil & Ghee",
      color: "bg-yellow-50",
      image: require("../../assets/images/oil.png"),
      path: "/(home)/shop",
    },
    {
      id: 3,
      title: "Meat & Fish",
      color: "bg-red-50",
      image: require("../../assets/images/meat.png"),
      path: "/(home)/shop",
    },
    {
      id: 4,
      title: "Bakery & Snacks",
      color: "bg-purple-50",
      image: require("../../assets/images/snacks.png"),
      path: "/(home)/shop",
    },
    {
      id: 5,
      title: "Dairy & Eggs",
      color: "bg-amber-50",
      image: require("../../assets/images/dairy.png"),
      path: "/(home)/shop",
    },
    {
      id: 6,
      title: "Beverages",
      color: "bg-blue-50",
      image: require("../../assets/images/beverages.png"),
      path: "/(home)/beverages", // 👈 NEW LINK
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-center mt-4 mb-2">
        <Text className="text-xl font-semibold text-[#1F232B]">Find Products</Text>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center mx-5 bg-gray-50 rounded-2xl px-3 py-3 mb-5 border border-gray-100">
        <Feather name="search" size={18} color="#A3A3A3" />
        <TextInput
          placeholder="Search Store"
          placeholderTextColor="#A3A3A3"
          className="flex-1 text-base ml-2"
        />
      </View>

      {/* Categories Grid */}
      <View className="flex-row flex-wrap justify-between px-5">
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            className={`w-[48%] h-44 rounded-2xl mb-4 items-center justify-center ${item.color}`}
            activeOpacity={0.8}
            onPress={() => router.push(item.path)}
          >
            <Image
              source={item.image}
              className="w-24 h-24 mb-3"
              resizeMode="contain"
            />
            <Text className="text-center font-medium text-[#1F232B] text-sm">
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
