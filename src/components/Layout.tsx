import { useState } from 'react';
import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { NewsTicker } from './NewsTicker';

type LayoutProps = {
  children: ReactNode;
  showFooter?: boolean;
};

export function Layout({ children, showFooter = true }: LayoutProps) {
  const [isWingdings, setIsWingdings] = useState(false);

  return (
    <div className={isWingdings ? 'siteShell isWingdings' : 'siteShell'}>
      <button
        aria-pressed={isWingdings}
        className="fontToggle"
        onClick={() => setIsWingdings((currentValue) => !currentValue)}
        type="button"
      >
        <span className="fontToggleLabel">Wingdings</span>
        <span className="fontToggleSwitch" aria-hidden="true" />
        <span className="fontToggleState">{isWingdings ? 'On' : 'Off'}</span>
      </button>

      <NewsTicker />
      <Header />

      <main className="pageContent">{children}</main>

      {showFooter ? <Footer /> : null}
    </div>
  );
}
