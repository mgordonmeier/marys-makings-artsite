import './index.css';

function App() {
  return (
    <main className="site">
      <section className="hero">
        <p className="eyebrow">Artist Portfolio</p>

        <h1>Mary’s Makings</h1>

        <p className="intro">
          Original artwork, handmade pieces, commissions, and creative projects.
        </p>

        <div className="heroLinks">
          <a href="#gallery">View Work</a>
          <a href="#contact">Contact</a>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>
          Add Mary’s artist bio here. This can describe what she makes, what
          inspires her, and how people can support or commission her work.
        </p>
      </section>

      <section id="gallery" className="section">
        <h2>Selected Work</h2>

        <div className="galleryGrid">
          <article className="artCard">
            <div className="artPlaceholder">Artwork 1</div>
            <h3>Piece Title</h3>
            <p>Medium / year / short description.</p>
          </article>

          <article className="artCard">
            <div className="artPlaceholder">Artwork 2</div>
            <h3>Piece Title</h3>
            <p>Medium / year / short description.</p>
          </article>

          <article className="artCard">
            <div className="artPlaceholder">Artwork 3</div>
            <h3>Piece Title</h3>
            <p>Medium / year / short description.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          For commissions, collaborations, or questions, reach out through
          Mary’s preferred contact method.
        </p>

        <div className="socialLinks">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:artist@example.com">Email</a>
        </div>
      </section>
    </main>
  );
}

export default App;