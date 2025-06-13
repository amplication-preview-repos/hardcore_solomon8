import { NewsMedia as TNewsMedia } from "../api/newsMedia/NewsMedia";

export const NEWSMEDIA_TITLE_FIELD = "typeField";

export const NewsMediaTitle = (record: TNewsMedia): string => {
  return record.typeField?.toString() || String(record.id);
};
