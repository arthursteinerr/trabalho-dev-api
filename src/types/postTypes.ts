//Arthur Steiner Morais Silva

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
  published: boolean;
}

export const posts: Post[] = [];

let nextPostId = 1;
export const getNextPostId = () => nextPostId++;
