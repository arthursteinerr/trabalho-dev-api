//Arthur Steiner Morais Silva

import { users } from "../db"; 
import { posts } from "../types/postTypes";
import { User } from "../types/userTypes";

//Exercicio 1 
export const getUserByIdBusiness = (id: number) => {
  const user = users.find((user) => user.id === id);
  if (!user) {
    return { success: false, message: "Usuário não encontrado" };
  }

  return { success: true, data: user };
};

//Exercicio 2 
export const getUsersByAgeRangeBusiness = (minAge: number, maxAge: number) => {
  const filteredUsers = users.filter((user) => user.age >= minAge && user.age <= maxAge);
  if (filteredUsers.length === 0) {
    return { success: false, message: "Nenhum usuário encontrado dentro dessa faixa etária." };
  }

  return { success: true, data: filteredUsers };
};

//Exercicio 4
export const updateUserPutBusiness = (id: number, data: Omit<User, "id">) => {
  if (!data.name || !data.email || !data.role || data.age === undefined) {
    return { success: false, message: "Todos os campos são obrigatórios!" };
  }

  if (users.some((user) => user.email === data.email && user.id !== id)) {
    return { success: false, message: "Email já está em uso por outro usuário." };
  }

  const idx = users.findIndex((user) => user.id === id);
  if (idx === -1) {
    return { success: false, message: "Usuário não encontrado" };
  }

  users[idx] = { id, ...data };
  return { success: true, data: users[idx] };
};

//Exercicio 7
export const cleanupInactiveUsersBusiness = () => {
  const removedUsers = users.filter((user) =>
    user.role !== "admin" && !posts.some((post) => post.authorId === user.id)
  );

  removedUsers.forEach((removedUser) => {
    const idx = users.findIndex((user) => user.id === removedUser.id);
    if (idx !== -1) {
      users.splice(idx, 1);
    }
  });

  return removedUsers;
};
