import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCartStore } from "../../store/cartStore";
import { useRouter } from "expo-router";

export default function CheckoutModal({ visible, onClose }) {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const total = getTotal?.() || 0;

  const handlePlaceOrder = () => {
    clearCart();
    onClose();
    alert("✅ Your order has been placed successfully!");
    router.push("/(home)/shop");
  };

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <Pressable
        onPress={onClose}
        className="flex-1 bg-black/30 justify-end"
      >
        <View className="bg-white rounded-t-3xl p-5 pb-10">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-[18px] font-semibold text-[#1F232B]">
              Checkout
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Delivery */}
          <TouchableOpacity className="flex-row justify-between items-center border-b border-gray-100 py-4">
            <Text className="text-[15px] font-semibold text-[#1F232B]">
              Delivery
            </Text>
            <View className="flex-row items-center gap-x-2">
              <Text className="text-gray-400">Select Method</Text>
              <Ionicons name="chevron-forward" size={18} color="#ccc" />
            </View>
          </TouchableOpacity>

          {/* Payment */}
          <TouchableOpacity className="flex-row justify-between items-center border-b border-gray-100 py-4">
            <Text className="text-[15px] font-semibold text-[#1F232B]">
              Payment
            </Text>
            <View className="flex-row items-center gap-x-2">
              <Ionicons name="card" size={18} color="#1E88E5" />
              <Ionicons name="chevron-forward" size={18} color="#ccc" />
            </View>
          </TouchableOpacity>

          {/* Promo Code */}
          <TouchableOpacity className="flex-row justify-between items-center border-b border-gray-100 py-4">
            <Text className="text-[15px] font-semibold text-[#1F232B]">
              Promo Code
            </Text>
            <View className="flex-row items-center gap-x-2">
              <Text className="text-gray-400">Pick discount</Text>
              <Ionicons name="chevron-forward" size={18} color="#ccc" />
            </View>
          </TouchableOpacity>

          {/* Total Cost */}
          <View className="flex-row justify-between items-center py-4 border-b border-gray-100">
            <Text className="text-[15px] font-semibold text-[#1F232B]">
              Total Cost
            </Text>
            <Text className="text-[15px] font-semibold text-[#1F232B]">
              ${total.toFixed(2)}
            </Text>
          </View>

          {/* Terms */}
          <Text className="text-[12px] text-gray-500 mt-4 mb-6 text-center">
            By placing an order you agree to our{" "}
            <Text className="text-[#34A853] font-semibold">
              Terms And Conditions
            </Text>
          </Text>

          {/* Place Order */}
          <TouchableOpacity
            onPress={handlePlaceOrder}
            className="bg-[#34A853] py-4 rounded-2xl items-center"
          >
            <Text className="text-white font-semibold text-[16px]">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
}
