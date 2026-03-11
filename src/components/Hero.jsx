"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolio";
import { FaArrowDown, FaDownload } from "react-icons/fa";

/**
 * Hero — Full-viewport hero section with animated text and CTAs.
 */
export default function Hero() {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: "var(--gradient-hero)" }}
        >
            {/* Decorative gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: "var(--accent-start)" }} />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ background: "var(--accent-end)" }} />

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            >
                {/* Greeting Badge */}
                <motion.div variants={itemVariants} className="inline-block mb-6">
                    <span className="px-5 py-2 rounded-full text-sm font-semibold border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-start)] shadow-sm">
                        👋 {t.hero.greeting}
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight"
                >
                    <span className="gradient-text">{personalInfo.name}</span>
                </motion.h1>

                {/* Role */}
                <motion.h2
                    variants={itemVariants}
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-6"
                >
                    {t.hero.role}
                </motion.h2>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {t.hero.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(124,58,237,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3.5 rounded-xl gradient-bg text-white font-semibold text-base flex items-center gap-2 shadow-lg"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        {t.hero.cta1} <FaArrowDown className="text-sm" />
                    </motion.a>

                    <motion.a
                        href={personalInfo.resumeLink}
                        download="Gokul_Resume.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2 border-2 border-[var(--accent-start)] text-[var(--accent-start)] hover:bg-[var(--accent-light)] transition-colors"
                    >
                        {t.hero.cta2} <FaDownload className="text-sm" />
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-[var(--accent-start)] flex items-start justify-center pt-2"
                    >
                        <div className="w-1.5 h-3 rounded-full gradient-bg" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
