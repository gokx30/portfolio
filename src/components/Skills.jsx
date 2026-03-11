"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/data/portfolio";
import { useInView } from "react-intersection-observer";
import {
    FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaDatabase, FaFire, FaPython, FaJava, FaPhp, FaTerminal, FaMicrosoft
} from "react-icons/fa";
import {
    SiTailwindcss, SiExpress, SiMongodb, SiRedux, SiBootstrap, SiMysql, SiCplusplus
} from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";

/**
 * Skills — Animated progress bars with icons for technical and soft skills.
 */

// Map skill names to icons
const skillIcons = {
    "React.js": FaReact,
    "JavaScript": FaJs,
    "HTML5": FaHtml5,
    "CSS3": FaCss3Alt,
    "Tailwind CSS": SiTailwindcss,
    "Redux": SiRedux,
    "Node.js": FaNodeJs,
    "Express.js": SiExpress,
    "MongoDB": SiMongodb,
    "REST APIs": TbApi,
    "Firebase": FaFire,
    "Git & GitHub": FaGitAlt,
    "Python": FaPython,
    "Java": FaJava,
    "PHP": FaPhp,
    "SQL": TbSql,
    "MySQL": SiMysql,
    "Bootstrap": SiBootstrap,
    "C++ / C": SiCplusplus,
    "Microsoft Office Tools": FaMicrosoft,
    "VS Code": FaTerminal,
};

function SkillBar({ name, level, delay }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const Icon = skillIcons[name] || FaDatabase;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="group"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                    <Icon className="text-[var(--accent-start)] text-lg group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{name}</span>
                </div>
                <span className="text-xs font-bold text-[var(--accent-start)]">{level}%</span>
            </div>
            <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "var(--bg-tertiary)" }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
                    className="h-full rounded-full gradient-bg relative"
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" style={{ transform: "translateX(-100%)", animation: "shimmer 2s infinite" }} />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

/** Radial / Circular skill indicator */
function RadialSkill({ name, level, delay }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const Icon = skillIcons[name] || FaDatabase;
    const circumference = 2 * Math.PI * 40;
    const strokeDash = circumference - (level / 100) * circumference;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center gap-3 group"
        >
            <div className="relative w-24 h-24">
                <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                    <circle
                        cx="50" cy="50" r="40"
                        stroke="var(--bg-tertiary)"
                        strokeWidth="6"
                        fill="none"
                    />
                    <motion.circle
                        cx="50" cy="50" r="40"
                        stroke="url(#gradient-skills)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={inView ? { strokeDashoffset: strokeDash } : {}}
                        transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
                    />
                    <defs>
                        <linearGradient id="gradient-skills" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--accent-start)" />
                            <stop offset="100%" stopColor="var(--accent-end)" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="text-[var(--accent-start)] text-xl group-hover:scale-125 transition-transform" />
                </div>
            </div>
            <div className="text-center">
                <p className="text-sm font-semibold text-[var(--text-primary)]">{name}</p>
                <p className="text-xs text-[var(--accent-start)] font-bold">{level}%</p>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const { t } = useLanguage();
    const { softSkills } = skills;

    return (
        <SectionWrapper id="skills">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">{t.skills.title}</span>
                </h2>
                <p className="section-subtitle">{t.skills.subtitle}</p>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Technical Skills — Progress Bars */}
                    <div className="card p-8">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                            <span className="w-2 h-6 rounded-full gradient-bg inline-block" />
                            Technical Skills
                        </h3>
                        <div className="space-y-5">
                            {skills.frontend.map((skill, i) => (
                                <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
                            ))}
                        </div>
                    </div>

                    {/* Tools & Languages — Radial Charts */}
                    <div className="card p-8">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                            <span className="w-2 h-6 rounded-full gradient-bg inline-block" />
                            Tools & Languages
                        </h3>
                        <div className="grid grid-cols-3 gap-6">
                            {skills.backend.map((skill, i) => (
                                <RadialSkill key={skill.name} {...skill} delay={i * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Soft Skills Section */}
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-8">Soft Skills</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {softSkills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ delay: index * 0.1 }}
                                className="px-6 py-2 rounded-2xl border border-[var(--border)] text-sm font-bold text-[var(--text-secondary)] shadow-sm hover:shadow-md hover:border-[var(--accent-start)] hover:text-[var(--accent-start)] transition-all cursor-default"
                                style={{ background: "var(--bg-secondary)" }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
