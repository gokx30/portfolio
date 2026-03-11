"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { journey } from "@/data/portfolio";
import { FaGraduationCap, FaCode, FaRocket, FaBriefcase } from "react-icons/fa";

/**
 * Journey — Vertical timeline showing milestones, education, and career path.
 */

const iconMap = {
    education: FaGraduationCap,
    code: FaCode,
    rocket: FaRocket,
    work: FaBriefcase,
};

export default function Journey() {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="journey" className="overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">{t.journey.title}</span>
                </h2>
                <p className="section-subtitle">{t.journey.subtitle}</p>

                {/* Timeline */}
                <div className="relative">
                    {/* Center line */}
                    <div
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-px"
                        style={{ background: "var(--gradient-accent)" }}
                    />

                    {journey.map((item, index) => {
                        const Icon = iconMap[item.icon] || FaCode;
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex items-center mb-12 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                                    <div className="card p-6 relative group">
                                        {/* Year badge */}
                                        <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold gradient-bg text-white mb-3">
                                            {item.year}
                                        </span>
                                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* Arrow pointer */}
                                        <div
                                            className={`hidden md:block absolute top-6 w-3 h-3 rotate-45 border border-[var(--border)] ${isLeft
                                                    ? "right-[-7px] border-l-0 border-b-0"
                                                    : "left-[-7px] border-r-0 border-t-0"
                                                }`}
                                            style={{ background: "var(--card-bg)" }}
                                        />
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.3 }}
                                        className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white shadow-lg"
                                    >
                                        <Icon size={18} />
                                    </motion.div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block md:w-5/12" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
