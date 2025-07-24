import axios from "axios";
import type { Book } from "../types/Book";
import type { GoogleBookAPIItem } from "../types/GoogleBookAPIItem";

export async function searchBooks(query: string): Promise<Book[]> {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes",
      {
        params: {
          q: query,
          maxResults: 10,
        },
      }
    );

    const items: GoogleBookAPIItem[] = response.data.items || [];

    return items?.map((item: GoogleBookAPIItem) => ({
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      thumbnail: item.volumeInfo.imageLinks?.thumbnail,
      pageCount: item.volumeInfo.pageCount,
      categories: item.volumeInfo.categories,
      publishedDate: item.volumeInfo.publishedDate,
      description: item.volumeInfo.description,
    }));
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
}
