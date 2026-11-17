import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface BaseProps {
  children: ReactNode;
  variant?: "outline" | "primary";
  className?: string;
}

type LinkProps = BaseProps & {
  href: string;
  external?: boolean;
  /** Saves the file instead of navigating, using this as the file name. */
  download?: string;
  onClick?: never;
};

type ActionProps = BaseProps & {
  href?: never;
  external?: never;
  download?: never;
  onClick: () => void;
};

/** Pill button. Renders an anchor when given an href, otherwise a button. */
export function Button(props: LinkProps | ActionProps) {
  const { children, variant = "outline", className } = props;
  const cls = [styles.btn, variant === "primary" ? styles.primary : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  if (props.href !== undefined) {
    return (
      <a
        className={cls}
        href={props.href}
        {...(props.download ? { download: props.download } : {})}
        {...(props.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={props.onClick}>
      {children}
    </button>
  );
}
