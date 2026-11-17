import { Container } from "@/components/Section/Container";
import { Section, SectionHeading } from "@/components/Section/Section";
import { experience } from "@/data/experience";
import styles from "./Experience.module.css";

export function Experience() {
  const { role, company, period, stack, summary, highlights, flow } = experience;

  return (
    <Section id="experience" tone="green">
      <Container node>
        <SectionHeading>Experience</SectionHeading>
        <div className={styles.card}>
          <div className={styles.top}>
            <div>
              <p className={styles.role}>{role}</p>
              <p className={styles.meta}>
                {company} · {period}
              </p>
            </div>
            <ul className={styles.stack} aria-label="Technology">
              {stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <p className={styles.summary}>{summary}</p>
          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <ol
          className={styles.flow}
          aria-label="Ticket lifecycle: a customer raises a ticket, it is auto-assigned to the least busy agent, L1 resolves, L2 verifies and the ticket closes with a rating. Unresolved tickets move up a level."
        >
          {flow.map((step, i) => (
            <li key={step} className={styles.step}>
              <span className={i === flow.length - 1 ? `${styles.pill} ${styles.done}` : styles.pill}>
                {step}
              </span>
              {i < flow.length - 1 && (
                <i className={styles.arrow} aria-hidden="true">
                  ›
                </i>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
