"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * SectionWrapper — Reusable scroll-animation wrapper.
 * Fades in and slides up content when it enters the viewport.
 */
export default function SectionWrapper({ children, className = "", id = "" }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={`section ${className}`}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
}
