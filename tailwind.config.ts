import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Wajib 'class' agar ThemeProvider bekerja
  theme: {
    extend: {
      colors: {
        // --- Dark Mode Colors (Railway.app inspired) ---
        dark: {
          bg: '#0a0a0a',          // Deep charcoal background
          surface: '#141414',     // Slightly lighter surface
          card: '#1a1a1a',        // Card background
          border: '#2a2a2a',      // Border color
          hover: '#252525',       // Hover state
        },
        // --- Light Mode Colors ---
        light: {
          bg: '#ffffff',          // Pure white background
          surface: '#f8f9fa',     // Light gray surface
          card: '#ffffff',        // Card background
          border: '#e5e7eb',      // Border color
          hover: '#f3f4f6',       // Hover state
        },
        // --- Accent Colors ---
        accent: {
          primary: '#8b5cf6',      // Vibrant purple
          secondary: '#6366f1',    // Indigo
          hover: '#a78bfa',        // Lighter purple
          glow: 'rgba(139, 92, 246, 0.3)', 
        },
        // --- Text Colors ---
        text: {
          dark: {
            primary: '#f5f5f5',    
            secondary: '#a3a3a3',  
            muted: '#737373',      
          },
          light: {
            primary: '#171717',    
            secondary: '#525252',  
            muted: '#737373',      
          },
        },
      },
      // Animasi tambahan
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': 'left center' },
          '50%': { 'background-position': 'right center' },
        },
      },
    },
  },
  plugins: [],
};

export default config;