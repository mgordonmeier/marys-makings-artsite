import { useState } from 'react';
import type { ReactNode } from 'react';
import { Header } from './Header';
import { NewsTicker } from './NewsTicker';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const [isWingdings, setIsWingdings] = useState(false);

  return (
    <div className={isWingdings ? 'siteShell isWingdings' : 'siteShell'}>
      <button
        aria-pressed={isWingdings}
        className="fontToggle"
        onClick={() => setIsWingdings((currentValue) => !currentValue)}
        type="button"
      >
        Wingdings
      </button>

      <NewsTicker />
      <Header />

      <main className="pageContent">{children}</main>
    </div>
  );
}
