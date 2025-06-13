import { NewsMediaWhereInput } from "./NewsMediaWhereInput";
import { NewsMediaOrderByInput } from "./NewsMediaOrderByInput";

export type NewsMediaFindManyArgs = {
  where?: NewsMediaWhereInput;
  orderBy?: Array<NewsMediaOrderByInput>;
  skip?: number;
  take?: number;
};
