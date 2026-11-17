import Image from "next/image";
import styles from "./Say.module.css";

interface SayProps {
  children: string;
}

/** Yellow speech chip from the walking guide. On small screens it carries a mini avatar. */
export function Say({ children }: SayProps) {
  return (
    <p className={styles.say}>
      <span className={styles.av} aria-hidden="true">
        <Image src="/images/face.webp" alt="" width={34} height={34} />
      </span>
      {children}
    </p>
  );
}
