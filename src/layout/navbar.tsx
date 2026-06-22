import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface DropdownItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
}

function DropdownMenu({ title, items }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div className="nav-dropdown" ref={ref}>
      <button
        className={`nav-link nav-dropdown__toggle${open ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {title}
        <span className="nav-dropdown__caret" aria-hidden="true">▾</span>
      </button>
      {open && (
        <div className="nav-dropdown__menu">
          {items.map(item => item.onClick ? (
            <button
              key={item.label}
              className="dropdown-item"
              onClick={() => { item.onClick!(); setOpen(false); }}
            >
              {item.label}
            </button>
          ) : (
            <a
              key={item.href}
              href={item.href}
              className="dropdown-item"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

interface NavbarProps {
  onChangelog: () => void;
  onRoadmap: () => void;
  onMods: () => void;
}

function Navbar({ onChangelog, onRoadmap, onMods }: NavbarProps) {
  const { i18n } = useTranslation();
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">Minicraft3ds</a>

        <ul className="navbar-nav">
          <li><a className="nav-link" href="https://github.com/KaliLugu/Minicraft3DS">GitHub</a></li>
          <li><a className="nav-link" href="https://github.com/KaliLugu/Minicraft3DS/releases">Download</a></li>
          <li>
            <button className="nav-link" onClick={onChangelog}>Changelog</button>
          </li>
          <li>
            <DropdownMenu
              title="More"
              items={[
                { label: 'Documentation technique', href: 'https://github.com/KaliLugu/Minicraft3DS/tree/master/docs' },
                { label: 'Futur du projet', onClick: onRoadmap },
                { label: 'Contribuer', href: 'https://github.com/KaliLugu/Minicraft3DS/blob/main/CONTRIBUTING.md' },
                { label: 'Mods', onClick: onMods },
              ]}
            />
          </li>
          <li>
            <DropdownMenu
              title="Lang"
              items={[
                { label: 'Français', onClick: () => i18n.changeLanguage('fr') },
                { label: 'English', onClick: () => i18n.changeLanguage('en') },
              ]}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
