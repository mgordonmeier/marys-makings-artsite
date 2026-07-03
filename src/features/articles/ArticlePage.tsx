import { getAdjacentPosts } from '../../lib/posts';
import type { Post } from '../../types';
import { ArticleBlockView } from './ArticleBlockView';

type ArticlePageProps = {
  post: Post;
};

export function ArticlePage({ post }: ArticlePageProps) {
  const { newerPost, olderPost } = getAdjacentPosts(post.slug);

  return (
    <article className="articlePage">
      <header className="articleHeader">
        <h1>{post.title}</h1>
        <time>{post.date}</time>
      </header>

      <div className="articleBody">
        {post.blocks.map((block, index) => (
          <ArticleBlockView block={block} key={`${block.type}-${index}`} />
        ))}
      </div>

      <footer className="articleFooter">
        <a href={post.source} target="_blank" rel="noreferrer">
          View original
        </a>
        <nav aria-label="Article navigation">
          {newerPost ? <a href={newerPost.slug}>Newer post</a> : <span />}
          {olderPost ? <a href={olderPost.slug}>Older post</a> : <span />}
        </nav>
      </footer>
    </article>
  );
}
