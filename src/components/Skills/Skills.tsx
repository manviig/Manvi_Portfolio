import { Container } from "@/components/Section/Container";
import { Section, SectionHeading } from "@/components/Section/Section";
import { skills } from "@/data/experience";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <Section id="skills" tone="green">
      <Container node>
        <SectionHeading>Skills</SectionHeading>
        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3>{group.title}</h3>
              <ul className={group.highlight ? styles.now : undefined}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
