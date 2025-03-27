import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="create" options={{ presentation: "modal" }} />
      <Stack.Screen name="tweet/[id]" options={{ title: "Tweet" }} />
    </Stack>
  );
}
