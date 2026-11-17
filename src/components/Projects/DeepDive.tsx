import type { CSSProperties } from "react";
import type { DeepCard, DeepGroup } from "@/types";
import styles from "./DeepDive.module.css";

function Card({ card }: { card: DeepCard }) {
  return (
    <div className={`${styles.card} ${card.wide ? styles.wide : ""}`}>
      {card.label && (
        <i className={`${styles.label} ${card.label === "Broke" ? styles.bug : ""}`}>{card.label}</i>
      )}
      <h5>{card.title}</h5>
      <p>{card.text}</p>
      {card.blend && (
        <div
          className={styles.blend}
          role="img"
          aria-label={`Final email score is ${card.blend.rules} percent rule-based and ${card.blend.nlp} percent NLP`}
        >
          <span style={{ flex: card.blend.rules }}>Rules {card.blend.rules}%</span>
          <span className={styles.nlp} style={{ flex: card.blend.nlp }}>
            NLP {card.blend.nlp}%
          </span>
        </div>
      )}
    </div>
  );
}

/** Collapsible "Under the hood" area: groups of equal-height cards, so nothing leaves gaps. */
export function DeepDive({ groups }: { groups: DeepGroup[] }) {
  return (
    <details className={styles.more}>
      <summary>Under the hood</summary>
      {groups.map((group) => (
        <div key={group.title} className={styles.group}>
          <h4>{group.title}</h4>
          <div className={styles.grid} style={{ "--n": group.columns } as CSSProperties}>
            {group.cards.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>
        </div>
      ))}
    </details>
  );
}
