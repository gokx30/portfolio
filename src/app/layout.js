import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Gokul | MERN Stack Developer Portfolio",
  description:
    "Hi, I'm Gokul — a passionate MERN Stack Developer from Kerala, India. Explore my projects, skills, and experience in building modern full-stack web applications with React, Node.js, Express, and MongoDB.",
  keywords: [
    "Gokul",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "Portfolio",
    "Web Developer",
    "JavaScript",
  ],
  authors: [{ name: "Gokul" }],
  openGraph: {
    title: "Gokul | MERN Stack Developer",
    description:
      "Passionate MERN Stack Developer building modern, scalable web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
