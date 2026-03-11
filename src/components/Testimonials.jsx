"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/portfolio";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * Testimonials — Auto-rotating carousel with manual controls.
 */
export default function Testimonials() {
    const { t } = useLanguage();
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (index) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    };

    const next = () => {
        setDirection(1);
        setCurrent((c) => (c + 1) % testimonials.length);
    };

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
    };

    const testimonial = testimonials[current];

    return (
        <SectionWrapper id="testimonials">
            <div className="max-w-3xl mx-auto">
                <h2 className="section-title">
                    <span className="gradient-text">{t.testimonials.title}</span>
                </h2>
                <p className="section-subtitle">{t.testimonials.subtitle}</p>

                {/* Carousel */}
                <div className="relative card p-8 sm:p-10 min-h-[280px] flex flex-col justify-center overflow-hidden">
                    <FaQuoteLeft className="absolute top-6 left-6 text-3xl text-[var(--accent-start)] opacity-20" />

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="text-center"
                        >
                            {/* Quote */}
                            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 italic">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                    {testimonial.avatar}
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-[var(--text-primary)]">{testimonial.name}</p>
                                    <p className="text-sm text-[var(--accent-start)]">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-[var(--accent-light)] text-[var(--text-muted)] hover:text-[var(--accent-start)] transition-all"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-[var(--accent-light)] text-[var(--text-muted)] hover:text-[var(--accent-start)] transition-all"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current
                                    ? "gradient-bg w-8"
                                    : "bg-[var(--border)] hover:bg-[var(--accent-end)]"
                                }`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
