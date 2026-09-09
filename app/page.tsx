import { ArrowUpRight, Share2 } from 'lucide-react';

const links = [
  {
    label: '19 Studio',
    note: 'Website',
    href: 'https://19-studio.com/',
    mark: '19',
  },
  {
    label: '19 Studio',
    note: 'Instagram',
    href: 'https://www.instagram.com/19________studio/',
    mark: 'IG',
  },
  {
    label: 'Certified NPC',
    note: 'Website',
    href: 'https://certifiednpc.site/',
    mark: 'NPC',
  },
  {
    label: 'Certified NPC',
    note: 'Instagram',
    href: 'https://www.instagram.com/certifiednpc.site/',
    mark: 'IG',
  },
  {
    label: 'Pinterest',
    note: 'Visual archive',
    href: 'https://in.pinterest.com/19s1750/',
    mark: 'P',
  },
  {
    label: 'Are.na',
    note: 'Research & references',
    href: 'https://www.are.na/aditya-sangal',
    mark: 'A',
  },
];

export default function Home() {
  return (
    <main className="link-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="profile-shell" aria-labelledby="profile-title">
        <nav className="top-actions" aria-label="Page actions">
          <a
            className="round-action monogram"
            href="https://19-studio.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit 19 Studio"
          >
            19
          </a>
          <a
            className="share-action"
            href="mailto:?subject=Aditya%20Sangal%20%E2%80%94%20Links&body=https%3A%2F%2Fnpclabs-19.github.io%2Faditya-links%2F"
            aria-label="Share this profile by email"
          >
            <Share2 aria-hidden="true" size={17} strokeWidth={2.2} />
            <span>Share</span>
          </a>
        </nav>

        <header className="profile-header">
          <div className="portrait-frame">
            <img
              className="portrait"
              src="./profile.jpg"
              alt="Aditya Sangal taking a mirror photograph"
              width="375"
              height="375"
            />
          </div>
          <p className="eyebrow">Studio / Research / Archive</p>
          <h1 id="profile-title">Aditya Sangal</h1>
          <p className="profile-note">19 Studio × Certified NPC</p>
        </header>

        <div className="link-list" aria-label="Profile links">
          {links.map((link, index) => (
            <a
              className="link-card"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              key={link.href}
              style={{ '--index': index } as React.CSSProperties}
            >
              <span className={`link-mark mark-${index}`} aria-hidden="true">
                {link.mark}
              </span>
              <span className="link-copy">
                <span className="link-label">{link.label}</span>
                <span className="link-note">{link.note}</span>
              </span>
              <ArrowUpRight
                className="link-arrow"
                aria-hidden="true"
                size={19}
                strokeWidth={2}
              />
            </a>
          ))}
        </div>

        <footer>
          <span>ADITYA SANGAL</span>
          <span className="footer-glyph" aria-hidden="true">✦</span>
          <span>MMXXVI</span>
        </footer>
      </section>
    </main>
  );
}
