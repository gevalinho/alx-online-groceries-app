import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useCartStore } from "../../store/cartStore";
import { SafeAreaView } from "react-native-safe-area-context";

const favouriteItems = [
  {
    id: "1",
    name: "Sprite Can",
    info: "325ml, Price",
    price: 1.5,
    image: require("../../assets/images/sprite.png"),
  },
  {
    id: "2",
    name: "Diet Coke",
    info: "355ml, Price",
    price: 1.99,
    image: require("../../assets/images/dietcoke.png"),
  },
  {
    id: "3",
    name: "Apple & Grape Juice",
    info: "2L, Price",
    price: 15.5,
    image: require("../../assets/images/applejuice.png"),
  },
  {
    id: "4",
    name: "Coca Cola Can",
    info: "325ml, Price",
    price: 4.99,
    image: require("../../assets/images/cocacola.png"),
  },
  {
    id: "5",
    name: "Pepsi Can",
    info: "330ml, Price",
    price: 4.99,
    image: require("../../assets/images/pepsi.png"),
  },
];

export default function FavouriteScreen() {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddAllToCart = () => {
    favouriteItems.forEach((item) =>
      addToCart({ ...item, quantity: 1 })
    );
    alert("All items added to your cart 🛒");
  };

  const renderItem = ({ item }) => (
    <View className="flex-row justify-between items-center border-b border-gray-100 py-3">
      <View className="flex-row items-center">
        <Image source={item.image} className="w-12 h-12 rounded-lg mr-3" resizeMode="contain" />
        <View>
          <Text className="text-[15px] font-semibold text-[#1F232B]">{item.name}</Text>
          <Text className="text-gray-400 text-sm">{item.info}</Text>
        </View>
      </View>

      <View className="flex-row items-center gap-x-2">
        <Text className="text-[15px] font-semibold text-[#1F232B]">${item.price.toFixed(2)}</Text>
        <Ionicons name="chevron-forward" size={18} color="#bbb" />
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <SafeAreaView className="flex-1 bg-[#F9FAFB]" edges={["top"]}>
      <View className="flex-row items-center justify-center py-5 border-b border-gray-100">
        <Text className="text-[18px] font-semibold text-[#1F232B]">Favourite</Text>
      </View>
      </SafeAreaView>

      {/* Favourites List */}
      <FlatList
        data={favouriteItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Add All to Cart */}
      <View className="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-gray-100">
        <TouchableOpacity
          onPress={handleAddAllToCart}
          className="bg-[#34A853] py-4 rounded-2xl items-center"
        >
          <Text className="text-white font-semibold text-[16px]">
            Add All To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
