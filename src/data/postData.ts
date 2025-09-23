//Arthur Steiner Morais Silva

import { posts } from "../db";
import { Post } from "../types/postTypes";

export const getNextPostId = (): number => {
  return posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
};

export const addPost = (newPost: Post): void => {
  posts.push(newPost);
};

export const findPostById = (id: number): Post | undefined => {
  return posts.find(p => p.id === id);
};

export const removePost = (postId: number): void => {
  const index = posts.findIndex(p => p.id === postId);
  if (index !== -1) posts.splice(index, 1);
};

export const updatePost = (postId: number, updatedPost: Partial<Post>): Post | undefined => {
  const post = findPostById(postId);
  if (!post) return undefined;

  Object.assign(post, updatedPost);
  return post;
};
