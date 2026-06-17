import { useState, useEffect, useRef } from 'react';

interface DropdownItem {
  label: string;
  href: string;
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
          {items.map(item => (
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

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">Minicraft3ds</a>

        <ul className="navbar-nav">
          <li><a className="nav-link" href="https://github.com/KaliLugu/Minicraft3DS">GitHub</a></li>
          <li><a className="nav-link" href="https://github.com/KaliLugu/Minicraft3DS/releases">Download</a></li>
          <li><a className="nav-link" href="/development">Development</a></li>
          <li><a className="nav-link" href="#changelog">Changelog</a></li>
          <li>
            <DropdownMenu
              title="More"
              items={[
                { label: 'Documentation technique', href: 'https://github.com/KaliLugu/Minicraft3DS/tree/master/docs' },
                { label: 'Futur du projet', href: '/roadmap' },
                { label: 'Contribuer', href: '/contributing' },
                { label: 'Mods', href: '/mods' },
              ]}
            />
          </li>
          <li>
            <DropdownMenu
              title="Lang"
              items={[
                { label: 'Français', href: '#fr' },
                { label: 'English', href: '#en' },
              ]}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
