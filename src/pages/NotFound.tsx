export function NotFound() {
  return (
    <section className="articlePage">
      <header className="articleHeader">
        <h1>Page Not Found</h1>
      </header>
      <div className="articleBody">
        <p>The page you are looking for does not exist in this local build yet.</p>
        <p>
          <a href="/">Return home</a>
        </p>
      </div>
    </section>
  );
}
