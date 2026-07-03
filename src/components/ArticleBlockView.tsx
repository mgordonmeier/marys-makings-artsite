import type { ArticleBlock } from '../types';

type ArticleBlockViewProps = {
  block: ArticleBlock;
};

export function ArticleBlockView({ block }: ArticleBlockViewProps) {
  if (block.type === 'paragraph') {
    return <p className={block.align === 'center' ? 'alignCenter' : undefined}>{block.text}</p>;
  }

  if (block.type === 'image') {
    return (
      <figure className={block.narrow ? 'articleImage isNarrow' : 'articleImage'}>
        <img src={block.src} alt={block.alt} />
        {block.caption ? <figcaption>{block.caption}</figcaption> : null}
      </figure>
    );
  }

  if (block.type === 'list') {
    return (
      <ol className="articleList">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }

  return (
    <section className={block.align === 'center' ? 'articleVerse alignCenter' : 'articleVerse'}>
      {block.title ? <strong>{block.title}</strong> : null}
      {block.lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </section>
  );
}
