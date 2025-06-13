import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NewsMediaWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
  url?: StringNullableFilter;
};
