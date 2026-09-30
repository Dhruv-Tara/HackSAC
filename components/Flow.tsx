"use client";

import { ROUNDS } from "@/lib/config";
import { motion, useReducedMotion } from "framer-motion";

export default function Flow() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="flow" className="mx-auto w-full max-w-[1760px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28 2xl:px-16">
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl lg:text-6xl">
        How it runs
      </h2>
      <ol className="mt-8 border-t border-[#0F1B3D]/20 sm:mt-14">
        {ROUNDS.map((r) => (
          <motion.li
            key={r.title}
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid gap-3 border-b border-[#0F1B3D]/20 py-7 sm:gap-4 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16"
          >
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                {r.date}
              </p>
              <p className="mt-2 text-sm text-[#0F1B3D]/70">{r.day}</p>
            </div>
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold sm:text-2xl">{r.title}</h3>
                <span className="rounded-full bg-[#F04444]/15 px-3 py-1 text-sm font-medium text-[#C52F38]">
                  {r.mode === "Elimination" ? `${r.mode} stage` : r.mode}
                </span>
              </div>
              <p className="mt-3 text-base leading-relaxed text-[#0F1B3D]/80 sm:text-lg">{r.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
