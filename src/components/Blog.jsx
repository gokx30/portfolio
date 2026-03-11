"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { blogPosts } from "@/data/portfolio";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

/**
 * Blog — Grid of blog post cards with category tags and hover effects.
 */
export default function Blog() {
    const { t } = useLanguage();

    const categoryColors = {
        "Web Development": { bg: "#ede9fe", text: "#7c3aed" },
        "Backend": { bg: "#dcfce7", text: "#16a34a" },
        "React": { bg: "#dbeafe", text: "#2563eb" },
    };

    return (
        <SectionWrapper id="blog">
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">{t.blog.title}</span>
                </h2>
                <p className="section-subtitle">{t.blog.subtitle}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => {
                        const colors = categoryColors[post.category] || { bg: "#ede9fe", text: "#7c3aed" };

                        return (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card overflow-hidden group cursor-pointer"
                            >
                                {/* Category gradient header */}
                                <div className="h-2 gradient-bg" />

                                <div className="p-6">
                                    {/* Category & Date */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span
                                            className="px-3 py-1 rounded-lg text-xs font-bold"
                                            style={{ backgroundColor: colors.bg, color: colors.text }}
                                        >
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                                            <FaClock /> {post.readTime}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-start)] transition-colors leading-tight">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                                            <FaCalendarAlt /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1 text-sm font-semibold text-[var(--accent-start)] group-hover:gap-2 transition-all">
                                            {t.blog.readMore} <FaArrowRight className="text-xs" />
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
