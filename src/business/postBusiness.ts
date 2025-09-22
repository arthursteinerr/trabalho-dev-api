//Arthur Steiner Morais Silva

import { Post } from "../types/postTypes";
import { posts } from "../types/postTypes";
import { getNextPostId } from "../types/postTypes";
import { users } from "../data/dataUsers";

// Função para validar o título e conteúdo
const validatePostData = (title: string, content: string, authorId: number) => {
  if (!title || title.length < 3) {
    return { success: false, message: "O título precisa ter pelo menos 3 caracteres." };
  }

  if (!content || content.length < 10) {
    return { success: false, message: "O conteúdo precisa ter pelo menos 10 caracteres." };
  }

  if (!users.some((u) => u.id === authorId)) {
    return { success: false, message: "Usuário não encontrado." };
  }

  return { success: true };
};

//Exercicio 3
export const createPostBusiness = (data: { title: string; content: string; authorId: number }): { success: boolean; message?: string; data?: Post } => {
  const { title, content, authorId } = data;
  
  const validation = validatePostData(title, content, authorId);
  if (!validation.success) return validation;

  const newPost: Post = {
    id: getNextPostId(),
    title,
    content,
    authorId,
    createdAt: new Date(),
    published: false,
  };

  posts.push(newPost);
  return { success: true, data: newPost };
};

//Exercicio 5
export const updatePostPatchBusiness = (postId: number, updates: Partial<Pick<Post, "title" | "content" | "published">>): { success: boolean; message?: string; data?: Post } => {
 const post = posts.find((p) => p.id === postId);
 
  if (!post) {
    return { success: false, message: "Post não encontrado!" };
  }

  if (updates.title) {
    if (updates.title.length < 3) {
      return { success: false, message: "Título deve ter pelo menos 3 caracteres!" };
    }
    post.title = updates.title;
  }

  if (updates.content) {
    if (updates.content.length < 10) {
      return { success: false, message: "Conteúdo deve ter pelo menos 10 caracteres!" };
    }
    post.content = updates.content;
  }

  if (updates.published !== undefined) {
    post.published = updates.published;
  }

  return { success: true, data: post };
};

//Exercicio 6
export const deletePostBusiness = (postId: number, userId: number): { success: boolean; message: string } => {
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return { success: false, message: "Usuário não encontrado" };
  }

  const post = posts.find((p) => p.id === postId);
  if (!post) {
    return { success: false, message: "Post não encontrado" };
  }

  if (post.authorId !== userId && user.role !== "admin") {
    return { success: false, message: "Você não tem permissão para deletar este post" };
  }

  posts.splice(posts.indexOf(post), 1);
  return { success: true, message: "Post removido com sucesso" };
};
