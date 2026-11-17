import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Section/Container";
import { Section } from "@/components/Section/Section";
import { Header } from "@/components/Header/Header";
import { handles, resume, site } from "@/data/site";
import { HeroPortrait } from "./HeroPortrait";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Section
      id="top"
      tone="green"
      label="Introduction"
      padded={false}
      className={styles.hero}
    >
      <Container className={styles.inner}>
        <Header />
        <div className={styles.main}>
          <HeroPortrait />
          <div className={styles.titlebox}>
            <p className={styles.kicker}>{site.kicker}</p>
            <h1 className={styles.mega}>
              <span className="sr-only">{site.name}: </span>
              {site.headline}
            </h1>
            <p className={styles.lead}>{site.lead}</p>
            <div className={styles.cta}>
              <Button href="#work" variant="primary">
                View selected work
              </Button>
              <Button href={resume.href} download={resume.fileName}>
                Resume
              </Button>
              <Button href="#contact">Contact</Button>
            </div>
            <p className={styles.avail}>
              <i aria-hidden="true" />
              {site.availability}
            </p>
            <ul className={styles.handles} aria-label="Find me online">
              {handles.map((h) => (
                <li key={h.short}>
                  <b>{h.short}</b>
                  <a href={h.href} target="_blank" rel="noopener noreferrer">
                    {h.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}