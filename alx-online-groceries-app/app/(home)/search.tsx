import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const products = [
    {
      id: "1",
      name: "Egg Chicken Red",
      info: "4pcs, Price",
      price: 1.99,
      image: require("../../assets/images/egg_chicken_red.png"),
    },
    {
      id: "2",
      name: "Egg Chicken White",
      info: "180g, Price",
      price: 1.5,
      image: require("../../assets/images/egg_chicken_white.png"),
    },
    {
      id: "3",
      name: "Egg Pasta",
      info: "30gm, Price",
      price: 15.99,
      image: require("../../assets/images/egg_pasta.png"),
    },
    {
      id: "4",
      name: "Egg Noodles",
      info: "2L, Price",
      price: 15.99,
      image: require("../../assets/images/egg_noodles.png"),
    },
    {
      id: "5",
      name: "Mayonnais Eggless",
      info: "500ml, Price",
      price: 15.99,
      image: require("../../assets/images/mayonnaise_eggless.png"),
    },
    {
      id: "6",
      name: "Egg Noodles (Pack)",
      info: "2L, Price",
      price: 15.99,
      image: require("../../assets/images/egg_noodles_pack.png"),
    },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      className="bg-white rounded-2xl p-3 shadow-sm w-[47%] mb-4"
      activeOpacity={0.8}
      onPress={() => router.push({ pathname: "/(home)/product-detail", params: { id: item.id } })}
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
    <View className="flex-1 bg-white pt-8">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 mb-2">
        <Text className="text-xl font-semibold text-[#1F232B]">Search</Text>
        <Feather name="filter" size={20} color="#1F232B" />
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center mx-4 bg-gray-50 rounded-2xl px-3 py-3 mb-4 border border-gray-100">
        <Feather name="search" size={18} color="#A3A3A3" />
        <TextInput
          placeholder="Search Product"
          placeholderTextColor="#A3A3A3"
          className="flex-1 text-base ml-2"
          value={query}
          onChangeText={setQuery}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery("")}>
            <Feather name="x" size={18} color="#A3A3A3" />
          </TouchableOpacity>
        )}
      </View>

      {/* Products Grid */}
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
