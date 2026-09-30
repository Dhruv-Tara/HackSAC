"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      lerp: 0.12,
      respectReducedMotion: true,
    });

    return () => lenis.destroy();
  }, []);

  return children;
}