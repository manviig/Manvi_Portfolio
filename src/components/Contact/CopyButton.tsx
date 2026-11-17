"use client";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import styles from "./Contact.module.css";

export function CopyButton({ text }: { text: string }) {
  const { state, copy } = useCopyToClipboard();
  const label = state === "copied" ? "Copied" : state === "failed" ? "Select it above" : "Copy";

  return (
    <button type="button" className={styles.copy} onClick={() => copy(text)}>
      {label}
    </button>
  );
}
