import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";

type Row = { id: string; label: string; icon: keyof typeof Ionicons.glyphMap; href?: string };

const ROWS: Row[] = [
  { id: "orders", label: "Orders", icon: "receipt-outline", href: "/orders" },
  { id: "details", label: "My Details", icon: "person-outline", href: "/profile/details" },
  { id: "address", label: "Delivery Address", icon: "location-outline", href: "/profile/address" },
  { id: "payment", label: "Payment Methods", icon: "card-outline", href: "/profile/payments" },
  { id: "promo", label: "Promo Cord", icon: "pricetag-outline", href: "/profile/promos" },
  { id: "notifications", label: "Notifications", icon: "notifications-outline", href: "/profile/notifications" },
  { id: "help", label: "Help", icon: "help-circle-outline", href: "/help" },
  { id: "about", label: "About", icon: "information-circle-outline", href: "/about" },
];

export default function AccountScreen() {
  const router = useRouter();

  const renderRow = ({ item }: { item: Row }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => item.href && router.push(item.href as any)}
      className="flex-row items-center justify-between px-4 py-4 bg-white"
    >
      <View className="flex-row items-center gap-3">
        <Ionicons name={item.icon} size={20} color="#1F232B" />
        <Text className="text-[15px] text-[#1F232B]">{item.label}</Text>
      </View>
      <Feather name="chevron-right" size={18} color="#98A2B3" />
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-[#F6F7F9]">
      <Stack.Screen options={{ title: "Account" }} />

      {/* Header / profile card */}
      <View className="bg-white px-4 py-5 flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <Image
            source={{ uri: "https://i.pravatar.cc/100?img=12" }}
            className="w-12 h-12 rounded-full"
          />
          <View>
            <View className="flex-row items-center gap-2">
              <Text className="text-[16px] font-semibold text-[#1F232B]">
                Afsar Hossen
              </Text>
              <Feather name="edit-3" size={14} color="#34A853" />
            </View>
            <Text className="text-[12px] text-[#8A8E98]">imshuvo97@gmail.com</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-4">
          <Ionicons name="notifications-outline" size={20} color="#1F232B" />
          <Ionicons name="settings-outline" size={20} color="#1F232B" />
        </View>
      </View>

      {/* List */}
      <View className="mt-3">
        <FlatList
          data={ROWS}
          keyExtractor={(i) => i.id}
          renderItem={renderRow}
          ItemSeparatorComponent={() => <View className="h-[1px] bg-[#EEF0F3]" />}
          ListFooterComponent={<View className="h-3 bg-[#F6F7F9]" />}
        />
      </View>

      {/* Logout */}
      <View className="px-4 pb-6 pt-2 bg-[#F6F7F9]">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.replace("/signin")}
          className="flex-row items-center justify-center gap-2 bg-[#E6F4EC] rounded-2xl py-4"
        >
          <Ionicons name="exit-outline" size={18} color="#2FA86A" />
          <Text className="text-[#2FA86A] font-semibold">Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
