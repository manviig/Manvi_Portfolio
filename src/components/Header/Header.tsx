import { Star } from "@/components/Star/Star";
import { nav, site } from "@/data/site";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.top}>
      <div className={styles.brand}>
        <Star className={styles.star} />
        {site.name}
      </div>
      <nav className={styles.nav} aria-label="Sections">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className={styles.link}>
            {item.label}
          </a>
        ))}
        <a href="#contact" className={styles.cta}>
          Get in touch
        </a>
      </nav>
    </header>
  );
}