"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { experience } from "@/data/portfolio";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

/**
 * Experience — Internship cards with company, duration, responsibilities, and tech tags.
 */
export default function Experience() {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="experience">
            <div className="max-w-5xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">{t.experience.title}</span>
                </h2>
                <p className="section-subtitle">{t.experience.subtitle}</p>

                <div className="space-y-8">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="card p-8 relative overflow-hidden group"
                        >
                            {/* Accent gradient stripe */}
                            <div className="absolute top-0 left-0 w-1.5 h-full gradient-bg rounded-l-2xl" />

                            <div className="pl-4">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                                            <FaBriefcase className="text-[var(--accent-start)]" />
                                            {exp.role}
                                        </h3>
                                        <p className="text-[var(--accent-start)] font-semibold">{exp.company}</p>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[var(--border)]" style={{ background: "var(--bg-secondary)" }}>
                                        <FaCalendarAlt className="text-[var(--accent-start)]" />
                                        {exp.duration}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                                    {exp.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">
                                        {t.experience.highlights}
                                    </h4>
                                    <ul className="space-y-1.5">
                                        {exp.highlights.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-lg text-xs font-semibold text-[var(--accent-start)] border border-[var(--accent-start)]/20"
                                            style={{ background: "var(--accent-light)" }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)" }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
