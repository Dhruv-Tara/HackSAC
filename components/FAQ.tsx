"use client";

import { useState } from "react";

const QUESTIONS: { question: string; answer: string; link?: { href: string; label: string } }[] = [
  {
    question: "Who can enter?",
    answer: "HackSAC is open only to 2nd-year engineering and 3rd-year polytechnic students at MET, in teams of four members. Every team member must meet one of these eligibility criteria. The event is not open to students from other years, colleges, or institutions.",
  },
  {
    question: "What will I receive?",
    answer: "All registered students will receive a soft copy of a certificate of participation. Winners will receive a certificate of achievement and prize money for each problem statement.",
  },
  {
    question: "Can one team work on all three problem statements?",
    answer: "Yes. A single team can participate in all three problem statements.",
  },
  {
    question: "What are the Round 1 PPT requirements?",
    answer: "Use the official HackSAC presentation template for your idea submission. Get the template from the organizers before submitting; presentations in another format may not be accepted. Keep the deck concise, explain the problem and proposed solution, and include your team details in one final PPT file.",
  },
  {
    question: "Do we need a finished product for Round 1?",
    answer: "No. Round 1 is an idea presentation. Bring a clear problem, a thoughtful solution, and a concise PPT using the official template.",
  },
  {
    question: "What happens after the PPT presentation?",
    answer: "Shortlisted teams move to Round 2 to show a basic working prototype, followed by the final presentation on 16 October.",
  },
  {
    question: "Can we submit our own presentation format?",
    answer: "No. The official HackSAC PPT template is mandatory for Round 1 submissions.",
  },
  {
    question: "Where can I read the Terms and Conditions?",
    answer: "Please review the event terms and conditions before registering.",
    link: {
      href: "https://docs.google.com/document/d/1DXHwGUXSLBWsfwtwy1x6NzwBuqdKOn-5GCTfhnJOal0/edit?usp=sharing",
      label: "Read the Terms and Conditions",
    },
  },
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <section className="bg-[#F4F6FB] text-[#0F1B3D]" id="faq">
      <div className="mx-auto w-full max-w-[1760px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28 2xl:px-16">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-20">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F04444] sm:text-sm">
            <span className="h-px w-5 bg-[#F04444]" aria-hidden="true" />
            Common inquiries
          </p>
          <h2 className="mt-7 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            <span className="block">Got</span>
            <span className="block text-[#F04444]">Questions?</span>
          </h2>
        </div>
        <div className="border-t border-[#0F1B3D]/10">
          {QUESTIONS.map((item, index) => {
            const isOpen = openQuestion === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={item.question} className="group border-b border-[#0F1B3D]/10 py-5 sm:py-6">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenQuestion(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 text-left text-base font-semibold transition-colors duration-200 hover:text-[#F04444] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F04444] sm:text-lg"
                >
                  {item.question}
                  <span
                    className={`text-xl font-normal text-[#0F1B3D]/50 transition duration-300 group-hover:text-[#F04444] ${isOpen ? "rotate-45 text-[#F04444]" : "group-hover:scale-110"}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className={`max-w-2xl pr-10 pt-3 text-sm leading-relaxed text-[#0F1B3D]/65 transition-opacity duration-300 sm:text-base ${isOpen ? "opacity-100" : "opacity-0"}`}>
                      <p>{item.answer}</p>
                      {item.link && (
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={isOpen ? 0 : -1}
                          className="mt-2 inline-block font-semibold text-[#0F1B3D] underline decoration-[#F04444]/70 underline-offset-4 transition-colors hover:text-[#F04444] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F04444]"
                        >
                          {item.link.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}