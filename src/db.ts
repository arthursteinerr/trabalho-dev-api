//Arthur Steiner Morais Silva

import { User } from "./types/userTypes";
import { Post } from "./types/postTypes";

export const users: User[] = [
  { id: 1, name: "Arthur", email: "arthur@gmail.com", role: "admin", age: 20 },
  { id: 2, name: "Thiago", email: "thiago@gmail.com", role: "user", age: 35 },
  { id: 3, name: "Thais", email: "thais@gmail.com", role: "user", age: 19 },
  { id: 4, name: "Flavio", email: "flavio@gmail.com", role: "user", age: 34 },
];

export const posts: Post[] = [
  { id: 1, title: "Post 1", content: "Conteúdo do post 1", authorId: 1, createdAt: new Date(), published: false },
  { id: 2, title: "Post 2", content: "Conteúdo do post 2", authorId: 2, createdAt: new Date(), published: false },
];