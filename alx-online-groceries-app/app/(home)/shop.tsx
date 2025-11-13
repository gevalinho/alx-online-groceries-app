



import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 🧩 Sample product data
const DATA = [
  { type: "header" },
  { type: "section", title: "Exclusive Offer" },
  {
    type: "product",
    id: "1",
    name: "Organic Bananas",
    info: "7pcs, Priceg",
    price: 4.99,
    image: require("../../assets/images/bananas.png"),
  },
  {
    type: "product",
    id: "2",
    name: "Red Apple",
    info: "1kg, Priceg",
    price: 4.99,
    image: require("../../assets/images/apple.png"),
  },
  // { type: "section", title: "Best Selling" },
  {
    type: "product",
    id: "3",
    name: "Bell Pepper Red",
    info: "1kg, Priceg",
    price: 4.99,
    image: require("../../assets/images/pepper.png"),
  },
  {
    type: "product",
    id: "4",
    name: "Ginger",
    info: "250gm, Priceg",
    price: 4.99,
    image: require("../../assets/images/ginger.png"),
  },
];

// 🥦 Groceries horizontal section data
const GROCERIES = [
  {
    id: "1",
    name: "Pulses",
    image: require("../../assets/images/pulses.png"),
    bgColor: "#FFF6ED",
  },
  {
    id: "2",
    name: "Rice",
    image: require("../../assets/images/rice.png"),
    bgColor: "#F2F9F3",
  },
  {
    id: "3",
    name: "Vegetables",
    image: require("../../assets/images/vegetables.png"),
    bgColor: "#EBF8FF",
  },
  {
    id: "4",
    name: "Fruits",
    image: require("../../assets/images/bananas.png"),
    bgColor: "#FFF1F1",
  },
];

// 🧱 Section Header
const SectionHeader = ({ title }: { title: string }) => (
  <View className="flex-row justify-between items-center px-5 mt-6 mb-3">
    <Text className="text-[18px] font-semibold text-[#1F232B]">{title}</Text>
    <TouchableOpacity>
      <Text className="text-[#34A853] font-medium text-[14px]">See all</Text>
    </TouchableOpacity>
  </View>
);

// 🛒 Product Card
const ProductCard = ({ item }: { item: any }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`/(home)/product/${item.id}`)}
      activeOpacity={0.9}
      className="bg-white w-[48%] p-3 rounded-2xl mb-4 border border-gray-100 shadow-sm"
    >
      <Image
        source={item.image}
        resizeMode="contain"
        className="w-full h-24 mb-3"
      />
      <Text className="text-[15px] font-semibold text-[#1F232B]">
        {item.name}
      </Text>
      <Text className="text-gray-400 text-sm">{item.info}</Text>

      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-[15px] font-semibold text-[#1F232B]">
          ${item.price.toFixed(2)}
        </Text>
        <TouchableOpacity className="w-7 h-7 rounded-full bg-[#34A853] items-center justify-center">
          <Ionicons name="add" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

// 🥬 Groceries Section Component
const GroceriesSection = () => (
  <View className="mt-6">
    <SectionHeader title="Groceries" />
    <FlatList
      data={GROCERIES}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            backgroundColor: item.bgColor,
            width: 130,
            height: 100,
            borderRadius: 16,
            marginRight: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
          activeOpacity={0.8}
        >
          <Image
            source={item.image}
            style={{ width: 45, height: 45, marginBottom: 8 }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "#1F232B",
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

// 🏬 Shop Screen
export default function ShopScreen() {
  const renderItem = ({ item }: { item: any }) => {
    if (item.type === "section") return <SectionHeader title={item.title} />;
    if (item.type === "product") return <ProductCard item={item} />;
    return null;
  };

  return (
    <View className="flex-1 bg-[#F9FAFB]">
      <Stack.Screen options={{ headerShown: false }} />

      {/* 🧭 Header */}
      <View className="flex-row justify-between items-center px-5 mt-10">
        <View className="flex-row items-center">
          <Ionicons name="location-outline" size={20} color="#1F232B" />
          <Text className="ml-2 text-[16px] font-semibold text-[#1F232B]">
            Dhaka, Banasree
          </Text>
        </View>
        <Image
          source={require("../../assets/images/carrot_logo.png")}
          className="w-5 h-5"
        />
      </View>

      {/* 🔍 Search Bar */}
      <View className="mx-5 mt-4 bg-white flex-row items-center rounded-xl p-3 border border-gray-100">
        <Ionicons name="search" size={18} color="#888" />
        <Text className="ml-2 text-gray-400 text-[15px]">Search Store</Text>
      </View>

      {/* 🥬 Banner */}
      <Image
        source={require("../../assets/images/banner.png")}
        resizeMode="cover"
        className="w-[90%] h-32 mt-5 self-center rounded-2xl"
      />

      {/* 🛍️ Scroll Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />

        {/* 🧺 Groceries Horizontal Section */}
        <GroceriesSection />

        {/* 🥩 More Grocery Items */}
        <FlatList
          data={[
            {
              id: "5",
              name: "Beef Bone",
              info: "1kg, Priceg",
              price: 4.99,
              image: require("../../assets/images/beef.png"),
            },
            {
              id: "6",
              name: "Broiler Chicken",
              info: "1kg, Priceg",
              price: 4.99,
              image: require("../../assets/images/chicken.png"),
            },
          ]}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      </ScrollView>
    </View>
  );
}
