"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { HiMenu, HiX } from "react-icons/hi";
import { BsSun, BsMoon } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";

/**
 * Navbar — Sticky navigation with glassmorphism, theme toggle,
 * language toggle, and mobile hamburger menu.
 */

const navLinks = [
    { key: "home", href: "#hero" },
    { key: "about", href: "#about" },
    { key: "education", href: "#education" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "experience", href: "#experience" },
    { key: "achievements", href: "#achievements" },
    { key: "blog", href: "#blog" },
    { key: "contact", href: "#contact" },
];

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    // Track scroll for navbar background
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Track active section for highlighting
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
        );

        navLinks.forEach(({ href }) => {
            const id = href.replace("#", "");
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (href) => {
        setIsOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#hero");
                        }}
                        className="text-xl md:text-2xl font-bold"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="gradient-text">&lt;Gokul /&gt;</span>
                    </motion.a>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map(({ key, href }) => (
                            <a
                                key={key}
                                href={href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(href);
                                }}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[var(--accent-light)] ${activeSection === href.replace("#", "")
                                    ? "text-[var(--accent-start)] bg-[var(--accent-light)]"
                                    : "text-[var(--text-secondary)] hover:text-[var(--accent-start)]"
                                    }`}
                            >
                                {t.nav[key]}
                            </a>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                        {/* Language Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleLanguage}
                            className="p-2 rounded-xl hover:bg-[var(--accent-light)] transition-colors text-[var(--text-secondary)]"
                            aria-label="Toggle language"
                            title={language === "en" ? "Switch to Hindi" : "Switch to English"}
                        >
                            <MdLanguage size={20} />
                            <span className="text-xs ml-0.5 font-semibold">{language.toUpperCase()}</span>
                        </motion.button>

                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl hover:bg-[var(--accent-light)] transition-colors text-[var(--text-secondary)]"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? <BsSun size={18} /> : <BsMoon size={18} />}
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-xl hover:bg-[var(--accent-light)] transition-colors text-[var(--text-secondary)]"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden glass border-t border-[var(--border)]"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map(({ key, href }, i) => (
                                <motion.a
                                    key={key}
                                    href={href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(href);
                                    }}
                                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeSection === href.replace("#", "")
                                        ? "text-[var(--accent-start)] bg-[var(--accent-light)]"
                                        : "text-[var(--text-secondary)] hover:text-[var(--accent-start)] hover:bg-[var(--accent-light)]"
                                        }`}
                                >
                                    {t.nav[key]}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
