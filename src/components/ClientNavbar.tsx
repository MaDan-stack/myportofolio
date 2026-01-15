'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { profileData } from '@/lib/data';
// Import ikon
import { FiHome, FiGrid, FiUser, FiMail, FiAward } from "react-icons/fi";

// Definisi data navigasi agar mudah di-manage dan di-looping
const navLinks = [
  { name: "Home", href: "#home", icon: <FiHome /> },
  { name: "Projects", href: "#projects", icon: <FiGrid /> },
  { name: "Certificates", href: "#certificates", icon: <FiAward /> },
  { name: "About", href: "#about", icon: <FiUser /> },
  { name: "Contact", href: "#contact", icon: <FiMail /> },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    // LOGIC: Deteksi Section saat Scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset 200px agar deteksi lebih awal

            for (const link of navLinks) {
                const sectionId = link.href.substring(1); // ambil id tanpa #
                const element = document.getElementById(sectionId);

                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    // Cek apakah posisi scroll berada di dalam area section ini
                    if (
                        scrollPosition >= offsetTop && 
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(sectionId);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Panggil sekali saat mount untuk set active awal
        handleScroll();
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-black/5">
                    {/* Background Glass */}
                    <div className="absolute inset-0 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-xl border border-light-border/50 dark:border-dark-border/50" />

                    <div className="relative px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            className="text-lg md:text-xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            {profileData.name}
                        </motion.div>

                        {/* Navigation Links (Looping Data) */}
                        <div className="hidden md:flex items-center gap-2">
                            {navLinks.map((link) => (
                                <NavLink 
                                    key={link.name}
                                    href={link.href} 
                                    icon={link.icon}
                                    isActive={activeSection === link.href.substring(1)}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Bottom Glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
                </div>
            </div>
        </motion.nav>
    );
}

// Komponen NavLink yang dimodifikasi menerima prop `isActive`
function NavLink({ 
    href, 
    icon, 
    children, 
    isActive 
}: { 
    href: string; 
    icon: React.ReactNode; 
    children: React.ReactNode; 
    isActive: boolean;
}) {
    return (
        <motion.a
            href={href}
            // Logic scroll smooth saat diklik
            onClick={(e) => {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`
                relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300
                ${isActive 
                    ? "text-accent-primary bg-accent-primary/10" // Style saat Aktif
                    : "text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-primary hover:bg-accent-primary/5" // Style saat Tidak Aktif
                }
            `}
            whileHover={{ y: -2 }}
        >
            <span className="text-lg relative z-10">{icon}</span>
            <span className="relative z-10">{children}</span>

            {/* Indikator Garis Bawah (Hanya muncul jika aktif) */}
            {isActive && (
                <motion.span 
                    layoutId="activeNav"
                    className="absolute inset-0 border border-accent-primary/20 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
        </motion.a>
    );
}