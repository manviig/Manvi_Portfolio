import { Button } from "@/components/Button/Button";
import { Container } from "@/components/Section/Container";
import { Section } from "@/components/Section/Section";
import { Say } from "@/components/Say/Say";
import { about, facts, guideLines } from "@/data/site";
import { AboutPortrait } from "./AboutPortrait";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="about" tone="cream" className={styles.about}>
      <Container node>
        <Say>{guideLines.about}</Say>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.big}>{about.heading}</h2>
            {about.paragraphs.map((text) => (
              <p key={text} className={styles.lede}>
                {text}
              </p>
            ))}
            <div className={styles.cta}>
              <Button href="#contact" variant="primary">
                Get in touch
              </Button>
              <Button href="#work">See my work</Button>
            </div>
          </div>
          <AboutPortrait />
        </div>
        <ul className={styles.facts}>
          {facts.map((fact) => (
            <li key={fact.label}>
              <span className={styles.k}>{fact.label}</span>
              <b>{fact.title}</b>
              <span className={styles.detail}>{fact.detail}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
