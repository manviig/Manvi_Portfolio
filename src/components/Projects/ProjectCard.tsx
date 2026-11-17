import { Button } from "@/components/Button/Button";
import type { Project } from "@/types";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { DeepDive } from "./DeepDive";
import { TileRow } from "./TileRow";
import styles from "./ProjectCard.module.css";

const toneClass = {
  nova: styles.nova,
  portal: styles.portal,
  wanderlust: styles.wanderlust,
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const hasVisual = Boolean(project.diagram);

  return (
    <article className={`${styles.card} ${toneClass[project.tone]}`}>
      <div className={styles.head}>
        <div>
          <p className={styles.kicker}>{project.kicker}</p>
          <h3>{project.name}</h3>
        </div>
        <span className={styles.badge}>{project.badge}</span>
      </div>

      <div className={hasVisual ? styles.top : styles.topSolo}>
        <div>
          <p className={styles.summary}>{project.summary}</p>
          <dl className={styles.meta}>
            <div>
              <dt>Problem</dt>
              <dd>{project.problem}</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>{project.role}</dd>
            </div>
          </dl>
          <ul className={styles.tags} aria-label="Technology">
            {project.stack.map((tech) => (
              <li key={tech} className={styles.tag}>
                {tech}
              </li>
            ))}
          </ul>
          {project.links.length > 0 && (
            <div className={styles.links}>
              {project.links.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  external
                  variant={link.primary ? "primary" : "outline"}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          )}
          {project.note && <p className={styles.fine}>{project.note}</p>}
        </div>
        {project.diagram && (
          <div>
            <ArchitectureDiagram diagram={project.diagram} />
            {project.caption && <p className={styles.fine}>{project.caption}</p>}
          </div>
        )}
      </div>

      <TileRow tiles={project.tiles} />
      <DeepDive groups={project.deepDive} />
    </article>
  );
}
