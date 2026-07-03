import { Header } from './components/Header';
import { posts } from './data/posts';
import { routes } from './data/site';
import './index.css';
import { ArticlePage } from './pages/ArticlePage';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { PageTwo } from './pages/PageTwo';
import { normalizePath } from './utils/routing';

function App() {
  const path = normalizePath(window.location.pathname);
  const currentPost = posts.find((post) => post.slug === path);

  return (
    <div className="siteShell">
      <Header />

      <main className="pageContent">
        {currentPost ? (
          <ArticlePage post={currentPost} />
        ) : path === routes.home ? (
          <HomePage />
        ) : path === routes.pageTwo ? (
          <PageTwo />
        ) : path === routes.about ? (
          <AboutPage />
        ) : (
          <NotFound />
        )}
      </main>
    </div>
  );
}

export default App;
