"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type CopyState = "idle" | "copied" | "failed";

export function useCopyToClipboard(resetMs = 1600) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setState("copied");
      } catch {
        setState("failed");
      }
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setState("idle"), resetMs);
    },
    [resetMs],
  );

  return { state, copy };
}
