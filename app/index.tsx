import { FlatList, StyleSheet, View } from "react-native";
import { PostCard } from "~/components/PostCard";
import { theme } from "~/ui/theme";
import { usePostStore } from "~/store/postSlice";

export default function FeedScreen() {
  const posts = usePostStore((state) => state.posts);
  return (
    <View style={style.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
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
