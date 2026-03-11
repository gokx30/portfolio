"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolio";
import { FaDownload, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

/**
 * About — Personal bio, profile picture, and resume download.
 */
export default function About() {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="about">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">{t.about.title}</span>
                </h2>
                <p className="section-subtitle">{t.about.subtitle}</p>

                <div className="grid md:grid-cols-5 gap-10 items-center">
                    {/* Profile Image */}
                    <motion.div
                        className="md:col-span-2 flex justify-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="relative">
                            {/* Gradient ring */}
                            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl gradient-bg p-1 shadow-xl animate-pulse-glow">
                                <div
                                    className="w-full h-full rounded-2xl overflow-hidden relative"
                                    style={{ background: "var(--bg-primary)" }}
                                >
                                    <Image
                                        src="/gokul.jpeg"
                                        alt="Gokul"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl gradient-bg text-white text-sm font-semibold shadow-lg z-10"
                            >
                                MERN Dev 🚀
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Bio Content */}
                    <div className="md:col-span-3 space-y-5">
                        <p className="text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg">
                            {personalInfo.bio}
                        </p>

                        {/* Info chips */}
                        <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-[var(--border)]" style={{ background: "var(--bg-secondary)" }}>
                                <FaMapMarkerAlt className="text-[var(--accent-start)]" />
                                {personalInfo.location}
                            </span>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-[var(--border)]" style={{ background: "var(--bg-secondary)" }}>
                                <FaEnvelope className="text-[var(--accent-start)]" />
                                {personalInfo.email}
                            </span>
                        </div>

                        <motion.a
                            href={personalInfo.resumeLink}
                            download="Gokul_Resume.pdf"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(124,58,237,0.25)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-semibold shadow-lg"
                        >
                            <FaDownload /> {t.about.downloadResume}
                        </motion.a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
