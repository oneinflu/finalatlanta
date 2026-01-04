import type { Metadata } from "next";
import { AcademyHero } from "@/app/academy-hero";
import { AcademyPillars } from "@/app/academy-pillars";
import { AcademyLearningStrip } from "@/app/academy-learning-strip";
import { ProgramsFeaturedStack } from "@/app/programs-featured-stack";

export const metadata: Metadata = {
    title: "SOC Academy | Training for Modern Security Operations & AI Security",
    description:
        "Explore Atlanta SOC Academy — a professional training institution focused on security operations, agentic AI security, governance, and real-world cyber defense.",
};

export default function AcademyPage() {
    return (
        <main>
            <AcademyHero />
            <AcademyPillars />  
            <ProgramsFeaturedStack />
            <section className="relative w-full bg-[#0A0D12] py-16 md:py-20">
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)",
                    }}
                />
                <div
                    className="pointer-events-none absolute inset-0 opacity-15"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "80px 80px, 80px 80px",
                        backgroundPosition: "center",
                    }}
                />
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10">
                            <span>Trust & Alignment</span>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10">ISO 42001</span>
                            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10">NIST AI RMF</span>
                            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10">MITRE ATLAS</span>
                            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10">OWASP</span>
                        </div>
                        <p className="mt-6 max-w-2xl text-white/80 md:text-lg">Aligned with global security and AI risk frameworks.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
