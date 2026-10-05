import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/SmoothScroll";
import { Archivo_Black, Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const wordmark = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-wordmark" });

export const metadata: Metadata = {
  title: "HackSAC | Hackathon by SAC",
  description: "A three-round hackathon for 2nd-year engineering and 3rd-year polytechnic students at MET, by the Student Association of Computer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${wordmark.variable}`}>
      <body className="bg-[#F4F6FB] font-[family-name:var(--font-body)] text-[#0F1B3D] antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
