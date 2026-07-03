import { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { routes } from './data/site';
import { ArchivePage } from './features/archive';
import { ArticlePage } from './features/articles';
import './index.css';
import { getArchivePage } from './lib/archives';
import { getPostByPath } from './lib/posts';
import { normalizePath } from './lib/routing';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { MaturePage } from './pages/MaturePage';
import { NotFound } from './pages/NotFound';
import { SectionPage } from './pages/SectionPage';

function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const currentPost = getPostByPath(path);
  const currentArchive = getArchivePage(path);

  useEffect(() => {
    const syncPath = () => {
      setPath(normalizePath(window.location.pathname));
    };

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest('a');
      if (!link || link.target || link.hasAttribute('download')) {
        return;
      }

      const nextUrl = new URL(link.href);
      if (nextUrl.origin !== window.location.origin) {
        return;
      }

      event.preventDefault();

      const nextPath = normalizePath(nextUrl.pathname);
      if (nextPath === normalizePath(window.location.pathname)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      window.history.pushState({}, '', `${nextPath}${nextUrl.search}${nextUrl.hash}`);
      setPath(nextPath);
      window.scrollTo({ top: 0 });
    };

    window.addEventListener('popstate', syncPath);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', syncPath);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Layout>
      {path === routes.home ? (
        <HomePage />
      ) : currentArchive ? (
        <ArchivePage archive={currentArchive} />
      ) : currentPost ? (
        <ArticlePage post={currentPost} />
      ) : path === routes.collections ? (
        <SectionPage
          title="Collections"
          intro="Seasonal sets, favorite finds, and collected works will live here."
        />
      ) : path === routes.shop ? (
        <SectionPage
          title="Shop"
          intro="New pieces and available makings will be gathered here soon."
        />
      ) : path === routes.events ? (
        <SectionPage
          title="Events"
          intro="Markets, pop-ups, and gathering dates will be listed here."
        />
      ) : path === routes.contact ? (
        <SectionPage
          title="Contact"
          intro="A simple way to reach Mary is coming together here."
        />
      ) : path === routes.mature ? (
        <MaturePage />
      ) : path === routes.about ? (
        <AboutPage />
      ) : (
        <NotFound />
      )}
    </Layout>
  );
}

export default App;
