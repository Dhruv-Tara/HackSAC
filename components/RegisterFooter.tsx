import { EVENT } from "@/lib/config";

export default function RegisterFooter() {
  return (
    <footer className="mt-14 rounded-t-3xl bg-[#0F1B3D] px-5 pb-8 pt-12 text-[#F4F6FB] sm:mt-20 sm:rounded-t-[2.5rem] sm:px-8 sm:pb-10 sm:pt-16 lg:px-12 2xl:px-16">
      <div className="mx-auto w-full max-w-[1760px]">
        <h2 className="text-center font-[family-name:var(--font-wordmark)] text-6xl font-normal leading-[0.9] tracking-[-0.04em] sm:text-8xl lg:text-[11rem] 2xl:text-[14rem]">
          {EVENT.name}
        </h2>
        <div className="mt-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12 text-base text-[#F4F6FB]/80 sm:text-lg">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F04444] sm:text-sm">Faculty Coordinator</p>
              <div className="space-y-2">
                <p><span className="font-semibold text-[#F4F6FB]">Dr. Anand Gharu:</span> 8087777708</p>
                <p><span className="font-semibold text-[#F4F6FB]">Mail:</span> <a href="mailto:metsac26@gmail.com" className="transition hover:text-[#F4F6FB] hover:underline">metsac26@gmail.com</a></p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F04444] sm:text-sm">Student Coordinators</p>
              <div className="space-y-2">
                <p><span className="font-semibold text-[#F4F6FB]">Yash Sharma:</span> 8459721079</p>
                <p><span className="font-semibold text-[#F4F6FB]">Kunal Sonawane:</span> 7350769717</p>
              </div>
            </div>
          </div>
          <a
            href={EVENT.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#F4F6FB] px-8 py-4 text-base font-medium text-[#0F1B3D] transition hover:bg-[#F04444] hover:text-[#F4F6FB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F04444]"
          >
            Register your team
          </a>
        </div>
        <div className="mt-10 flex justify-center border-t border-white/15 pt-6 sm:mt-14">
          <p className="px-3 text-center text-xs leading-relaxed text-[#F4F6FB]/60 sm:text-sm">
            © {new Date().getFullYear()} {EVENT.org} and {EVENT.campus}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
