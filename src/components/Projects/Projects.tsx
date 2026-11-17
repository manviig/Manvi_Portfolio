import { Container } from "@/components/Section/Container";
import { Section, SectionHeading } from "@/components/Section/Section";
import { Say } from "@/components/Say/Say";
import { guideLines } from "@/data/site";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <Section id="work" tone="cream">
      <Container node>
        <Say>{guideLines.work}</Say>
        <SectionHeading>Selected work</SectionHeading>
        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
