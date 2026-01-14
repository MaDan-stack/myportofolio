'use client';

import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

/**
 * ThemeToggle Component
 * Toggle button untuk switch antara dark dan light mode
 * Menggunakan Framer Motion untuk animasi yang smooth
 */
export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg bg-dark-surface/50 dark:bg-dark-surface/50 
                 border border-dark-border/50 dark:border-dark-border/50
                 backdrop-blur-md hover:bg-dark-hover/50 dark:hover:bg-dark-hover/50
                 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Sun Icon (Light Mode) */}
                <motion.svg
                    className="absolute w-6 h-6 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ scale: theme === 'dark' ? 0 : 1, rotate: theme === 'dark' ? 90 : 0 }}
                    animate={{ scale: theme === 'dark' ? 0 : 1, rotate: theme === 'dark' ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </motion.svg>

                {/* Moon Icon (Dark Mode) */}
                <motion.svg
                    className="absolute w-6 h-6 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ scale: theme === 'light' ? 0 : 1, rotate: theme === 'light' ? -90 : 0 }}
                    animate={{ scale: theme === 'light' ? 0 : 1, rotate: theme === 'light' ? -90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </motion.svg>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 -z-10
                      bg-accent-primary/10 blur-xl" />
        </motion.button>
    );
}
