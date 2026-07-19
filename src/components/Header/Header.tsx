"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

// шапка сайту: лого + навігація Home/Catalog, активний пункт виділяємо жирним
export default function Header() {
  const pathname = usePathname();
  const isCatalog = pathname.startsWith("/catalog");

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Travel<span className={styles.logoAccent}>Trucks</span>
        </Link>
        <nav className={styles.nav}>
          <Link
            href="/"
            className={isCatalog ? styles.navLink : styles.navLinkActive}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={isCatalog ? styles.navLinkActive : styles.navLink}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
