interface FooterLink {
  label: string;
  href: string;
  icon: string;
}

interface FooterProps {
  projectName?: string;
  description?: string;
  license?: string;
  version?: string;
  lastRelease?: string;
  projectLinks?: FooterLink[];
  communityLinks?: FooterLink[];
}

const defaultProjectLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/KaliLugu/Minicraft3DS", icon: "github" },
  { label: "Documentation", href: "/docs", icon: "book" },
  { label: "Changelog", href: "/changelog", icon: "history" },
];

const defaultCommunityLinks: FooterLink[] = [
  { label: "Issues", href: "https://github.com/KaliLugu/Minicraft3DS/issues", icon: "bug" },
  { label: "Contribuer", href: "https://github.com/KaliLugu/Minicraft3DS/blob/main/CONTRIBUTING.md", icon: "git-pull-request" },
  { label: "Discussions", href: "https://github.com/KaliLugu/Minicraft3DS/discussions", icon: "message-circle" },
];

const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  cube: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 16.196a2 2 0 0 1-1 1.732l-7 4.042a2 2 0 0 1-2 0l-7-4.042a2 2 0 0 1-1-1.732v-8.392a2 2 0 0 1 1-1.732l7-4.042a2 2 0 0 1 2 0l7 4.042a2 2 0 0 1 1 1.732z" />
      <path d="M12 12 3.5 7.5M12 12v9M12 12l8.5-4.5" />
    </svg>
  ),
  github: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  ),
  book: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 19a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6v13M12 6v13M21 6v13" />
    </svg>
  ),
  history: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 8v4l3 3" />
      <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
    </svg>
  ),
  bug: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 9v-1a3 3 0 0 1 6 0v1M8 9h8a6 6 0 0 1 1 3.5c0 1.5-.4 2.8-1 3.8-1.3 2-3.3 2.7-5 2.7s-3.7-.7-5-2.7c-.6-1-1-2.3-1-3.8A6 6 0 0 1 8 9M5 12H3M19 12h-2M5 8l-2-2M19 8l2-2M5 18l-2 2M19 18l2 2" />
    </svg>
  ),
  "git-pull-request": (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="8" r="2" />
      <path d="M6 8v8M11 6h3a2 2 0 0 1 2 2v1M18 10v8a2 2 0 0 1-2 2h-4" />
    </svg>
  ),
  "message-circle": (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1z" />
    </svg>
  ),
};

function FooterLinkItem({ link }: { link: FooterLink }) {
  const Icon = icons[link.icon];
  return (
    <a href={link.href} className="footer-link">
      {Icon && <Icon aria-hidden="true" />}
      {link.label}
    </a>
  );
}

export function Footer({
  projectName = "MonProjet",
  description = "Un outil open source pour faire X.",
  license = "PolyForm Noncommercial",
  version = "v2.4.1",
  lastRelease = "il y a 3 jours",
  projectLinks = defaultProjectLinks,
  communityLinks = defaultCommunityLinks,
}: FooterProps) {
  const CubeIcon = icons.cube;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand__name">
            <CubeIcon aria-hidden="true" />
            {projectName}
          </div>
          <span className="footer-brand__desc">{description}</span>
          <span className="footer-brand__license">{license}</span>
        </div>

        <div className="footer-links">
          <div className="footer-links__group">
            <p className="footer-links__heading">Projet</p>
            <div className="footer-links__list">
              {projectLinks.map((link) => (
                <FooterLinkItem key={link.href} link={link} />
              ))}
            </div>
          </div>

          <div className="footer-links__group">
            <p className="footer-links__heading">Communauté</p>
            <div className="footer-links__list">
              {communityLinks.map((link) => (
                <FooterLinkItem key={link.href} link={link} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Fait avec ♥ en Open source</span>
        {version && (
          <span>{version}{lastRelease && ` · ${lastRelease}`}</span>
        )}
      </div>
    </footer>
  );
}
