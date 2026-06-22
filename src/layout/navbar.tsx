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
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <nav className={`navbar${mobileOpen ? ' navbar--open' : ''}`}>
      <div className="container-fluid">
        <a href="/" className="navbar-brand">Minicraft3ds</a>

        <button
          className="navbar-hamburger"
          aria-label={t('navbar.menu')}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

        <ul className="navbar-nav">
          <li><a className="nav-link" href="https://github.com/KaliLugu/Minicraft3DS" onClick={close}>{t('navbar.github')}</a></li>
          <li><a className="nav-link" href="https://github.com/KaliLugu/Minicraft3DS/releases" onClick={close}>{t('navbar.download')}</a></li>
          <li>
            <button className="nav-link" onClick={() => { onChangelog(); close(); }}>{t('navbar.changelog')}</button>
          </li>
          <li>
            <DropdownMenu
              title={t('navbar.more')}
              items={[
                { label: t('navbar.technicalDocs'), href: 'https://github.com/KaliLugu/Minicraft3DS/tree/master/docs' },
                { label: t('navbar.roadmap'), onClick: () => { onRoadmap(); close(); } },
                { label: t('navbar.contribute'), href: 'https://github.com/KaliLugu/Minicraft3DS/blob/main/CONTRIBUTING.md' },
                { label: t('navbar.mods'), onClick: () => { onMods(); close(); } },
              ]}
            />
          </li>
          <li>
            <DropdownMenu
              title={t('navbar.lang')}
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
