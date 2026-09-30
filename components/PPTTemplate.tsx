import { ChevronRight } from "lucide-react";

export default function PPTTemplate() {
  return (
    <section
      id="ppt-template"
      className="mx-auto w-full max-w-[1760px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 2xl:px-16"
    >
      <div className="flex flex-col items-center border-y border-[#0F1B3D]/15 py-8 text-center sm:py-10">
        <div className="flex max-w-3xl flex-col items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F04444] sm:text-sm">
            Round 1 presentation
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Official PPT Template
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0F1B3D]/75 sm:text-base">
            Download the official presentation template for your Round 1 submission.
          </p>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-[#0F1B3D] sm:text-base">
            Your presentation must contain exactly 6 slides. Submissions with fewer or more slides will be disqualified.
          </p>
        </div>
        <a
          href="/HackSAC-PPT-Template-2026.pptx"
          download="HackSAC-PPT-Template-2026.pptx"
          className="group mt-6 inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#0F1B3D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F04444] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F04444] sm:mt-7 sm:text-base"
        >
          Download PPT template
          <ChevronRight
            aria-hidden="true"
            className="size-5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}