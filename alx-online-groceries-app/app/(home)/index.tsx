import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const menus = [
    { icon: <Feather name="shopping-bag" size={26} color="#34967C" />, label: "Shop", route: "search" },
    { icon: <Ionicons name="search-outline" size={26} color="#34967C" />, label: "Explore", route: "search" },
    { icon: <MaterialCommunityIcons name="cart-outline" size={26} color="#34967C" />, label: "Cart", route: "saved" },
    { icon: <Ionicons name="heart-outline" size={26} color="#34967C" />, label: "Favourites", route: "inbox" },
    { icon: <Ionicons name="person-outline" size={26} color="#34967C" />, label: "Account", route: "profile" },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6 mt-6">
        <Text className="text-2xl font-semibold text-ink-900 mb-4">Welcome 👋</Text>
        <Text className="text-ink-600 mb-6">
          Quick menu — tap to explore different sections of your groceries app.
        </Text>

        <View className="flex-row flex-wrap justify-between">
          {menus.map((item, i) => (
            <TouchableOpacity
              key={i}
              className="w-[47%] bg-[#F8FAF9] p-5 mb-4 rounded-2xl items-center justify-center"
              onPress={() => router.push(item.route as any)}
            >
              <View className="mb-3">{item.icon}</View>
              <Text className="text-ink-800 font-medium">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
