import { create } from "zustand";
import { posts } from "~/mocks/feed";

export interface Post {
  id: string;
  content: string;
  createdAt: string;
  image?: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  stats: {
    comments: number;
    retweets: number;
    likes: number;
  };
}

interface PostStore {
  posts: Post[];
  addPost: (post: Post) => void;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: posts,
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
}));
