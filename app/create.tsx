import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { theme } from "~/ui/theme";
import { usePostStore } from "~/store/postSlice";

export default function CreateScreen() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const addPost = usePostStore((state) => state.addPost);
  const [image, setImage] = useState<string | undefined>(undefined);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    const newPost = {
      id: Date.now().toString(),
      user: {
        name: "Petr Brantalík",
        handle: "@brantalikP",
        avatar:
          "https://media.licdn.com/dms/image/v2/D4E22AQE8K-euCD4QYA/feedshare-shrink_1280/feedshare-shrink_1280/0/1732801976771?e=1749081600&v=beta&t=38yMl4DLBzrclycEDRrAGn5rCl_I5mvl3m3yk_OV7xc",
      },
      content,
      createdAt: new Date().toISOString(),
      image,
      stats: {
        comments: 0,
        retweets: 0,
        likes: 0,
      },
    };

    addPost(newPost);

    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={router.back}>
          <Ionicons name="close" size={28} color={theme.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Create Post</Text>
      </View>

      <TextInput
        placeholder="What's happening?"
        placeholderTextColor={theme.secondaryText}
        multiline
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />

      {image && <Image source={{ uri: image }} style={styles.previewImage} />}

      <View style={styles.actions}>
        <TouchableOpacity onPress={pickImage}>
          <Ionicons name="camera-outline" size={26} color={theme.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.tweetButton}>
          <Text style={styles.tweetText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: theme.text,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
  input: {
    color: theme.text,
    fontSize: 16,
    marginBottom: 12,
    minHeight: 100,
  },
  previewImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tweetButton: {
    backgroundColor: theme.primary,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tweetText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
