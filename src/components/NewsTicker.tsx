import { posts } from '../data/posts';

export function NewsTicker() {
  return (
    <section className="newsTicker" aria-label="Mossypost article ticker">
      <div className="tickerLabel">Mossypost</div>
      <div className="tickerViewport">
        <div className="tickerTrack">
          {[...posts, ...posts].map((post, index) => (
            <a className="tickerItem" href={post.slug} key={`${post.slug}-${index}`}>
              <span>{post.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
