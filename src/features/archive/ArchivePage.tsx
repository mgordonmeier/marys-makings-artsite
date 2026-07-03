import type { ArchivePageData } from '../../lib/archives';
import { ArchiveFeature } from './ArchiveFeature';
import { ArchivePostGrid } from './ArchivePostGrid';

type ArchivePageProps = {
  archive: ArchivePageData;
};

export function ArchivePage({ archive }: ArchivePageProps) {
  return (
    <>
      <ArchivePostGrid ariaLabel={archive.ariaLabel} posts={archive.posts} />

      <ArchiveFeature previousPath={archive.previousPath} nextPath={archive.nextPath} />
    </>
  );
}
