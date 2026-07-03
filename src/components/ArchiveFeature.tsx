type ArchiveFeatureProps = {
  pagination: {
    href: string;
    label: string;
    direction: 'next' | 'previous';
  };
};

export function ArchiveFeature({ pagination }: ArchiveFeatureProps) {
  return (
    <>
      <section className="homeVerse" aria-label="The Comforts of Home">
        <strong>The Comforts of Home</strong>
        <span>A warm heart, a full plate</span>
        <span>No need to run for you're not late,</span>
        <span>potatoes boiling, tea to drink</span>
        <span>It's time to sit and smoke and think.</span>
        <span>-Maeve Mossburrow</span>
      </section>

      <section id="about" className="aboutSection" aria-labelledby="about-title">
        <h2 id="about-title">
          A hobbit in the North Star state: Adventures in Second Breakfasts and Snow Blowing
        </h2>

        <nav
          className={`archivePagination ${
            pagination.direction === 'previous' ? 'isPrevious' : 'isNext'
          }`}
          aria-label="Pagination"
        >
          <a className="nextPage" href={pagination.href}>
            {pagination.direction === 'previous' ? <span aria-hidden="true">&lt;- </span> : null}
            {pagination.label}
            {pagination.direction === 'next' ? <span aria-hidden="true"> -&gt;</span> : null}
          </a>
        </nav>

        <p>
          I know what you're thinking...<br />
          Did a halfling really move all the way to the MiddleWest? Well yes, one has. In fact it
          is myself who went on this adventure and have little intention of returning to the Shire.
          Minnesota, with its lakes and green summers, (and focus on food!) makes this the perfect
          place for a displaced halfling! After merely surviving the journey here I am quite eager
          to transform this home. I am sure by this point you are now wondering who I am. Allow me
          to introduce myself. My name is Maeve Mossburrow and I am currently trying to make this
          hole a home. I look forward to resting after my long journey though so remodeling will
          have to wait a little. Since I am new to this area I think it would be wise for me to get
          the lay of the land before making too many adjustments to the cottage. But I have
          envisioned some wonderful additions. More to come on that later...
        </p>

        <figure>
          <img
            src="https://themossypost.com/wp-content/uploads/2026/05/img_9790.jpeg"
            alt="A cottage table scene from The Mossy Post"
          />
        </figure>

        <p>
          Where I am from the news began to grow wearisome and repetitive. No longer mentions of tea
          parties disrupted by uninvited dwarves. Tales of dragons and rings, Bag End property sale
          scandals, you know, all the old tea. I needed new tea time tales and so I packed up my
          favorite things and went on my way. I am a wanderer, story teller, trinket collector and
          maker of many things. While I had heard of some hobbits coming out this way and never
          returning. Now that could be because they were harmed and unable to return, OR that they
          loved it so much they couldn't imagine going back to the silly little old Shire. I am
          sincerely hoping for their happily ever afters.
        </p>
      </section>
    </>
  );
}
