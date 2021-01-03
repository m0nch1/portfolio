export type BlogItem = {
  id: string;
  title: string;
  publishedAt: Date;
  tag?: {
    name: string;
  };
  body: string;
};
