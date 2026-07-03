export type ArticleBlock =
  | { type: 'paragraph'; text: string; align?: 'left' | 'center' }
  | { type: 'image'; src: string; alt: string; caption?: string; narrow?: boolean }
  | { type: 'verse'; title?: string; lines: string[]; align?: 'left' | 'center' }
  | { type: 'list'; items: string[] };

export type Post = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  source: string;
  blocks: ArticleBlock[];
};
