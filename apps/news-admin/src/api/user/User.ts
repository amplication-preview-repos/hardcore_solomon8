import { News } from "../news/News";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  newsItems?: Array<News>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
