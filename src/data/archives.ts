import { posts } from './posts';
import { routes } from './site';

export const POSTS_PER_PAGE = 10;

export const archives = {
  home: {
    ariaLabel: 'Recent posts',
    posts: posts.slice(0, POSTS_PER_PAGE),
    nextPath: routes.pageTwo,
  },
  pageTwo: {
    ariaLabel: 'Older posts',
    posts: posts.slice(POSTS_PER_PAGE),
    previousPath: routes.home,
  },
} as const;

