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
  SiPostman,
  SiMysql,
  SiPrisma
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
  github: string;
  linkedin: string;
  instagram?: string;
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
  // Bio diperbarui agar lebih menjual
  bio: "Mahasiswa Informatika yang fokus pada Web Development. Berpengalaman membangun aplikasi Fullstack menggunakan Next.js dan Node.js. Suka memecahkan masalah kompleks dan menciptakan UI yang interaktif serta performa tinggi.",
  email: "26oktoberramadhan@gmail.com",
  phone: "+6283141931776",
  github: "https://github.com/madan-stack", 
  linkedin: "https://linkedin.com/in/muhammad-nur-ramadhan", // Pastikan link ini benar atau edit
  instagram: "https://instagram.com/madan_stack",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Katalog Restoran PWA",
    description: "Aplikasi katalog restoran dengan fitur Progressive Web App (PWA), favorite restaurant (IDB), dan End-to-End Testing.",
    technologies: ["JavaScript", "PWA", "Webpack", "Jasmine"],
    imageUrl: "/projects/restaurant.jpg", // Pastikan file gambar ada di public/projects/
    demoUrl: "https://restaurant-apps.vercel.app", 
    githubUrl: "https://github.com/madan-stack/restaurant-apps",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "Platform manajemen produk untuk UMKM dengan fitur CRUD, upload gambar, dan manajemen stok real-time.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    imageUrl: "/projects/ecommerce.jpg",
    demoUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/madan-stack/ecommerce",
    featured: true,
  },
  {
    id: 3,
    title: "Notes App API",
    description: "RESTful API untuk aplikasi catatan menggunakan Hapi.js dengan fitur autentikasi dan otorisasi.",
    technologies: ["Node.js", "Hapi.js", "Postman", "EC2"],
    imageUrl: "/projects/api-project.jpg",
    githubUrl: "https://github.com/madan-stack/notes-api",
    featured: false,
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "Belajar Fundamental Back-End dengan JavaScript",
    issuer: "Dicoding Indonesia",
    date: "30 November 2025",
    url: "https://www.dicoding.com/certificates/0LZ05MN53X65",
  },
  {
    id: 2,
    name: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "17 September 2025",
    url: "https://www.dicoding.com/certificates/L4PQ28R4OZO1",
  },
  {
    id: 3,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    url: "#", 
  },
];

export const skillsData: { row1: SkillItem[]; row2: SkillItem[] } = {
  // Baris 1: Frontend & Core
  row1: [
    { name: "React", icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-[#38BDF8]" /> },
    { name: "Framer Motion", icon: <SiFramer className="w-6 h-6 text-black dark:text-white" /> },
  ],
  // Baris 2: Backend, Database & Tools (Diperkaya)
  row2: [
    { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" /> },
    { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-[#00758F]" /> },
    { name: "Prisma", icon: <SiPrisma className="w-6 h-6 text-[#2D3748] dark:text-white" /> },
    { name: "Git", icon: <SiGit className="w-6 h-6 text-[#F05032]" /> },
    { name: "Postman", icon: <SiPostman className="w-6 h-6 text-[#FF6C37]" /> },
  ],
};