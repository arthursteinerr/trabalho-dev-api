// Arthur Steiner Morais Silva

import { users } from "../db";
import { User } from "../types/userTypes";

export const getUserById = (id: number): User | undefined => {
  return users.find(user => user.id === id);
};

export const getUsersByAgeRange = (minAge: number, maxAge: number): User[] => {
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
};

export const updateUser = (id: number, data: Omit<User, "id">): User | undefined => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return undefined;

  users[index] = { id, ...data };
  return users[index];
};

export const removeUser = (id: number): boolean => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return false;

  users.splice(index, 1);
  return true;
};
