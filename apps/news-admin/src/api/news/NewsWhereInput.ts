import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NewsWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  isPublished?: BooleanNullableFilter;
  publicationDate?: DateTimeNullableFilter;
  summary?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
