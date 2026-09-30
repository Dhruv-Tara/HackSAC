import { EVENT } from "@/lib/config";

export default function Eligibility() {
  return (
    <section className="mx-auto w-full max-w-[1760px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28 2xl:px-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div className="max-w-2xl">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl lg:text-6xl">
          Who can enter
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#0F1B3D]/80 sm:mt-6 sm:text-xl">
          {EVENT.audience}, in teams of {EVENT.teamSize.toLowerCase()}. This event is not open to students from other years, colleges, or institutions.
        </p>
        </div>
        <div className="border-l-4 border-[#F04444] bg-[#0F1B3D] px-5 py-5 text-[#F4F6FB] sm:px-7 sm:py-6" role="note">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#F04444] sm:text-base">
            Round 1 PPT template
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#F4F6FB]/90 sm:text-base">
            Use the official HackSAC presentation template for your idea submission. Get the template from the organizers before submitting; presentations in another format may not be accepted.
          </p>
          <ul className="mt-5 space-y-3 border-t border-white/15 pt-4 text-sm leading-relaxed text-[#F4F6FB]/80 sm:text-base">
            <li>Keep the deck concise and easy to present online.</li>
            <li>Explain the problem, your proposed solution, and who it helps.</li>
            <li>Include your team details and submit one final PPT file.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
