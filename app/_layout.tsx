import { Stack } from "expo-router";
import { Header } from "~/components/Header";
import { theme } from "~/ui/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: theme.background }}
    >
      <RootLayout />
    </SafeAreaView>
  );
}

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ header: () => <Header /> }} />
      <Stack.Screen
        name="create"
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="post/[id]"
        options={{
          title: "",
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: theme.text,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};
