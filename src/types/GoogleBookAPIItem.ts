export type GoogleBookAPIItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
    pageCount: number;
    categories: string[];
    publishedDate: string;
    description: string;
  };
};
