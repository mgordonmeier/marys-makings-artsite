import type { Post } from '../../types';
import { PostCard } from './PostCard';

type ArchivePostGridProps = {
  ariaLabel: string;
  posts: readonly Post[];
};

export function ArchivePostGrid({ ariaLabel, posts }: ArchivePostGridProps) {
  return (
    <section className="postGrid" aria-label={ariaLabel}>
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </section>
  );
}
