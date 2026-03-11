"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolio";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";

/**
 * Footer — Social links, quick navigation, and copyright.
 */

const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
    { icon: FaLinkedinIn, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: FaTwitter, href: personalInfo.twitter, label: "Twitter" },
    { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="relative py-12 px-4" style={{ background: "var(--bg-secondary)" }}>
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px gradient-bg opacity-40" />

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        className="text-xl font-bold"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="gradient-text">&lt;Gokul /&gt;</span>
                    </motion.a>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 rounded-xl transition-all text-[var(--text-secondary)] hover:text-[var(--accent-start)] hover:bg-[var(--accent-light)]"
                                aria-label={label}
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                        {t.footer.madeWith} <FaHeart className="text-[var(--accent-start)] text-xs" /> {t.footer.by} © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}
