import { ArticleBlockView } from '../components/ArticleBlockView';
import { posts } from '../data/posts';
import type { Post } from '../types';

type ArticlePageProps = {
  post: Post;
};

export function ArticlePage({ post }: ArticlePageProps) {
  const currentIndex = posts.findIndex((candidate) => candidate.slug === post.slug);
  const newerPost = currentIndex > 0 ? posts[currentIndex - 1] : undefined;
  const olderPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined;

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
