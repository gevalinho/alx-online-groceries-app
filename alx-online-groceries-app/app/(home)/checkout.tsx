// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   Pressable,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useCartStore } from "../../store/cartStore";
// import { useRouter } from "expo-router";

// export default function CheckoutModal({ visible, onClose }) {
//   const router = useRouter();
//   const { items, getTotal, clearCart } = useCartStore();
//   const total = getTotal?.() || 0;

//   const handlePlaceOrder = () => {
//     clearCart();
//     onClose();
//     alert("✅ Your order has been placed successfully!");
//     router.push("/(home)/shop");
//   };

//   return (
//     <Modal animationType="slide" transparent visible={visible}>
//       <Pressable
//         onPress={onClose}
//         className="flex-1 bg-black/30 justify-end"
//       >
//         <View className="bg-white rounded-t-3xl p-5 pb-10">
//           {/* Header */}
//           <View className="flex-row justify-between items-center mb-6">
//             <Text className="text-[18px] font-semibold text-[#1F232B]">
//               Checkout
//             </Text>
//             <TouchableOpacity onPress={onClose}>
//               <Ionicons name="close" size={22} color="#000" />
//             </TouchableOpacity>
//           </View>

//           {/* Delivery */}
//           <TouchableOpacity className="flex-row justify-between items-center border-b border-gray-100 py-4">
//             <Text className="text-[15px] font-semibold text-[#1F232B]">
//               Delivery
//             </Text>
//             <View className="flex-row items-center gap-x-2">
//               <Text className="text-gray-400">Select Method</Text>
//               <Ionicons name="chevron-forward" size={18} color="#ccc" />
//             </View>
//           </TouchableOpacity>

//           {/* Payment */}
//           <TouchableOpacity className="flex-row justify-between items-center border-b border-gray-100 py-4">
//             <Text className="text-[15px] font-semibold text-[#1F232B]">
//               Payment
//             </Text>
//             <View className="flex-row items-center gap-x-2">
//               <Ionicons name="card" size={18} color="#1E88E5" />
//               <Ionicons name="chevron-forward" size={18} color="#ccc" />
//             </View>
//           </TouchableOpacity>

//           {/* Promo Code */}
//           <TouchableOpacity className="flex-row justify-between items-center border-b border-gray-100 py-4">
//             <Text className="text-[15px] font-semibold text-[#1F232B]">
//               Promo Code
//             </Text>
//             <View className="flex-row items-center gap-x-2">
//               <Text className="text-gray-400">Pick discount</Text>
//               <Ionicons name="chevron-forward" size={18} color="#ccc" />
//             </View>
//           </TouchableOpacity>

//           {/* Total Cost */}
//           <View className="flex-row justify-between items-center py-4 border-b border-gray-100">
//             <Text className="text-[15px] font-semibold text-[#1F232B]">
//               Total Cost
//             </Text>
//             <Text className="text-[15px] font-semibold text-[#1F232B]">
//               ${total.toFixed(2)}
//             </Text>
//           </View>

//           {/* Terms */}
//           <Text className="text-[12px] text-gray-500 mt-4 mb-6 text-center">
//             By placing an order you agree to our{" "}
//             <Text className="text-[#34A853] font-semibold">
//               Terms And Conditions
//             </Text>
//           </Text>

//           {/* Place Order */}
//           <TouchableOpacity
//             onPress={handlePlaceOrder}
//             className="bg-[#34A853] py-4 rounded-2xl items-center"
//           >
//             <Text className="text-white font-semibold text-[16px]">
//               Place Order
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </Pressable>
//     </Modal>
//   );
// }


// import React, { useState } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { Stack, useRouter } from "expo-router";
// import OrderFailed from "../../components/modals/OrderFailed";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Checkout() {
//   const router = useRouter();
//   const [submitting, setSubmitting] = useState(false);
//   const [showFail, setShowFail] = useState(false);

//   async function handlePlaceOrder() {
//     try {
//       setSubmitting(true);
//       // TODO: call your API here
//       // throw new Error("simulate failure"); // ← uncomment to test failure
//       router.push("/(home)/order-accepted");   // success
//     } catch (e) {
//       setShowFail(true);                       // show modal on failure
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <Stack.Screen options={{ title: "Checkout" }} />

//       {/* ... your checkout UI ... */}

//       <View className="p-5">
//         <TouchableOpacity
//           disabled={submitting}
//           onPress={handlePlaceOrder}
//           className="bg-[#34A853] py-4 rounded-2xl items-center"
//         >
//           <Text className="text-white font-semibold text-[16px]">
//             {submitting ? "Placing..." : "Place Order"}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* FAILED MODAL */}
//       <OrderFailed
//         visible={showFail}
//         onRetry={() => {
//           setShowFail(false);
//           handlePlaceOrder();
//         }}
//         onClose={() => {
//           setShowFail(false);
//           router.push("/(home)/shop"); // back to home per design
//         }}
//       />
//     </SafeAreaView>
//   );
// }


import React, { useState } from "react";
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
import OrderFailed from "../../components/modals/OrderFailed";

interface CheckoutModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ visible, onClose }: CheckoutModalProps) {
  const router = useRouter();
  const { getTotal, clearCart } = useCartStore();
  const total = getTotal?.() || 0;

  const [submitting, setSubmitting] = useState(false);
  const [showFail, setShowFail] = useState(false);

  const handlePlaceOrder = async () => {
    try {
      setSubmitting(true);

      // Simulate order placement or API call
      // const simulateSuccess = Math.random() > 0.3; // 70% success chance
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/(home)/order-accepted"); 

      if (!simulateSuccess) throw new Error("Order failed");

      clearCart();
      onClose();
      router.push("/(home)/order-accepted");
    } catch (error) {
      setShowFail(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Main Checkout Modal */}
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

            {/* Total */}
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

            {/* Button */}
            <TouchableOpacity
              onPress={handlePlaceOrder}
              disabled={submitting}
              className={`py-4 rounded-2xl items-center ${
                submitting ? "bg-gray-400" : "bg-[#34A853]"
              }`}
            >
              <Text className="text-white font-semibold text-[16px]">
                {submitting ? "Placing..." : "Place Order"}
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>

      {/* Failure Modal */}
      <OrderFailed
        visible={showFail}
        onRetry={() => {
          setShowFail(false);
          handlePlaceOrder();
        }}
        onClose={() => {
          setShowFail(false);
          onClose();
          router.push("/(home)/shop");
        }}
      />
    </>
  );
}
