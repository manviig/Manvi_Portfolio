interface StarProps {
  className?: string;
}

/** Four-point sparkle used as a decorative mark. */
export function Star({ className }: StarProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
    </svg>
  );
}
