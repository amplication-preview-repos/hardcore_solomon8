import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NewsUpdateInput = {
  author?: string | null;
  content?: string | null;
  imageUrl?: string | null;
  isPublished?: boolean | null;
  publicationDate?: Date | null;
  summary?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
