import { Feather, Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useCartStore } from "../../../store/cartStore";

// Mock product data
const products = [
  {
    id: "1",
    name: "Organic Bananas",
    info: "7pcs, Priceg",
    price: 4.99,
    image: require("../../../assets/images/bananas.png"),
    description:
      "Bananas are rich in potassium and fiber. They may help with digestion and support heart health.",
  },
  {
    id: "2",
    name: "Naturel Red Apple",
    info: "1kg, Priceg",
    price: 4.99,
    image: require("../../../assets/images/apple.png"),
    description:
      "Apples are nutritious. Apples may be good for weight loss, heart health, and overall wellness.",
  },
  {
    id: "3",
    name: "Bell Pepper Red",
    info: "1kg, Priceg",
    price: 4.99,
    image: require("../../../assets/images/pepper.png"),
    description:
      "Fresh red bell peppers are packed with vitamin C and antioxidants for a healthy diet.",
  },
  {
    type: "product",
    id: "4",
    name: "Ginger",
    info: "250gm, Priceg",
    price: 4.99,
    image: require("../../../assets/images/ginger.png"),
    description:
      "Fresh red bell peppers are packed with vitamin C and antioxidants for a healthy diet.",
  },
   {
              id: "5",
              name: "Beef Bone",
              info: "1kg, Priceg",
              price: 4.99,
              image: require("../../../assets/images/beef.png"),
              description:
      "Fresh red bell peppers are packed with vitamin C and antioxidants for a healthy diet.",
            },
            {
              id: "6",
              name: "Broiler Chicken",
              info: "1kg, Priceg",
              price: 4.99,
              image: require("../../../assets/images/chicken.png"),
              description:
      "Fresh red bell peppers are packed with vitamin C and antioxidants for a healthy diet.",
            },
              {
    id: "7",
    name: "Sprite Can",
    info: "325ml, Price",
    price: 1.5,
    image: require("../../../assets/images/sprite.png"),
  },
  {
    id: "8",
    name: "Diet Coke",
    info: "355ml, Price",
    price: 1.99,
    image: require("../../../assets/images/dietcoke.png"),
  },
  {
    id: "9",
    name: "Apple & Grape Juice",
    info: "2L, Price",
    price: 15.5,
    image: require("../../../assets/images/applejuice.png"),
  },
  {
    id: "10",
    name: "Coca Cola Can",
    info: "325ml, Price",
    price: 4.99,
    image: require("../../../assets/images/cocacola.png"),
  },
  {
    id: "11",
    name: "Pepsi Can",
    info: "330ml, Price",
    price: 4.99,
    image: require("../../../assets/images/pepsi.png"),
  },
];

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });
    alert(`${product.name} added to basket 🛒`);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View className="flex-row justify-between items-center px-4 pt-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#1F232B" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="share-2" size={20} color="#1F232B" />
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <Image
        source={product.image}
        resizeMode="contain"
        className="w-full h-64 mt-4"
      />

      {/* Product Info */}
      <View className="px-5 mt-4">
        <View className="flex-row justify-between items-center mb-3">
          <View>
            <Text className="text-[18px] font-semibold text-[#1F232B]">
              {product.name}
            </Text>
            <Text className="text-gray-400 text-sm">{product.info}</Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="heart-outline" size={22} color="#1F232B" />
          </TouchableOpacity>
        </View>

        {/* Quantity & Price */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-full border border-gray-300 items-center justify-center"
            >
              <Text className="text-[18px] font-semibold text-gray-700">-</Text>
            </TouchableOpacity>

            <Text className="mx-4 text-[16px] font-medium">{quantity}</Text>

            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-full border border-gray-300 items-center justify-center"
            >
              <Text className="text-[18px] font-semibold text-gray-700">+</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-[18px] font-semibold text-[#1F232B]">
            ${(product.price * quantity).toFixed(2)}
          </Text>
        </View>

        {/* Product Detail */}
        <View className="border-t border-gray-200 pt-4 mb-4">
          <Text className="text-[15px] font-semibold text-[#1F232B] mb-2">
            Product Detail
          </Text>
          <Text className="text-[13px] text-gray-500 leading-5">
            {product.description}
          </Text>
        </View>

        {/* Nutrition & Review */}
        <View className="border-t border-gray-200 pt-3">
          <TouchableOpacity className="flex-row justify-between items-center py-2">
            <Text className="text-[15px] text-[#1F232B] font-semibold">
              Nutritions
            </Text>
            <Feather name="chevron-right" size={20} color="#888" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row justify-between items-center py-2">
            <Text className="text-[15px] text-[#1F232B] font-semibold">
              Review
            </Text>
            <View className="flex-row">
              {[...Array(5)].map((_, i) => (
                <Ionicons key={i} name="star" size={16} color="#F4A300" />
              ))}
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Add To Basket Button */}
      <View className="px-5 mt-6 mb-10">
        <TouchableOpacity
          className="bg-[#34A853] py-4 rounded-2xl items-center"
          onPress={handleAddToCart}
        >
          <Text className="text-white font-semibold text-[16px]">
            Add To Basket
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
