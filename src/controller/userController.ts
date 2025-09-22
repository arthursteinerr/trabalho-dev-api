//Arthur Steiner Morais Silva

import { Request, Response } from "express";
import { users } from "../data/dataUsers"; 
import { posts } from "../types/postTypes";
import { getUserByIdBusiness } from "../business/userBusiness";
import { getUsersByAgeRangeBusiness } from "../business/userBusiness";
import { updateUserPutBusiness } from "../business/userBusiness";

//Exercício 1
export const getUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id ?? "", 10);

  if (isNaN(userId)) {
    return res.status(400).json({ message: "ID inválido" });
  }

  const user = getUserByIdBusiness(userId);

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  return res.status(200).json(user);
};

//Exercício 2
export const getUsersByAgeRange = (req: Request, res: Response) => {
  const { min, max } = req.query;

  const minAge = parseInt(min as string, 10);
  const maxAge = parseInt(max as string, 10);

  if (isNaN(minAge) || isNaN(maxAge)) {
    return res.status(400).json({
      message: "Parâmetros inválidos. Use números para min e max.",
    });
  }

  const filteredUsers = getUsersByAgeRangeBusiness(minAge, maxAge);

  return res.status(200).json(filteredUsers);
};

//Exercício 4
export const updateUserPut = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id ?? "", 10);
  const { name, email, role, age } = req.body;

  const result = updateUserPutBusiness(userId, { name, email, role, age });

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.message,
    });
  }

  if (result.success) {
    return res.status(200).json({
      success: true,
      data: result.data,
    });
  }
};

//Exercício 7
export const cleanupInactiveUsers = (req: Request, res: Response) => {
  const { confirm } = req.query;

  if (confirm !== "true") {
    return res.status(400).json({ message: "Parâmetro 'confirm=true' é obrigatório" });
  }

  const removedUsers = users.filter((u) =>
    u.role !== "admin" && !posts.some((p) => p.authorId === u.id)
  );

  removedUsers.forEach((removedUser) => {
    const idx = users.findIndex((u) => u.id === removedUser.id);
    if (idx !== -1) {
      users.splice(idx, 1);
    }
  });

  return res.status(200).json(removedUsers);
};
