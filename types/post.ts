import { Comment } from "./comment";
import { User } from "./user";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostWithUser extends Post {
  user: User;
}

export interface PostWithComments extends PostWithUser {
  comments: Comment[] | null;
}
