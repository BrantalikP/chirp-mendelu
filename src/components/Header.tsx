import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "~/ui/theme";

export const Header = () => {
  return (
    <View style={style.container}>
      <View style={style.logoRow}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/50/twitterx--v1.png",
          }}
          style={style.logo}
        />
        <Text style={style.title}>Chirp</Text>
      </View>
      <View style={style.buttonContainer}>
        <TouchableOpacity
          onPress={() => router.navigate({ pathname: "/create" })}
        >
          <Ionicons name="add" size={28} color={theme.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.background,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  buttonContainer: {
    padding: 8,
    backgroundColor: theme.card,
    borderRadius: 8,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 42,
    height: 42,
    marginRight: 8,
    tintColor: theme.primary,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.text,
  },
});
