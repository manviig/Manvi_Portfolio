import { Container } from "@/components/Section/Container";
import { Section, SectionHeading } from "@/components/Section/Section";
import { credentials } from "@/data/experience";
import styles from "./Credentials.module.css";

export function Credentials() {
  return (
    <Section id="credentials" tone="cream">
      <Container node>
        <SectionHeading>Training and credentials</SectionHeading>
        <div className={styles.grid}>
          {credentials.map((item) => (
            <div key={item.title} className={styles.card}>
              <span className={styles.label}>{item.label}</span>
              <b>{item.title}</b>
              <span className={styles.text}>{item.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
