//Arthur Steiner Morais Silva

import { Request, Response } from "express";
import { posts } from "../types/postTypes";
import { users } from "../data/dataUsers";
import { createPostBusiness } from "../business/postBusiness";

//Exercício 3
export const createPost = (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;

  const result = createPostBusiness({ title, content, authorId });

  if (!result.success) {
    return res.status(400).json({ success: false, message: result.message });
  }

  if (result.success) {
    return res.status(201).json({ success: true, data: result.data });
  }
};

//Exercício 5
export const updatePostPatch = (req: Request, res: Response) => {
  const postId = parseInt(req.params.id ?? "", 10);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: "Post não encontrado" });
  }

  const { title, content, published, id, authorId, createdAt } = req.body;

  if (id || authorId || createdAt) {
    return res.status(400).json({ message: "Não é permitido alterar id, authorId ou createdAt" });
  }

  if (title) {
    if (title.length < 3) {
      return res.status(400).json({ message: "Título deve ter pelo menos 3 caracteres" });
    }
    post.title = title;
  }

  if (content) {
    if (content.length < 10) {
      return res.status(400).json({ message: "Conteúdo deve ter pelo menos 10 caracteres" });
    }
    post.content = content;
  }

  if (published !== undefined) {
    post.published = Boolean(published);
  }

  return res.status(200).json(post);
};

//Exercício 6
export const deletePost = (req: Request, res: Response) => {
  const postId = parseInt(req.params.id ?? "", 10);
  const userId = parseInt(req.header("User-Id") ?? "", 10);

  if (!userId) {
    return res.status(400).json({ message: "Header 'User-Id' é obrigatório" });
  }

  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const postIndex = posts.findIndex((p) => p.id === postId);
  if (postIndex === -1) {
    return res.status(404).json({ message: "Post não encontrado" });
  }

  const post = posts[postIndex];

  if (!post) {
    return res.status(404).json({ message: "Post não encontrado" });
  }

  if (post.authorId !== userId && user.role !== "admin") {
    return res.status(403).json({ message: "Você não tem permissão para deletar este post" });
  }

  posts.splice(postIndex, 1);
  return res.status(200).json({ message: "Post removido com sucesso" });
};
