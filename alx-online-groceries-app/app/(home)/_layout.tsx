// import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
// import { Tabs } from "expo-router";

// const HomeRootLayout = () => {
//   return (
//     <Tabs screenOptions={{
//         tabBarActiveTintColor: '#34967C',
//         headerShown: false
//     }} >
//       <Tabs.Screen name="index" options={{
//         title: 'Shop',
//         tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
//       }} />
//       <Tabs.Screen name="search" options={{
//         title: 'Explore',
//         headerShown: true,
//         tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
//       }} />
//       <Tabs.Screen name="saved" options={{
//         title: 'Cart',
//         headerShown: true,
//         tabBarIcon: ({ color }) => <EvilIcons name="heart" size={27} color={color} />
//       }} />
//         <Tabs.Screen name="inbox" options={{
//         title: 'Favourites',
//         headerShown: true,
//         tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />
//       }} />
//         <Tabs.Screen name="profile" options={{
//         title: 'Account',
//         headerShown: true,
//         tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color="black" />
//       }} />
//     </Tabs>
//   )
// }

// export default HomeRootLayout;

import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#34A853" }}>
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => <AntDesign name="home" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <Feather name="search" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: "Favourite",
          tabBarIcon: ({ color }) => <EvilIcons name="heart" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => <Ionicons name="cart-outline" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={20} color={color} />,
        }}
      />

   {/* 🚫 Hidden Screens (not in bottom tab) */}
      <Tabs.Screen name="product/[id]" options={{ href: null }} />
      <Tabs.Screen name="checkout" options={{ href: null }} />
      <Tabs.Screen name="filters" options={{ href: null }} />
      <Tabs.Screen name="search" options={{ href: null }} />
      <Tabs.Screen name="beverages" options={{ href: null }} />
      <Tabs.Screen name="order-accepted" options={{ href: null }} />
      <Tabs.Screen name="order-failed" options={{ href: null }} />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>




    // </Tabs>



  );
}

