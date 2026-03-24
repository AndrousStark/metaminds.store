"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-[#1E2E69]"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    subtitle,
    badgeText,
    ctaPrimary,
    ctaPrimaryHref,
    ctaSecondary,
    ctaSecondaryHref,
    stats,
}: {
    title?: string;
    subtitle?: string;
    badgeText?: string;
    ctaPrimary?: string;
    ctaPrimaryHref?: string;
    ctaSecondary?: string;
    ctaSecondaryHref?: string;
    stats?: { value: string; label: string }[];
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-[#F0F4FF]">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    {badgeText && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F0F4FF] border border-[#B9BFFF]/30 text-[#5860D5] text-sm font-semibold mb-8"
                        >
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            {badgeText}
                        </motion.div>
                    )}

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-3 sm:mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1E2E69] to-[#5860D5]"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-base sm:text-lg md:text-xl text-[#4F4F4F] max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
                    >
                        {ctaPrimary && (
                            <a href={ctaPrimaryHref || "#products"} className="w-full sm:w-auto">
                                <div className="inline-block group relative bg-gradient-to-b from-[#5860D5]/20 to-[#1E2E69]/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto">
                                    <Button
                                        variant="ghost"
                                        className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-gradient-to-r from-[#5860D5] to-[#1E2E69] hover:from-[#4a52c7] hover:to-[#162557] text-white transition-all duration-300 group-hover:-translate-y-0.5 border-0 w-full sm:w-auto"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                                        <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                            {ctaPrimary}
                                        </span>
                                        <span className="ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                                            →
                                        </span>
                                    </Button>
                                </div>
                            </a>
                        )}

                        {ctaSecondary && (
                            <a href={ctaSecondaryHref || "https://metaminds.firm.in"} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <div className="inline-block group relative p-px rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto">
                                    <Button
                                        variant="ghost"
                                        className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold bg-white hover:bg-[#F0F4FF] text-[#1E2E69] transition-all duration-300 group-hover:-translate-y-0.5 border border-[#B9BFFF]/30 hover:border-[#5860D5] w-full sm:w-auto"
                                    >
                                        <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                            {ctaSecondary}
                                        </span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                                    </Button>
                                </div>
                            </a>
                        )}
                    </motion.div>

                    {stats && stats.length > 0 && (
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.7 }}
                            className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 mt-14 sm:mt-20 pt-10 sm:pt-12 border-t border-[#B9BFFF]/20 flex-wrap"
                        >
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#5860D5] tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-[#757575] mt-1 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
