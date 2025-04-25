import { create } from "zustand";
import { posts } from "~/mocks/feed";
import { Post } from "~/types";

interface PostStore {
  posts: Post[];
  addPost: (post: Post) => void;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: posts,
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
}));
