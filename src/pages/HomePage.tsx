import { ArchiveFeature } from '../components/ArchiveFeature';
import { ArchivePostGrid } from '../components/ArchivePostGrid';
import { archives } from '../data/archives';
import { routes } from '../data/site';

export function HomePage() {
  return (
    <>
      <ArchivePostGrid ariaLabel={archives.home.ariaLabel} posts={archives.home.posts} />

      <ArchiveFeature pagination={{ href: routes.pageTwo, label: 'Next Page', direction: 'next' }} />
    </>
  );
}
