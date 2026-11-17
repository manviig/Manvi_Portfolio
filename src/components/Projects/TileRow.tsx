import type { Tile } from "@/types";
import styles from "./TileRow.module.css";

export function TileRow({ tiles }: { tiles: Tile[] }) {
  return (
    <ul className={styles.tiles}>
      {tiles.map((tile) => (
        <li key={tile.title} className={styles.tile}>
          <b>{tile.title}</b>
          <span>{tile.text}</span>
        </li>
      ))}
    </ul>
  );
}
