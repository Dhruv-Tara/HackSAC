"use client";

import { PROBLEM_STATEMENTS } from "@/lib/config";
import { motion, useReducedMotion } from "framer-motion";

export default function Problems() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="problems" className="mx-auto w-full max-w-[1760px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28 2xl:px-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F04444] sm:text-sm">Starting points</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl lg:text-6xl">
            Problem statements
          </h2>
        </div>
      </div>
      <ol className="mt-8 grid border-t border-[#0F1B3D]/20 sm:mt-12 sm:grid-cols-3">
        {PROBLEM_STATEMENTS.map((problem, index) => (
          <motion.li
            key={problem.number}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
            className="border-b border-[#0F1B3D]/20 py-6 sm:border-b-0 sm:border-r sm:px-5 sm:py-8 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 lg:px-8"
          >
            <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#F04444]">{problem.number}</span>
            <h3 className="mt-4 text-lg font-semibold sm:text-xl">{problem.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0F1B3D]/75 sm:text-base">{problem.body}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}