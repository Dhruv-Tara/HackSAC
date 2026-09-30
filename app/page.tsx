import ScrollStroke from "@/components/ScrollStroke";
import Hero from "@/components/Hero";
import Flow from "@/components/Flow";
import FAQ from "@/components/FAQ";
import RegisterFooter from "@/components/RegisterFooter";
import Problems from "@/components/Problems";
import StickyIdentity from "@/components/StickyIdentity";
import PPTTemplate from "@/components/PPTTemplate";

export default function Page() {
  return (
    <main>
      <StickyIdentity />
      <ScrollStroke>
        <div className="relative z-10">
          <Hero />
          <Flow />
          <Problems />
          <PPTTemplate />
          <FAQ />
        </div>
      </ScrollStroke>
      <RegisterFooter />
    </main>
  );
}
