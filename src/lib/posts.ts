import { posts } from '../data/posts';

export function getPostByPath(path: string) {
  return posts.find((post) => post.slug === path);
}

export function getAdjacentPosts(path: string) {
  const currentIndex = posts.findIndex((post) => post.slug === path);

  return {
    newerPost: currentIndex > 0 ? posts[currentIndex - 1] : undefined,
    olderPost: currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined,
  };
}

