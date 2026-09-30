"use client";

import { EVENT } from "@/lib/config";
import sacLogo from "@/lib/SAC Logo.png";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StickyIdentity() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.boundingClientRect.bottom <= 72);
    }, { rootMargin: "-72px 0px 0px 0px" });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          aria-label="HackSAC identity"
          initial={reduceMotion ? false : { opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="glass-header fixed inset-x-3 top-3 z-50 rounded-2xl sm:inset-x-5"
        >
          <div className="relative z-10 mx-auto flex min-h-[72px] w-full max-w-[1760px] items-center justify-center gap-3 px-4 py-2 sm:min-h-[80px] sm:px-6 lg:px-10">
            <Image
              src={sacLogo}
              alt="Student Association of Computer logo"
              width={128}
              height={128}
              className="size-12 shrink-0 rounded-full object-cover mix-blend-multiply sm:size-14 lg:size-16"
            />
            <div className="min-w-0 text-center leading-tight text-[#0F1B3D]">
              <p className="truncate text-base font-semibold sm:text-lg lg:text-xl 2xl:text-2xl">{EVENT.name}</p>
              <p className="truncate text-xs font-medium text-[#0F1B3D]/75 sm:text-sm lg:text-base 2xl:text-lg">by Student Association of Computer</p>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}