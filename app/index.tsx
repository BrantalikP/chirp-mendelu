import { FlatList, StyleSheet, View } from "react-native";
// import { useTweetStore } from "../../store/tweetStore";
import { PostCard } from "~/components/PostCard";
import { posts } from "~/mocks/feed";
import { theme } from "~/ui/theme";

export default function FeedScreen() {
  return (
    <View style={style.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </View>
  );
}

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});
