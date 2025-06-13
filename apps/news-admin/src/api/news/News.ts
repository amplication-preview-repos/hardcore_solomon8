import { User } from "../user/User";

export type News = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  isPublished: boolean | null;
  publicationDate: Date | null;
  summary: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
