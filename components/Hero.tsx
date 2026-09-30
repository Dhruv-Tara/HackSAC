"use client";

import { EVENT } from "@/lib/config";
import metLogo from "@/lib/image.png";
import sacLogo from "@/lib/SAC Logo.png";
import { motion, useInView, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useSpring(0, { mass: 0.1, damping: 10, stiffness: 131 });
  const pointerY = useSpring(0, { mass: 0.1, damping: 10, stiffness: 131 });
  const pointerOpacity = useSpring(0, { mass: 0.1, damping: 10, stiffness: 131 });
  const count = useSpring(0, { bounce: 0, duration: 900 });
  const countLabel = useTransform(count, (value) => String(Math.round(value)).padStart(2, "0"));
  const countRef = useRef<HTMLDivElement>(null);
  const countIsInView = useInView(countRef, { once: true, amount: 0.8 });

  useEffect(() => {
    if (countIsInView) count.set(3);
  }, [countIsInView, count]);

  return (
    <section
      id="hero"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(event.clientX - bounds.left - 22);
        pointerY.set(event.clientY - bounds.top - 22);
      }}
      onPointerEnter={() => pointerOpacity.set(1)}
      onPointerLeave={() => pointerOpacity.set(0)}
      className="relative mx-auto flex min-h-[78svh] w-full max-w-[1760px] flex-col justify-center gap-6 px-5 py-10 sm:min-h-[84svh] sm:gap-8 sm:px-8 sm:py-16 lg:min-h-[92svh] lg:px-12 lg:py-24 lg:pl-24 2xl:px-16 2xl:pl-32"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 hidden size-11 rounded-full border border-[#F04444]/70 bg-[#F04444]/10 md:block"
        style={{ x: pointerX, y: pointerY, opacity: pointerOpacity }}
      />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-3 lg:gap-5"
      >
        <div className="flex items-center gap-3 sm:gap-3 lg:gap-5">
          <Image
            src={metLogo}
            alt="MET Institute of Engineering logo"
            priority
            width={128}
            height={59}
            style={{ height: "auto" }}
            className="h-auto w-24 shrink-0 object-contain sm:w-32 lg:w-40"
          />
          <span className="h-12 w-[3px] shrink-0 bg-[#F04444] sm:h-18 lg:h-20" aria-hidden="true" />
          <Image
            src={sacLogo}
            alt="Student Association of Computer logo"
            width={128}
            height={128}
            className="size-14 shrink-0 object-contain mix-blend-multiply sm:size-18 lg:size-20"
          />
        </div>
        <span className="hidden h-14 w-[3px] shrink-0 bg-[#F04444] sm:block sm:h-18 lg:h-20" aria-hidden="true" />
        <div className="space-y-1 sm:space-y-1.5">
          <p className="text-sm font-semibold leading-snug text-[#0F1B3D]/85 sm:text-lg lg:text-xl">{EVENT.campus}</p>
          <p className="text-xs font-medium text-[#0F1B3D]/75 sm:text-base lg:text-lg">Department of Computer Engineering</p>
          <p className="text-xs font-medium text-[#0F1B3D]/75 sm:text-base lg:text-lg">{EVENT.org} presents</p>
        </div>
      </motion.div>
      <motion.h1
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
        className="max-w-none font-[family-name:var(--font-display)] text-[2.375rem] font-semibold leading-[0.94] tracking-[-0.05em] min-[360px]:text-[2.75rem] min-[480px]:text-5xl sm:text-7xl lg:text-8xl xl:text-[10rem]"
      >
        {EVENT.name}
      </motion.h1>
      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
        className="max-w-2xl text-base leading-relaxed text-[#0F1B3D]/80 sm:text-lg"
      >
        Three rounds. One idea wins.{" "}
        <span className="font-bold text-[#F04444]">
          {EVENT.name} is a three-round hackathon for 2nd-year MET&apos;s students.
        </span>{" "}
        Pitch online, build a prototype, then present your final idea at {EVENT.campus}.
      </motion.p>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.26, ease: "easeOut" }}
        className="flex flex-wrap items-center gap-4"
      >
        <a
          href={EVENT.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#0F1B3D] px-8 py-4 text-base font-medium text-[#F4F6FB] transition hover:bg-[#F04444] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F04444]"
        >
          Register your team
        </a>
        <span className="text-sm font-medium text-[#0F1B3D]/70">{EVENT.audience}</span>
      </motion.div>
      <div ref={countRef} className="mt-1 flex items-baseline gap-3 text-[#0F1B3D]/65 sm:mt-2">
        <motion.span className="font-[family-name:var(--font-display)] text-3xl font-semibold tabular-nums text-[#F04444] sm:text-4xl">
          {countLabel}
        </motion.span>
        <span className="text-sm uppercase">rounds · 7–16 October</span>
      </div>
    </section>
  );
}
