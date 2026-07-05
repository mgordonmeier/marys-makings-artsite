import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArtworkGallery } from '../components/ArtworkGallery';
import { Footer } from '../components/Footer';

const AGE_GATE_KEY = 'marys-makings-mature-access';

function MatureContentPreview({ isLocked = false }: { isLocked?: boolean }) {
  return (
    <div className="maturePreview" aria-hidden={isLocked}>
      <header>
        <p className="homeEyebrow">18+ area</p>
        <h1 id={isLocked ? undefined : 'mature-title'}>Mature Content</h1>
        <p>This section is ready for mature collections, shop notes, or private updates.</p>
      </header>

      <div className="maturePreviewGrid">
        <article>
          <span>Private releases</span>
          <strong>After-dark collection notes</strong>
        </article>
        <article>
          <span>Studio updates</span>
          <strong>Mature themes and limited pieces</strong>
        </article>
        <article>
          <span>Subscriber extras</span>
          <strong>Behind-the-scenes posts</strong>
        </article>
      </div>

      <ArtworkGallery
        isInteractive={!isLocked}
        label="Mature section artwork preview"
        limit={3}
      />
    </div>
  );
}

function getBirthdate(day: string, month: string, year: string) {
  if (!day || !month || !year) {
    return undefined;
  }

  const dayNumber = Number(day);
  const monthNumber = Number(month);
  const yearNumber = Number(year);

  if (
    !Number.isInteger(dayNumber) ||
    !Number.isInteger(monthNumber) ||
    !Number.isInteger(yearNumber) ||
    year.length !== 4 ||
    monthNumber < 1 ||
    monthNumber > 12 ||
    dayNumber < 1 ||
    dayNumber > 31
  ) {
    return undefined;
  }

  const birthday = new Date(yearNumber, monthNumber - 1, dayNumber);
  const isSameDate =
    birthday.getFullYear() === yearNumber &&
    birthday.getMonth() === monthNumber - 1 &&
    birthday.getDate() === dayNumber;

  return isSameDate ? birthday : undefined;
}

function isAtLeastEighteen(birthday: Date) {
  const today = new Date();

  if (birthday > today) {
    return false;
  }

  let age = today.getFullYear() - birthday.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

  if (!hasBirthdayPassed) {
    age -= 1;
  }

  return age >= 18;
}

export function MaturePage() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(
    () => window.sessionStorage.getItem(AGE_GATE_KEY) === 'verified',
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const birthday = getBirthdate(day, month, year);

    if (!birthday) {
      setError('Please enter a valid birthdate.');
      return;
    }

    if (!isAtLeastEighteen(birthday)) {
      setError('You must be at least 18 years old to enter this section.');
      return;
    }

    window.sessionStorage.setItem(AGE_GATE_KEY, 'verified');
    setError('');
    setIsVerified(true);
  };

  if (isVerified) {
    return (
      <>
        <section className="sectionPage maturePage" aria-labelledby="mature-title">
          <MatureContentPreview />
        </section>

        <Footer />
      </>
    );
  }

  return (
    <section className="sectionPage maturePage isLocked" aria-labelledby="age-gate-title">
      <MatureContentPreview isLocked />

      <div className="ageGatePanel">
        <header>
          <p className="homeEyebrow">Age verification required</p>
          <h1 id="age-gate-title">18+ Mature Content</h1>
          <p>Please enter your birthdate to continue.</p>
        </header>

        <form className="ageGateForm" onSubmit={handleSubmit}>
          <fieldset className="birthdateFields">
            <legend>Birthdate</legend>
            <label>
              <input
                aria-label="Birth day"
                autoComplete="bday-day"
                inputMode="numeric"
                maxLength={2}
                onChange={(event) => setDay(event.target.value.replace(/\D/g, '').slice(0, 2))}
                placeholder="DD"
                type="text"
                value={day}
              />
            </label>
            <label>
              <input
                aria-label="Birth month"
                autoComplete="bday-month"
                inputMode="numeric"
                maxLength={2}
                onChange={(event) => setMonth(event.target.value.replace(/\D/g, '').slice(0, 2))}
                placeholder="MM"
                type="text"
                value={month}
              />
            </label>
            <label>
              <input
                aria-label="Birth year"
                autoComplete="bday-year"
                inputMode="numeric"
                maxLength={4}
                onChange={(event) => setYear(event.target.value.replace(/\D/g, '').slice(0, 4))}
                placeholder="YYYY"
                type="text"
                value={year}
              />
            </label>
          </fieldset>
          {error ? (
            <p className="ageGateError" role="alert">
              {error}
            </p>
          ) : null}
          <button type="submit">Enter</button>
        </form>
      </div>
    </section>
  );
}
