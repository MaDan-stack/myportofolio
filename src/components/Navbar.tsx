'use client';

import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { profileData } from '@/lib/data';

/**
 * Navbar Component dengan Glassmorphism Effect
 */
export default function Navbar() {
    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Glassmorphism Container */}
                <div className="relative rounded-2xl overflow-hidden">
                    {/* Background with blur effect - PERBAIKAN: className dijadikan satu baris */}
                    <div className="absolute inset-0 bg-light-card/70 dark:bg-dark-card/70 backdrop-blur-md border border-light-border/50 dark:border-dark-border/50" />

                    {/* Content */}
                    <div className="relative px-6 py-4 flex items-center justify-between">
                        {/* Logo/Name */}
                        <motion.div
                            // PERBAIKAN: className dijadikan satu baris
                            className="text-xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            {profileData.name}
                        </motion.div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <NavLink href="#home">Home</NavLink>
                            <NavLink href="#projects">Projects</NavLink>
                            <NavLink href="#about">About</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </div>

                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>

                    {/* Bottom glow effect - PERBAIKAN: className dijadikan satu baris */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
                </div>
            </div>
        </motion.nav>
    );
}

// Navigation Link Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <motion.a
            href={href}
            // PERBAIKAN: className dijadikan satu baris
            className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-primary dark:hover:text-accent-primary transition-colors duration-200 relative group"
            whileHover={{ y: -2 }}
        >
            {children}
            {/* Animated underline - PERBAIKAN: className dijadikan satu baris */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary group-hover:w-full transition-all duration-300" />
        </motion.a>
    );
}