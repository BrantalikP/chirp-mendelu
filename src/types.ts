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
