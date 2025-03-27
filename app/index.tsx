import { Text, View } from "react-native";
import { useTheme } from "~/ui/theme";

export default function Index() {
  const { background, text } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: background,
      }}
    >
      <Text
        style={{
          color: text,
        }}
      >
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
