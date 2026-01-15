'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import SkillSlider from '@/components/SkillSlider';
import FadeIn from '@/components/FadeIn';
import MagneticButton from '@/components/MagneticButton';
import DecryptedText from '@/components/react-bits/DecryptedText'; 
import ShinyText from '@/components/react-bits/ShinyText';       
import { profileData, projects, skillsData, certificates, type Certificate } from '@/lib/data';
import ContactForm from '@/components/ContactForm';
import Meteors from '@/components/Meteors'; 

export default function Home() {
  const [showFullName, setShowFullName] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFullName((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden relative bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      
      {/* === BACKGROUND GRID === */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-light-bg dark:to-dark-bg pointer-events-none z-0" />

      {/* ================= HERO SECTION (Glass + Meteor) ================= */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10 overflow-hidden">
        
        {/* Meteor hanya di Hero Section */}
        <div className="absolute inset-0 h-full w-full pointer-events-none z-0">
             <Meteors number={15} />
        </div>

        {/* Blobs untuk nuansa warna */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/20 rounded-full blur-[100px] -z-10 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-20">
          
          {/* Foto Profil dengan Efek Glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-40 h-40 md:w-60 md:h-60 mb-8"
          >
            <div className="absolute inset-0 bg-accent-primary rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 bg-white/10 backdrop-blur-sm shadow-2xl ring-1 ring-white/30">
              <Image 
                src={profileData.avatar} 
                alt={profileData.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <motion.div 
              className="absolute -bottom-2 -right-2 bg-white/10 dark:bg-black/40 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-lg z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">👋</span>
            </motion.div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
                <ShinyText text="Available for Work" disabled={false} speed={3} className="text-accent-primary font-medium text-sm" />
            </div>
          </motion.div>

          {/* Nama (Animated) */}
          <div className="h-24 md:h-32 mb-2 flex items-center justify-center overflow-hidden relative w-full px-4">
            <AnimatePresence mode="wait">
              {showFullName ? (
                <motion.h1
                  key="full"
                  className="text-3xl md:text-6xl font-bold text-text-light-primary dark:text-text-dark-primary tracking-tight absolute text-center leading-tight"
                  initial={{ y: "100%", opacity: 0 }} 
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {profileData.name}
                </motion.h1>
              ) : (
                <motion.h1
                  key="nick"
                  className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent tracking-tight absolute text-center leading-tight"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {profileData.nickname || "Madan"}
                </motion.h1>
              )}
            </AnimatePresence>
          </div>

          {/* Job Title */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="mb-8"
          >
             <h2 className="text-xl md:text-2xl font-semibold text-text-light-secondary dark:text-text-dark-secondary flex justify-center">
                <DecryptedText
                    text={profileData.title}
                    animateOn="view"
                    revealDirection="center"
                    speed={100}
                    maxIterations={20}
                    className="text-accent-primary font-bold" 
                    parentClassName="inline-block"
                    characters="ABCD1234!?" 
                />
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto mb-12 leading-relaxed backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {profileData.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <MagneticButton 
              href="#projects"
              className="px-8 py-4 rounded-full font-medium bg-accent-primary hover:bg-accent-hover text-white shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 transition-all"
            >
              View My Work
            </MagneticButton>

             <MagneticButton 
              href="#contact"
              className="px-8 py-4 rounded-full font-medium border border-white/20 bg-white/5 hover:bg-white/10 text-text-light-primary dark:text-white backdrop-blur-md transition-all"
            >
              Contact Me
            </MagneticButton>

            <MagneticButton 
              href="/cv_muhammad_nur_ramadhan.pdf" 
              target="_blank"
              className="px-8 py-4 rounded-full font-medium border border-white/20 bg-white/5 hover:bg-white/10 text-text-light-primary dark:text-white backdrop-blur-md flex items-center gap-2 transition-all"
            >
              <span>Download CV</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-light-primary dark:text-text-dark-primary">Featured Projects</h2>
              <div className="w-20 h-1.5 bg-accent-primary mx-auto rounded-full mb-6"></div>
              <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto backdrop-blur-sm">
                A selection of projects that showcase my passion for building clean and efficient web applications.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                {/* ProjectCard harus support style transparan atau dibungkus div glassmorphism */}
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden hover:border-accent-primary/30 transition-all duration-300">
                   <ProjectCard project={project} index={index} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES SECTION ================= */}
       <section id="certificates" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-light-primary dark:text-text-dark-primary">
                Certifications
              </h2>
              <div className="w-20 h-1.5 bg-accent-primary mx-auto rounded-full"></div>
              <p className="mt-4 text-text-light-secondary dark:text-text-dark-secondary backdrop-blur-sm">
                Continuous learning and validation of my skills.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <FadeIn key={cert.id} delay={index * 0.1}>
                {/* Glassmorphic Certificate Card */}
                <div
                  onClick={() => setSelectedCertificate(cert)}
                  className="group cursor-pointer rounded-2xl bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-lg overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-48 w-full bg-black/20 overflow-hidden">
                    {cert.imageUrl ? (
                      <Image
                        src={cert.imageUrl}
                        alt={cert.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-white/20">
                         <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M13 9h-2v2h2V9zm-2 4h2v6h-2v-6zm4-12c-1.1 0-2 .9-2 2v2h-4V3c0-1.1-.9-2-2-2s-2 .9-2 2v2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-2V3c0-1.1-.9-2-2-2s-2 .9-2 2z"/></svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <span className="text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 text-sm font-medium">
                          View Certificate
                       </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-accent-primary/10 text-accent-primary font-medium border border-accent-primary/20">
                          {cert.issuer}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-text-light-primary dark:text-text-dark-primary group-hover:text-accent-primary transition-colors line-clamp-2">
                      {cert.name}
                    </h3>
                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-sm text-text-light-secondary dark:text-text-dark-secondary">
                      <span>{cert.date}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT & SKILLS SECTION (Glass + Shape) ================= */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <FadeIn>
            {/* CONTAINER GLASSMORPHISM UTAMA */}
            <div className="relative rounded-[2.5rem] p-8 md:p-16 border border-white/20 bg-white/5 dark:bg-black/20 backdrop-blur-2xl shadow-2xl overflow-hidden">
                
                {/* Dekorasi Gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent dark:from-white/5 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-primary/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-secondary/20 rounded-full blur-3xl -z-10" />

                <div className="relative z-10">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-light-primary dark:text-text-dark-primary">About Me</h2>
                      <div className="w-20 h-1.5 bg-accent-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="text-center mb-16">
                      <p className="text-lg md:text-xl text-text-light-secondary dark:text-text-dark-secondary mb-6 leading-relaxed font-light">
                        I am a dedicated developer who loves turning complex problems into simple, beautiful, and intuitive designs. 
                        My journey in web development started with a curiosity for how things work on the internet, and it has evolved into a passion for building robust applications.
                      </p>
                      
                      <div className="flex justify-center">
                          <MagneticButton
                            href="#contact"
                            className="inline-flex items-center gap-3 text-accent-primary font-medium text-lg px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-accent-primary/20 transition-all group backdrop-blur-md"
                          >
                            <span className="group-hover:underline decoration-2 underline-offset-4">Let's chat</span>
                            <motion.span className="inline-block text-xl" variants={{ hover: { x: 5 } }} transition={{ type: "spring", stiffness: 400 }}>&rarr;</motion.span>
                          </MagneticButton>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent my-12"></div>

                    {/* Tech Stack dengan Jarak Rapat */}
                    <div className="relative flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-8 text-center text-text-light-primary dark:text-text-dark-primary">My Tech Stack</h3>
                        <SkillSlider skills={skillsData.row1} direction="left" />
                        <div className="h-3"></div> {/* Jarak Rapat */}
                        <SkillSlider skills={skillsData.row2} direction="right" />
                    </div>
                </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ================= CONTACT SECTION (Glass Theme) ================= */}
      <section id="contact" className="py-24 px-6 relative z-10">
         <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-light-primary dark:text-text-dark-primary">Let's Connect</h2>
                <div className="w-20 h-1.5 bg-accent-primary mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto backdrop-blur-sm">
                    Have a project in mind or just want to say hi? Feel free to send me a message or connect via social media.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Form dengan Glass Effect */}
                <div className="p-11 rounded-3xl border border-white/20 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-text-light-primary dark:text-text-dark-primary flex items-center gap-2">
                       <span className="text-accent-primary">✉️</span> Send a Message
                    </h3>
                    <ContactForm />
                </div>

                {/* Info Cards dengan Glass Effect */}
                <div className="flex flex-col gap-6">
                      {[
                        { href: `mailto:${profileData.email}`, icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, title: "Email Me", text: profileData.email },
                        { href: profileData.linkedin, icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, title: "LinkedIn", text: "Connect professionally" },
                        { href: profileData.github, icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, title: "GitHub", text: "See my code" },
                        { href: `https://wa.me/${profileData.phone.replace(/[^0-9]/g, '')}`, icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>, title: "WhatsApp", text: "Quick Chat" }
                      ].map((contact, idx) => (
                        <a key={idx} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-accent-primary/50 transition-all group hover:-translate-y-1 shadow-lg backdrop-blur-md">
                           <div className="p-4 rounded-full bg-accent-primary/10 text-accent-primary group-hover:scale-110 transition-transform">
                             {contact.icon}
                           </div>
                           <div>
                               <h4 className="font-bold text-text-light-primary dark:text-text-dark-primary">{contact.title}</h4>
                               <span className="text-sm text-text-light-secondary dark:text-text-dark-secondary">{contact.text}</span>
                           </div>
                        </a>
                      ))}
                </div>
              </div>
            </FadeIn>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-center text-text-light-muted dark:text-text-dark-muted text-sm relative z-10">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
      </footer>

      {/* ================= MODAL CERTIFICATE ================= */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} 
              className="bg-light-card dark:bg-dark-card border border-white/20 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-light-surface dark:bg-dark-surface hover:bg-red-500 hover:text-white transition-colors z-10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col gap-6 overflow-y-auto">
                <div className="pr-10">
                  <h3 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                    {selectedCertificate.name}
                  </h3>
                  <div className="flex gap-2 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                    <span className="font-semibold text-accent-primary">{selectedCertificate.issuer}</span>
                    <span>•</span>
                    <span>{selectedCertificate.date}</span>
                  </div>
                </div>

                <div className="w-full rounded-xl overflow-hidden bg-light-surface dark:bg-dark-surface border border-white/10 flex items-center justify-center">
                  {selectedCertificate.imageUrl ? (
                    <Image
                      src={selectedCertificate.imageUrl}
                      alt={selectedCertificate.name}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto max-h-[60vh] object-contain" 
                    />
                  ) : (
                    <div className="text-center p-12 opacity-50">
                       <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                       </svg>
                       <p>Preview image not available</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-3 mt-auto">
                   <button
                    onClick={() => setSelectedCertificate(null)}
                    className="px-4 py-2 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/5 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={selectedCertificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-accent-primary text-white hover:bg-accent-hover transition-colors flex items-center gap-2"
                  >
                    <span>Verify Credential</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}