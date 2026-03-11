"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * PortfolioApp — Composes all portfolio sections.
 * This client component is imported by the server page.
 */
export default function PortfolioApp() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Journey />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Testimonials />
                    <Blog />
                    <Contact />
                </main>
                <Footer />
            </LanguageProvider>
        </ThemeProvider>
    );
}
