  import { Stack } from "expo-router";
import "../global.css";

  export default function RootLayout() {
    return (
      <Stack screenOptions={{
        
      }}>
        {/* <Stack.Screen name="/" /> */}
        {/* <Stack.Screen name="join" /> */}
        {/* <Stack.Screen name="/(home)/shop" /> */}
        <Stack.Screen name="(home)" options={{ headerShown: false }} />

        <Stack.Screen name="location" />
        <Stack.Screen name="otp" />
        <Stack.Screen name="number" />
        <Stack.Screen name="signin" />
        <Stack.Screen name="onboarding" />
      </Stack>
    );
  }

