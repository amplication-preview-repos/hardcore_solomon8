import { SortOrder } from "../../util/SortOrder";

export type NewsOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  isPublished?: SortOrder;
  publicationDate?: SortOrder;
  summary?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
