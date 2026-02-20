'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import styles from '@/app/page.module.css';
import { getContent } from '@/lib/content';

export function Header() {
  const c = useMemo(() => getContent(), []);
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>
            <div className={styles.logo} aria-hidden />
            <div className={styles.brandName}>{c.brand.name}</div>
          </div>

          <nav className={styles.nav} aria-label="Навигация по странице">
            {c.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.right}>
            <a className={styles.phone} href={`tel:${c.contacts.phoneShort.replace(/\D/g, '')}`}>
              {c.contacts.phoneShort}
            </a>

            {c.contacts.social.map((s) => (
              <a key={s.label} className={styles.iconLink} href={s.href} target="_blank" rel="noreferrer">
                {s.label.slice(0, 2)}
              </a>
            ))}

            <button
              className={styles.menuBtn}
              type="button"
              aria-label={open ? c.ui.menuClose : c.ui.menuOpen}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              ☰
            </button>
          </div>
        </div>

        {open && (
          <nav className={styles.mobileNav} aria-label="Навигация по странице (моб.)">
            {c.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
