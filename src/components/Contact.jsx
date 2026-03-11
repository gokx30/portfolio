"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolio";
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt,
    FaGithub, FaLinkedinIn, FaTwitter, FaPaperPlane
} from "react-icons/fa";

/**
 * Contact — Contact form (Formspree ready) + social links.
 */

const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, label: "GitHub", color: "#333" },
    { icon: FaLinkedinIn, href: personalInfo.linkedin, label: "LinkedIn", color: "#0A66C2" },
    { icon: FaTwitter, href: personalInfo.twitter, label: "Twitter", color: "#1DA1F2" },
    { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email", color: "#7c3aed" },
];

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            // Using Formspree — replace YOUR_FORM_ID with actual form ID
            const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <SectionWrapper id="contact">
            <div className="max-w-5xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">{t.contact.title}</span>
                </h2>
                <p className="section-subtitle">{t.contact.subtitle}</p>

                <div className="grid md:grid-cols-5 gap-10">
                    {/* Contact Info */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Info Cards */}
                        <div className="space-y-4">
                            {[
                                { icon: FaEnvelope, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                                { icon: FaPhone, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                                { icon: FaMapMarkerAlt, label: personalInfo.location, href: "#" },
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent-start)] transition-all group"
                                    style={{ background: "var(--bg-secondary)" }}
                                >
                                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <item.icon size={16} />
                                    </div>
                                    <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--accent-start)] transition-colors break-all">
                                        {item.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">Connect with me</p>
                            <div className="flex gap-3">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 rounded-xl border border-[var(--border)] hover:border-[var(--accent-start)] text-[var(--text-secondary)] hover:text-[var(--accent-start)] transition-all"
                                        style={{ background: "var(--bg-secondary)" }}
                                        aria-label={label}
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-3 card p-8"
                    >
                        <div className="space-y-5">
                            {/* Name */}
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                                    {t.contact.name}
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] focus:border-[var(--accent-start)] focus:ring-2 focus:ring-[var(--accent-start)]/20 outline-none transition-all text-sm"
                                    style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                                    placeholder={t.contact.name}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                                    {t.contact.email}
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] focus:border-[var(--accent-start)] focus:ring-2 focus:ring-[var(--accent-start)]/20 outline-none transition-all text-sm"
                                    style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                                    placeholder={t.contact.email}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                                    {t.contact.message}
                                </label>
                                <textarea
                                    id="contact-message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] focus:border-[var(--accent-start)] focus:ring-2 focus:ring-[var(--accent-start)]/20 outline-none transition-all text-sm resize-none"
                                    style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
                                    placeholder={t.contact.message}
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={status === "sending"}
                                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(124,58,237,0.25)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-6 py-3.5 rounded-xl gradient-bg text-white font-semibold flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
                            >
                                {status === "sending" ? (
                                    <>{t.contact.sending}</>
                                ) : (
                                    <>
                                        <FaPaperPlane /> {t.contact.send}
                                    </>
                                )}
                            </motion.button>

                            {/* Status messages */}
                            {status === "success" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-sm font-semibold text-green-500"
                                >
                                    ✅ {t.contact.success}
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-sm font-semibold text-red-500"
                                >
                                    ❌ {t.contact.error}
                                </motion.p>
                            )}
                        </div>
                    </motion.form>
                </div>
            </div>
        </SectionWrapper>
    );
}
