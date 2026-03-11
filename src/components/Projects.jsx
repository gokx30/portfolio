"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { projects as staticProjects } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa";

/**
 * Projects — Card grid with project details, hover animations,
 * "View Code" / "Live Demo" buttons, and GitHub API integration.
 */

function ProjectCard({ project, index }) {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card overflow-hidden group relative"
        >
            {/* Project Image / Placeholder */}
            <div className="relative h-48 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black gradient-text opacity-30">
                        {project.title.charAt(0)}
                    </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4 gap-3">
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-semibold flex items-center gap-2 border border-white/30 hover:bg-white/30 transition-colors"
                    >
                        <FaGithub /> {t.projects.viewCode}
                    </motion.a>
                    {project.liveDemo && project.liveDemo !== "#" && (
                        <motion.a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-4 py-2 rounded-lg gradient-bg text-white text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            <FaExternalLinkAlt /> {t.projects.liveDemo}
                        </motion.a>
                    )}
                </div>

                {/* Featured badge */}
                {project.featured && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-lg gradient-bg text-white text-xs font-bold shadow-lg">
                        ⭐ {t.projects.featured}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-start)] transition-colors">
                        {project.title}
                    </h3>
                </div>

                {project.role && (
                    <div className="text-xs font-semibold text-[var(--accent-start)] mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-start)]" />
                        {project.role}
                    </div>
                )}

                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-medium text-[var(--accent-start)] border border-[var(--border)]"
                            style={{ background: "var(--accent-light)" }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="projects">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">{t.projects.title}</span>
                </h2>
                <p className="section-subtitle">{t.projects.subtitle}</p>

                {/* Static Project Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {staticProjects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
