import type { Diagram } from "@/types";
import styles from "./ArchitectureDiagram.module.css";

/** Draws a small boxes-and-arrows diagram from plain data, so no hand-written SVG per project. */
export function ArchitectureDiagram({ diagram }: { diagram: Diagram }) {
  const markerId = `arrow-${diagram.id}`;

  return (
    <div className={styles.diagram}>
      <svg viewBox="0 0 740 310" role="img" aria-label={diagram.label}>
        <defs>
          <marker
            id={markerId}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10z" fill="var(--muted)" />
          </marker>
        </defs>

        {diagram.nodes.map((n) => {
          const cx = n.x + n.w / 2;
          const titleY = n.sub ? n.y + n.h / 2 - 5 : n.y + n.h / 2 + 5;
          return (
            <g key={n.title}>
              <rect className={styles.box} x={n.x} y={n.y} width={n.w} height={n.h} rx={n.rx} />
              <text
                x={cx}
                y={titleY}
                textAnchor="middle"
                fontSize={n.small ? 13.5 : 15}
                fontWeight={600}
              >
                {n.title}
              </text>
              {n.sub && (
                <text className={styles.sub} x={cx} y={titleY + 21} textAnchor="middle" fontSize={11}>
                  {n.sub}
                </text>
              )}
            </g>
          );
        })}

        {diagram.arrows.map((d) => (
          <path key={d} className={styles.arrow} d={d} markerEnd={`url(#${markerId})`} />
        ))}
      </svg>
    </div>
  );
}
