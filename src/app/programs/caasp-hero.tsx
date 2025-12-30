"use client";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Stars02, FileCode01, BarChart02, ArrowRight } from "@untitledui/icons";

export const CAASPHero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY || 0);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative w-full bg-[#0A0D12] py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0">
                <motion.div
                    className="absolute inset-0 opacity-90"
                    style={{
                        background:
                            "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
                    }}
                    initial={{ opacity: 0.85 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute left-0 top-0 h-[55vh] w-[55vw] blur-3xl opacity-35"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 30%, rgba(158,119,237,0.28) 0%, rgba(127,86,217,0.14) 35%, rgba(127,86,217,0) 65%)",
                    }}
                    animate={{ x: [0, 10, -6, 0], y: [0, -6, 8, 0] }}
                    transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute right-0 bottom-8 h-[55vh] w-[55vw] blur-3xl opacity-30"
                    style={{
                        background:
                            "radial-gradient(circle at 70% 70%, rgba(127,86,217,0.24) 0%, rgba(105,65,198,0.12) 35%, rgba(105,65,198,0) 65%)",
                    }}
                    animate={{ x: [0, -12, 8, 0], y: [0, 10, -6, 0] }}
                    transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "80px 80px, 80px 80px",
                        backgroundPosition: "center",
                    }}
                    initial={{ opacity: 0.14 }}
                    animate={{ opacity: 0.22 }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
            </div>
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
                    <h1 className="font-bold tracking-tight leading-tight">
                        <span className="block bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(2.6rem,7vw,5.6rem)]">
                            Agentic AI Security Professional (CAASP)
                        </span>
                    </h1>
                    <p className="max-w-3xl text-lg text-white/80 md:text-xl">
                        Secure autonomous and multi-agent AI systems before they become the next breach.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                        <motion.span
                            className="rounded-full bg-[#0A0D12]/80 px-3 py-1 text-sm text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
                            animate={{ y: [0, -2, 1, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Agentic AI
                        </motion.span>
                        <motion.span
                            className="rounded-full bg-[#0A0D12]/80 px-3 py-1 text-sm text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
                            animate={{ y: [0, 2, -1, 0] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Multi-Agent
                        </motion.span>
                        <motion.span
                            className="rounded-full bg-[#0A0D12]/80 px-3 py-1 text-sm text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
                            animate={{ y: [0, -1, 2, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Red Teaming
                        </motion.span>
                    </div>
                    <div className="mt-8 flex w-full items-center justify-center">
                        <div className="flex items-center gap-6 md:gap-8">
                            <div className="flex items-center gap-2 text-white/85">
                                <FileCode01 className="size-5 text-white/85" />
                                <span className="text-sm">ISO 42001</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/85">
                                <Stars02 className="size-5 text-white/85" />
                                <span className="text-sm">MITRE ATLAS</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/85">
                                <BarChart02 className="size-5 text-white/85" />
                                <span className="text-sm">NIST AI RMF</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/85">
                                <span className="text-sm">120 Hours · Hands-on</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex w-full items-center justify-center">
                <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="xl" iconTrailing={ArrowRight} href="#apply">
                    Enroll Now
                </ShineButton>
            </div>
            <motion.div
                className="fixed bottom-6 right-6 z-[60]"
                initial={{ opacity: 0 }}
                animate={{ opacity: scrollY > 100 ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="lg" iconTrailing={ArrowRight} href="#apply">
                    Apply Now
                </ShineButton>
            </motion.div>
        </section>
    );
};
