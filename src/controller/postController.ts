//Arthur Steiner Morais Silva

import { Request, Response } from "express";
import { createPostBusiness } from "../business/postBusiness";
import { updatePostPatchBusiness } from "../business/postBusiness";
import { deletePostBusiness } from "../business/postBusiness";

//Exercício 3
export const createPost = (req: Request, res: Response) => {
  const authorId = parseInt(req.header("User-Id") ?? "", 10);
  const { title, content } = req.body;

  if (!authorId || isNaN(authorId)) {
    return res.status(400).json({ message: "Adicione um valor no Header 'User-Id', é obrigatório e ele deve ser um número válido." });
  }

  const result = createPostBusiness({ title, content, authorId });

  if (!result.success) {
    return res.status(400).json({ success: false, message: result.message });
  }

  return res.status(201).json({ success: true, data: result.data });
};

//Exercício 5
export const updatePostPatch = (req: Request, res: Response) => {
  const postId = parseInt(req.params.id ?? "", 10);
  if (isNaN(postId)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  const { title, content, published, id, authorId, createdAt } = req.body;

  if (id || authorId || createdAt) {
    return res.status(400).json({ message: "Não é permitido alterar id." });
  }

  const result = updatePostPatchBusiness(postId, { title, content, published });

  if (!result.success) {
    return res.status(400).json({ success: false, message: result.message });
  }

  return res.status(200).json({ success: true, data: result.data });
};

//Exercício 6
export const deletePost = (req: Request, res: Response) => {
  const postId = parseInt(req.params.id ?? "", 10);
  const userId = parseInt(req.header("User-Id") ?? "", 10);

  if (!userId || isNaN(userId)) {
    return res.status(400).json({ message: "Adicione um valor no Header 'User-Id', é obrigatório e ele deve ser um número válido." });
  }

  const result = deletePostBusiness(postId, userId);

  if (!result.success) {
    return res.status(403).json({ message: result.message });
  }

  return res.status(200).json({ message: result.message });
};
