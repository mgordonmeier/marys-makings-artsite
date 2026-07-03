import { posts } from '../data/posts';
import { routes } from '../data/site';
import type { Post } from '../types';

export const POSTS_PER_PAGE = 10;

export type ArchivePageData = {
  ariaLabel: string;
  currentPage: number;
  totalPages: number;
  posts: Post[];
  previousPath?: string;
  nextPath?: string;
};

export function getArchivePath(page: number) {
  return page === 1 ? routes.mossypost : `${routes.mossypost}page/${page}/`;
}

export function getArchivePageNumber(path: string) {
  if (path === routes.mossypost) {
    return 1;
  }

  const match = path.match(/^\/mossypost\/page\/([1-9]\d*)\/$/);
  if (!match) {
    return undefined;
  }

  const page = Number(match[1]);
  return page === 1 ? undefined : page;
}

export function getArchivePage(path: string): ArchivePageData | undefined {
  const currentPage = getArchivePageNumber(path);
  if (!currentPage) {
    return undefined;
  }

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  if (currentPage > totalPages) {
    return undefined;
  }

  const start = (currentPage - 1) * POSTS_PER_PAGE;

  return {
    ariaLabel: currentPage === 1 ? 'Recent posts' : `Older posts page ${currentPage}`,
    currentPage,
    totalPages,
    posts: posts.slice(start, start + POSTS_PER_PAGE),
    previousPath: currentPage > 1 ? getArchivePath(currentPage - 1) : undefined,
    nextPath: currentPage < totalPages ? getArchivePath(currentPage + 1) : undefined,
  };
}
