export interface Book {
  id: string;
  title: string;
  authors?: string[];
  thumbnail?: string;
  pageCount?: number;
  categories?: string[];
  publishedDate?: string;
  description?: string;
}
