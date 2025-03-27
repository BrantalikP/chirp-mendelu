import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "~/ui/theme";
import { formatDistanceToNow } from "date-fns";

export interface Post {
  id: string;
  content: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  createdAt: string;
  image?: string;
  stats: {
    comments: number;
    retweets: number;
    likes: number;
  };
}

interface IPostCard {
  post: Post;
}

export const PostCard = ({ post }: IPostCard) => {
  const formattedTime =
    formatDistanceToNow(new Date(post.createdAt)) === "less than a minute"
      ? "now"
      : formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });

  return (
    <Link
      href={{
        pathname: `/post/[id]`,
        params: {
          id: post.id,
        },
      }}
      asChild
    >
      <Pressable
        style={styles.card}
        onPress={() => {
          router.navigate({
            pathname: `/post/[id]`,
            params: {
              id: post.id,
            },
          });
        }}
      >
        <View style={styles.row}>
          <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <View style={styles.header}>
              <Text style={styles.name}>{post.user.name}</Text>
              <Text style={styles.handle}>
                {post.user.handle} · {formattedTime}
              </Text>
            </View>
            <Text style={styles.content}>{post.content}</Text>
            {post.image && (
              <Image source={{ uri: post.image }} style={styles.image} />
            )}
            <View style={styles.statsRow}>
              <Stat icon="chatbubble-outline" count={post.stats.comments} />
              <Stat icon="repeat-outline" count={post.stats.retweets} />
              <Stat icon="heart-outline" count={post.stats.likes} />
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const Stat = ({ icon, count }: { icon: any; count: number }) => (
  <View style={styles.stat}>
    <Ionicons name={icon} size={16} color={theme.secondaryText} />
    <Text style={styles.statText}>{count}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: theme.card,
    borderColor: theme.border,
    margin: 5,
    borderRadius: 12,
    marginHorizontal: 12,
  },
  row: {
    flexDirection: "row",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  name: {
    fontWeight: "bold",
    color: theme.text,
    fontSize: 15,
  },
  handle: {
    color: theme.secondaryText,
    marginLeft: 6,
    fontSize: 14,
  },
  content: {
    marginTop: 4,
    color: theme.text,
    fontSize: 15,
  },
  image: {
    marginTop: 8,
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  statsRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 20,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statText: {
    color: theme.secondaryText,
    fontSize: 13,
  },
});
