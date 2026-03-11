"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { certifications, achievements } from "@/data/portfolio";
import { FaCertificate, FaTrophy, FaCheckCircle } from "react-icons/fa";

/**
 * Achievements — Technical certifications and extra-curricular highlights.
 */
export default function Achievements() {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="achievements" className="py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">{t.achievements.title}</span>
                </h2>
                <p className="section-subtitle">{t.achievements.subtitle}</p>

                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <FaCertificate className="text-[var(--accent-start)]" size={24} />
                            <h3 className="text-xl font-bold text-[var(--text-primary)]">Certifications</h3>
                        </div>

                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="p-5 rounded-2xl border border-[var(--border)] group flex items-start gap-4 hover:border-[var(--accent-start)] transition-colors"
                                    style={{ background: "var(--bg-secondary)" }}
                                >
                                    <div className="mt-1">
                                        <FaCheckCircle className="text-[var(--accent-start)] opacity-60 group-hover:opacity-100" />
                                    </div>
                                    <p className="font-medium text-[var(--text-primary)]">{cert}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Extracurriculars */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <FaTrophy className="text-[var(--accent-start)]" size={24} />
                            <h3 className="text-xl font-bold text-[var(--text-primary)]">Achievements</h3>
                        </div>

                        <div className="space-y-4">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className="p-5 rounded-2xl border border-[var(--border)] group flex items-start gap-4 hover:border-[var(--accent-start)] transition-colors"
                                    style={{ background: "var(--bg-secondary)" }}
                                >
                                    <div className="mt-1">
                                        <FaCheckCircle className="text-[var(--accent-start)] opacity-60 group-hover:opacity-100" />
                                    </div>
                                    <p className="font-medium text-[var(--text-primary)]">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
