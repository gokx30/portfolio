"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

/**
 * Providers — Wraps the app with Theme and Language contexts.
 * Separated as a client component to be used in the server layout.
 */
export default function Providers({ children }) {
    return (
        <ThemeProvider>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </ThemeProvider>
    );
}
