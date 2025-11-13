import { useRouter } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const beverages = [
  {
    id: "8",
    name: "Diet Coke",
    info: "355ml, Price",
    price: 1.99,
    image: require("../../assets/images/diet_coke.png"),
  },
  {
    id: "7",
    name: "Sprite Can",
    info: "325ml, Price",
    price: 1.5,
    image: require("../../assets/images/sprite_can.png"),
  },
  {
    id: "9",
    name: "Apple & Grape Juice",
    info: "2L, Price",
    price: 15.99,
    image: require("../../assets/images/apple_grape_juice.png"),
  },
  {
    id: "10",
    name: "Orange Juice",
    info: "2L, Price",
    price: 15.99,
    image: require("../../assets/images/orange_juice.png"),
  },
  {
    id: "10",
    name: "Coca Cola Can",
    info: "355ml, Price",
    price: 4.99,
    image: require("../../assets/images/coke_can.png"),
  },
  {
    id: "11",
    name: "Pepsi Can",
    info: "330ml, Price",
    price: 4.99,
    image: require("../../assets/images/pepsi_can.png"),
  },
];

export default function Beverages() {
  const router = useRouter();

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      className="bg-white rounded-2xl p-3 shadow-sm w-[47%] mb-4"
      activeOpacity={0.8}
      // onPress={() => router.push({ pathname: "/(home)/product-detail", params: { id: item.id } })}
      onPress={() => router.push(`/(home)/product/${item.id}`)}
    >
      <Image source={item.image} className="w-full h-28" resizeMode="contain" />
      <Text className="text-[#1F232B] font-semibold mt-2">{item.name}</Text>
      <Text className="text-gray-400 text-xs mb-1">{item.info}</Text>
      <View className="flex-row justify-between items-center">
        <Text className="text-[#1F232B] font-bold text-[14px]">${item.price}</Text>
        <View className="bg-[#34A853] rounded-full p-2">
          <Feather name="plus" size={14} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#F9FAFB]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-3">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#1F232B" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-[#1F232B]">Beverages</Text>
        <TouchableOpacity>
          <Feather name="shopping-cart" size={20} color="#1F232B" />
        </TouchableOpacity>
      </View>

      {/* Grid of Products */}
      <FlatList
        data={beverages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
