import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { Header } from "~/components/Header";
import { theme } from "~/ui/theme";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <RootLayout />
    </SafeAreaView>
  );
}

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ header: () => <Header /> }} />
      <Stack.Screen name="create" options={{ presentation: "modal" }} />
      <Stack.Screen name="tweet/[id]" options={{ title: "Tweet" }} />
    </Stack>
  );
};
