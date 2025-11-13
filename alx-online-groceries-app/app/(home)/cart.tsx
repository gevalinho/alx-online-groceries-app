import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useCartStore } from "../../store/cartStore";
import { SafeAreaView } from "react-native-safe-area-context";


export default function CartScreen() {

  
  const router = useRouter();
  // const safeItems = items || [];
  


 const { items, increaseQty, decreaseQty, removeFromCart, getTotal } = useCartStore();

  const total = getTotal() || 0;
  const [checkoutVisible, setCheckoutVisible] = useState(false);


  const renderItem = ({ item }: { item: any }) => (
    <View className="flex-row justify-between items-center py-4 px-8 border-b border-gray-100">
      <View className="flex-row items-center">
        <Image
          source={item.image}
          className="w-14 h-14 rounded-lg mr-3"
          resizeMode="contain"
        />
        <View>
          <Text className="text-[15px] font-semibold text-[#1F232B]">
            {item.name}
          </Text>
          <Text className="text-gray-400 text-sm">{item.info || ""}</Text>
        </View>
      </View>

      <View className="items-end">
        {/* Quantity Controls */}
        <View className="flex-row items-center mb-1">
          <TouchableOpacity
            onPress={() => decreaseQty(item.id)}
            className="w-7 h-7 rounded-full border border-gray-300 items-center justify-center"
          >
            <Text className="text-[16px] font-semibold text-gray-700">−</Text>
          </TouchableOpacity>

          <Text className="mx-3 text-[15px] font-medium">
            {item.quantity}
          </Text>

          <TouchableOpacity
            onPress={() => increaseQty(item.id)}
            className="w-7 h-7 rounded-full border border-gray-300 items-center justify-center"
          >
            <Text className="text-[16px] font-semibold text-gray-700">+</Text>
          </TouchableOpacity>
        </View>

        {/* Remove & Price */}
        <View className="flex-row items-center justify-end gap-x-2">
          <TouchableOpacity onPress={() => removeFromCart(item.id)}>
            <Ionicons name="close" size={18} color="#999" />
          </TouchableOpacity>
          <Text className="text-[15px] font-semibold text-[#1F232B]">
            ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <SafeAreaView className="flex-1 bg-[#F9FAFB]" edges={["top"]}>
      <View className="flex-row items-center justify-center py-5 border-b border-gray-100">
        <Text className="text-[18px] font-semibold text-[#1F232B]">
          My Cart
        </Text>
      </View>
      </SafeAreaView>

      {/* Empty State */}
      {items.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Feather name="shopping-cart" size={48} color="#ccc" />
          <Text className="text-gray-500 mt-3">Your cart is empty</Text>
        </View>
      ) : (
        <>
          {/* Cart Items */}
        <FlatList
        data={items} // ✅ not cart
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        />


          {/* Checkout Button */}
          <View className="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-gray-100">
            <TouchableOpacity
              onPress={() => router.push("/(home)/checkout")}
              className="bg-[#34A853] py-4 rounded-2xl items-center flex-row justify-center"
            >
              <Text className="text-white font-semibold text-[16px]">
                Go to Checkout
              </Text>
              <View className="ml-3 px-3 py-1 bg-white rounded-xl">
                <Text className="text-[#34A853] font-semibold text-[14px]">
                  ${total.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
