import { StyleSheet, View } from "react-native";
import { Redirect, useLocalSearchParams } from "expo-router";
import { PostCard } from "~/components/PostCard"; // Adjust the import path based on your file structure
import { posts } from "~/mocks/feed";
import { theme } from "~/ui/theme";

export default function PostDetail() {
  const { id } = useLocalSearchParams();

  const post = posts.find((post) => post.id === id);

  if (!post?.id) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <PostCard post={post} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});
