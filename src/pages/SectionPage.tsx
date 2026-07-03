type SectionPageProps = {
  title: string;
  intro: string;
};

export function SectionPage({ title, intro }: SectionPageProps) {
  return (
    <section className="sectionPage" aria-labelledby="section-title">
      <header>
        <h1 id="section-title">{title}</h1>
        <p>{intro}</p>
      </header>
    </section>
  );
}
