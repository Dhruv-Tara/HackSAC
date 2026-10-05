"use client";

import { EVENT } from "@/lib/config";
import metLogo from "@/lib/MET_ioe_logo.png";
import sacLogo from "@/lib/SAC Logo.png";
import NumberFlow from "@number-flow/react";
import { motion, useInView, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FIRST_ROUND_START = new Date("2026-10-09T16:00:00+05:30").getTime();

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useSpring(0, { mass: 0.1, damping: 10, stiffness: 131 });
  const pointerY = useSpring(0, { mass: 0.1, damping: 10, stiffness: 131 });
  const pointerOpacity = useSpring(0, { mass: 0.1, damping: 10, stiffness: 131 });
  const count = useSpring(0, { bounce: 0, duration: 900 });
  const countLabel = useTransform(count, (value) => String(Math.round(value)).padStart(2, "0"));
  const countRef = useRef<HTMLDivElement>(null);
  const countIsInView = useInView(countRef, { once: true, amount: 0.8 });
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (countIsInView) count.set(3);
  }, [countIsInView, count]);

  useEffect(() => {
    const updateCountdown = () => setTimeLeft(Math.max(0, FIRST_ROUND_START - Date.now()));

    updateCountdown();
    const intervalId = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const totalSeconds = Math.floor((timeLeft ?? 0) / 1000);
  const countdownUnits = [
    { label: "Days", value: timeLeft === null ? null : Math.floor(totalSeconds / 86400) },
    { label: "Hours", value: timeLeft === null ? null : Math.floor((totalSeconds % 86400) / 3600) },
    { label: "Minutes", value: timeLeft === null ? null : Math.floor((totalSeconds % 3600) / 60) },
    { label: "Seconds", value: timeLeft === null ? null : totalSeconds % 60 },
  ];

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
            width={154}
            height={71}
            style={{ height: "auto" }}
            className="h-auto w-[115px] shrink-0 object-contain sm:w-[154px] lg:w-48"
          />
          <span className="h-12 w-[3px] shrink-0 bg-[#F04444] sm:h-16 lg:h-18" aria-hidden="true" />
          <Image
            src={sacLogo}
            alt="Student Association of Computer logo"
            width={128}
            height={128}
            className="size-14 shrink-0 object-contain mix-blend-multiply sm:size-18 lg:size-20"
          />
        </div>
        <span className="hidden h-12 w-[3px] shrink-0 bg-[#F04444] sm:block sm:h-16 lg:h-18" aria-hidden="true" />
        <div className="space-y-0.5 sm:space-y-1">
          <p className="text-base font-bold leading-snug text-[#0F1B3D] sm:text-xl lg:text-2xl">Department of Computer Engineering</p>
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
          {EVENT.name} is a three-round hackathon for 2nd-year engineering and 3rd-year polytechnic students at MET.
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
      <div
        role="timer"
        aria-label="Countdown to the first round on Friday, October 9 at 4 PM India Standard Time"
        className="mt-2 flex flex-wrap items-end gap-x-5 gap-y-3"
      >
        <div className="grid gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F1B3D]/60">
            {timeLeft === 0 ? "The first round has begun" : "First round begins in"}
          </p>
          <div className="flex items-baseline gap-3 sm:gap-4">
            {countdownUnits.map(({ label, value }) => (
              <div key={label} className="grid justify-items-center gap-0.5">
                <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tabular-nums text-[#F04444] sm:text-3xl">
                  {value === null ? "--" : <NumberFlow value={value} />}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#0F1B3D]/55">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <span className="pb-1 text-xs font-medium uppercase tracking-[0.08em] text-[#0F1B3D]/60">
          Fri, 9 Oct · 4:00 PM IST
        </span>
      </div>
    </section>
  );
}
