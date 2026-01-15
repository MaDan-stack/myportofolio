// src/lib/data.tsx

import React from "react";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiJavascript, SiGit, SiPostgresql,
  SiFigma, SiVercel, SiPostman, SiMysql, SiGooglegemini, SiNetlify, SiRailway, SiExpress
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

// UPDATE: Tambahkan imageUrl di sini
export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url: string;
  imageUrl?: string; // Field baru untuk gambar sertifikat
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
  bio: "Mahasiswa Informatika Semester 6yang fokus pada Web Development. Berpengalaman membangun aplikasi Fullstack menggunakan React.js, Node.js, dan PostgreSql. Suka memecahkan masalah kompleks dan menciptakan UI yang interaktif serta performa tinggi.",
  email: "26oktoberramadhan@gmail.com",
  phone: "+6283141931776",
  github: "https://github.com/madan-stack", 
  linkedin: "https://linkedin.com/in/muhammad-nur-ramadhan",
  instagram: "https://instagram.com/madan_stack",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Katalog Restoran PWA",
    description: "Aplikasi katalog restoran dengan fitur Progressive Web App (PWA), favorite restaurant (IDB), dan End-to-End Testing.",
    technologies: ["JavaScript", "PWA", "Webpack", "Jasmine"],
    imageUrl: "/projects/restaurant.jpg",
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
  {
    id: 4,
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
    imageUrl: "/certificates/Fundamental-Back-End.png" 
  },
  {
    id: 2,
    name: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    date: "27 Oktober 2025",
    url: "https://www.dicoding.com/certificates/QLZ96654MZ5D",
    imageUrl: "/certificates/Back-End-Pemula.png"
  },
  {
    id: 3,
    name: "Belajar Fundamental Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "17 September 2025",
    url: "https://www.dicoding.com/certificates/1OP8JW8VLPQK",
    imageUrl: "/certificates/Fundamental-Aplikasi-Web.png"
  },
  {
    id: 4,
    name: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "24 September 2025",
    url: "https://www.dicoding.com/certificates/JLX15DNRNZ72",
    imageUrl: "/certificates/Membuat-Aplikasi-Web-dengan-React.png"
  },
  {
    id: 5,
    name: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "17 September 2025",
    url: "https://www.dicoding.com/certificates/L4PQ28R4OZO1",
    imageUrl: "/certificates/Membuat-Front-End-Web-untuk-Pemula.png"
  },
  {
    id: 6,
    name: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "03 September 2025",
    url: "https://www.dicoding.com/certificates/0LZ05G573X65",
    imageUrl: "/certificates/Dasar-Pemrograman-Web.png"
  },
  {
    id: 7,
    name: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "10 September 2025",
    url: "https://www.dicoding.com/certificates/JMZVV91K3ZN9",
    imageUrl: "/certificates/Dasar-Pemrograman-JavaScript.png"
  },
  {
    id: 8,
    name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    date: "27 Agustus 2025",
    url: "https://www.dicoding.com/certificates/GRX5JL9KKX0M",
    imageUrl: "/certificates/Memulai-Dasar-Pemrograman-untuk-Menjadi-Pengembang-Software.png"
  },
  {
    id: 9,
    name: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "08 Oktober 2025",
    url: "https://www.dicoding.com/certificates/EYX4KV4Q6PDL",
    imageUrl: "/certificates/Belajar-Dasar-AI.png"
  },
];

export const skillsData: { row1: SkillItem[]; row2: SkillItem[] } = {
  row1: [
    { name: "React", icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-[#38BDF8]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" /> },
    { name: "Express.js", icon: <SiExpress className="w-6 h-6 text-[#000000]" /> },
    { name: "Netlify", icon: <SiNetlify className="w-6 h-6 text-[#000000]" /> },
    { name: "Railway", icon: <SiRailway className="w-6 h-6 text-[#000000]" /> },
    
  ],
  row2: [
    { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" /> },
    { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-[#00758F]" /> },
    { name: "Git", icon: <SiGit className="w-6 h-6 text-[#F05032]" /> },
    { name: "Postman", icon: <SiPostman className="w-6 h-6 text-[#FF6C37]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-[#336791]" /> },
    { name: "Figma", icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" /> },
    { name: "Vercel", icon: <SiVercel className="w-6 h-6 text-[#000000]" /> },
    { name: "Google Gemini", icon: <SiGooglegemini className="w-6 h-6 text-[#000000]" /> },

  ],
};