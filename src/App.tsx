import { Layout } from './components/Layout';
import { routes } from './data/site';
import { ArchivePage } from './features/archive';
import { ArticlePage } from './features/articles';
import './index.css';
import { getArchivePage } from './lib/archives';
import { getPostByPath } from './lib/posts';
import { normalizePath } from './lib/routing';
import { AboutPage } from './pages/AboutPage';
import { NotFound } from './pages/NotFound';

function App() {
  const path = normalizePath(window.location.pathname);
  const currentPost = getPostByPath(path);
  const currentArchive = getArchivePage(path);

  return (
    <Layout>
      {currentArchive ? (
        <ArchivePage archive={currentArchive} />
      ) : currentPost ? (
        <ArticlePage post={currentPost} />
      ) : path === routes.about ? (
        <AboutPage />
      ) : (
        <NotFound />
      )}
    </Layout>
  );
}

export default App;
