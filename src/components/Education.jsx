"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { education } from "@/data/portfolio";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

/**
 * Education — Detailed academic history and relevant coursework.
 */
export default function Education() {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="education" className="bg-[var(--bg-secondary)] py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">{t.education.title}</span>
                </h2>
                <p className="section-subtitle">{t.education.subtitle}</p>

                <div className="grid md:grid-cols-2 gap-10 mt-12">
                    {/* Main Education Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card p-8 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaGraduationCap size={80} />
                        </div>

                        <span className="inline-block px-4 py-1 rounded-full text-xs font-bold gradient-bg text-white mb-6">
                            {education.year}
                        </span>

                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                            {education.degree}
                        </h3>
                        <p className="text-lg text-[var(--accent-start)] font-medium mb-4">
                            {education.college}
                        </p>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="px-3 py-1 rounded-lg bg-[var(--accent-start)] text-white text-sm font-bold">
                                GPA: {education.gpa}
                            </div>
                        </div>

                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            Focusing on modern software development methodologies and core computer science fundamentals.
                        </p>
                    </motion.div>

                    {/* Coursework Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card p-8 overflow-hidden"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white">
                                <FaBookOpen size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--text-primary)]">
                                {t.education.coursework}
                            </h3>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {education.coursework.map((course, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-2 text-[var(--text-secondary)]"
                                >
                                    <div className="w-2 h-2 rounded-full gradient-bg" />
                                    <span className="text-sm font-medium">{course}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
