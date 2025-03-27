import { Text, View } from "react-native";
import { useTheme } from "~/ui/theme";

export default function FeedScreen() {
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
        Feed
      </Text>
    </View>
  );
}
