// src/lib/data.tsx

import React from "react";
// Import ikon dari react-icons/si (Simple Icons)
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiNodedotjs, 
  SiJavascript, 
  SiGit, 
  SiFigma, 
  SiVercel,
  SiStripe,
  SiFirebase
} from "react-icons/si";

// --- INTERFACES ---

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ProfileData {
  name: string;
  nickname: string;
  title: string;
  avatar: string;
  bio: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface SkillItem {
  name: string;
  icon: React.JSX.Element;
}

// --- DATA ---

export const profileData: ProfileData = {
  name: "Muhammad Nur Ramadhan",
  nickname: "Madan",
  title: "Junior FullStack Developer",
  avatar: "/fotoku.jpeg", 
  bio: "Passionate about building beautiful, performant web experiences with modern technologies. Specializing in React, Next.js, and creating delightful user interfaces.",
  email: "26oktoberramadhan@gmail.com",
  phone: "+6283141931776",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  twitter: "https://twitter.com/johndoe",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    imageUrl: "/projects/ecommerce.jpg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Firebase", "Framer Motion"],
    imageUrl: "/projects/taskapp.jpg",
    demoUrl: "https://taskapp.example.com",
    githubUrl: "https://github.com/johndoe/taskapp",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with real-time data, 7-day forecast, and interactive maps.",
    technologies: ["Next.js", "OpenWeather API", "Chart.js"],
    imageUrl: "/projects/weather.jpg",
    githubUrl: "https://github.com/johndoe/weather",
    featured: false,
  },
  
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "17 September 2025",
    url: "https://www.dicoding.com/certificates/L4PQ28R4OZO1",
  },
  {
    id: 2,
    name: "Belajar Fundamental Back-End dengan JavaScript",
    issuer: "Dicoding Indonesia",
    date: "30 November 2025",
    url: "https://www.dicoding.com/certificates/0LZ05MN53X65",
  },
  {
    id: 3,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    url: "#",
  },
  {
    id: 4,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    url: "#",
  },
  {
    id: 5,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    url: "#",
  },
];

export const skillsData: { row1: SkillItem[]; row2: SkillItem[] } = {
  // Baris 1: Frontend
  row1: [
    { name: "React", icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-[#38BDF8]" /> },
    { name: "Framer Motion", icon: <SiFramer className="w-6 h-6 text-black dark:text-white" /> },
  ],
  // Baris 2: Backend & Tools
  row2: [
    { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" /> },
    { name: "Git", icon: <SiGit className="w-6 h-6 text-[#F05032]" /> },
    { name: "Figma", icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" /> },
    { name: "Vercel", icon: <SiVercel className="w-6 h-6 text-black dark:text-white" /> },
  ],
};