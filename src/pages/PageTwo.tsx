import { ArchiveFeature } from '../components/ArchiveFeature';
import { ArchivePostGrid } from '../components/ArchivePostGrid';
import { archives } from '../data/archives';

export function PageTwo() {
  return (
    <>
      <ArchivePostGrid ariaLabel={archives.pageTwo.ariaLabel} posts={archives.pageTwo.posts} />

      <ArchiveFeature
        pagination={{
          href: archives.pageTwo.previousPath,
          label: 'Previous Page',
          direction: 'previous',
        }}
      />
    </>
  );
}
