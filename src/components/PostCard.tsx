import type { Post } from '../types';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="postCard">
      <h2>{post.title}</h2>
      <time>{post.date}</time>
      <p>{post.excerpt}</p>
      <a className="readMore" href={post.slug}>
        Read more
      </a>
    </article>
  );
}
