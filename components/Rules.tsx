const RULES = [
  {
    title: "Eligibility",
    answer: "HackSAC is open only to 2nd-year MET's students. Every team member must meet the eligibility requirements before registration.",
  },
  {
    title: "Team size & composition",
    answer: "Teams must have four members. Teams should register with their final member list and may not include students from other years, colleges, or institutions.",
  },
  {
    title: "Project requirements & pre-built code",
    answer: "Submissions should solve the selected problem with original work developed during the hackathon. Existing libraries and tools are welcome, but pre-built projects should not be presented as new work.",
  },
  {
    title: "Open-source libraries & APIs",
    answer: "Open-source libraries, APIs, and other permitted tools may be used. Teams should be ready to explain what they used and how it supports their solution.",
  },
  {
    title: "Submission & intellectual property",
    answer: "Round 1 submissions must use the official PPT template. Teams retain ownership of their work and grant the organizers permission to showcase submissions for event communication.",
  },
  {
    title: "Code of conduct & disqualification",
    answer: "Participants are expected to act respectfully and honestly. Plagiarism, misrepresentation, rule violations, or disruptive conduct may lead to disqualification.",
  },
];

export default function Rules() {
  return (
    <section className="mx-auto w-full max-w-[1760px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28 2xl:px-16" id="rules">
      <div className="max-w-4xl">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F04444] sm:text-sm">
          <span className="h-px w-5 bg-[#F04444]" aria-hidden="true" />
          08 - Code of integrity
        </p>
        <h2 className="mt-7 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          <span className="block">Know</span>
          <span className="block text-[#F04444]">the rules.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#0F1B3D]/70 sm:text-base">
          Fair play is paramount. All participants are bound by the following contest rules and verification protocols.
        </p>
      </div>
      <div className="mt-12 border-t border-[#0F1B3D]/10 sm:mt-16">
        {RULES.map((rule, index) => (
          <details key={rule.title} className="group border-b border-[#0F1B3D]/10">
            <summary className="flex cursor-pointer list-none items-center gap-5 py-6 [&::-webkit-details-marker]:hidden sm:py-7">
              <span className="w-6 shrink-0 font-mono text-xs text-[#F04444]">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-sm font-semibold uppercase sm:text-base">{rule.title}</span>
              <span className="ml-auto text-xl font-normal text-[#0F1B3D]/50 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="max-w-3xl pb-7 pl-11 pr-8 text-sm leading-relaxed text-[#0F1B3D]/65 sm:text-base">{rule.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}