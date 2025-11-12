import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

type Option = { id: string; label: string };

const CATEGORY_OPTIONS: Option[] = [
  { id: "eggs", label: "Eggs" },
  { id: "noodles_pasta", label: "Noodles & Pasta" },
  { id: "chips_crisps", label: "Chips & Crisps" },
  { id: "fast_food", label: "Fast Food" },
];

const BRAND_OPTIONS: Option[] = [
  { id: "individual_collection", label: "Individual Collection" },
  { id: "cocola", label: "Cocola" },
  { id: "ifad", label: "Ifad" },
  { id: "kazi_farmas", label: "Kazi Farmas" },
];

function CheckRow({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onToggle}
      activeOpacity={0.7}
      className="flex-row items-center py-3"
    >
      <View
        className={`w-5 h-5 rounded border mr-3 items-center justify-center ${
          checked ? "border-[#34A853] bg-[#34A853]" : "border-gray-300 bg-white"
        }`}
      >
        {checked ? <Ionicons name="checkmark" size={14} color="white" /> : null}
      </View>
      <Text className="text-[#1F232B]">{label}</Text>
    </TouchableOpacity>
  );
}

export default function Filters() {
  const router = useRouter();

  // defaults to Eggs + Cocola like the mock
  const [categories, setCategories] = useState<string[]>(["eggs"]);
  const [brands, setBrands] = useState<string[]>(["cocola"]);

  const toggle = (list: string[], setList: (v: string[]) => void, id: string) => {
    setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  };

  const catsParam = useMemo(
    () =>
      categories
        .map((id) => CATEGORY_OPTIONS.find((c) => c.id === id)?.label)
        .filter(Boolean)
        .join(","),
    [categories]
  );
  const brandsParam = useMemo(
    () =>
      brands
        .map((id) => BRAND_OPTIONS.find((b) => b.id === id)?.label)
        .filter(Boolean)
        .join(","),
    [brands]
  );

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-6 pb-3">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={22} color="#1F232B" />
        </TouchableOpacity>
        <Text className="text-base font-semibold text-[#1F232B]">Filters</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Card-like body */}
        <View className="bg-[#F7F8FA] rounded-2xl px-4 py-6">
          <Text className="text-[#1F232B] font-semibold mb-2">Categories</Text>
          {CATEGORY_OPTIONS.map((c) => (
            <CheckRow
              key={c.id}
              label={c.label}
              checked={categories.includes(c.id)}
              onToggle={() => toggle(categories, setCategories, c.id)}
            />
          ))}

          <Text className="text-[#1F232B] font-semibold mt-4 mb-2">Brand</Text>
          {BRAND_OPTIONS.map((b) => (
            <CheckRow
              key={b.id}
              label={b.label}
              checked={brands.includes(b.id)}
              onToggle={() => toggle(brands, setBrands, b.id)}
            />
          ))}
        </View>

        {/* Apply */}
        <TouchableOpacity
          className="bg-[#34A853] py-4 rounded-2xl mt-6 items-center"
          onPress={() => {
            // Navigate back to Search with params (cats, brands)
            router.replace({
              pathname: "/(home)/search",
              params: { cats: catsParam, brands: brandsParam },
            });
          }}
        >
          <Text className="text-white font-semibold">Apply Filter</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
