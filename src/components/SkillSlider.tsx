// src/components/SkillSlider.tsx
'use client';

import { SkillItem } from '@/lib/data';

interface SkillSliderProps {
  skills: SkillItem[];
  direction: 'left' | 'right';
}

export default function SkillSlider({ skills, direction }: SkillSliderProps) {
  // Tentukan kelas animasi berdasarkan prop arah
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  // Kita menggandakan array skills ([...skills, ...skills])
  // Ini trik untuk membuat efek infinite loop yang mulus.
  // Saat set pertama selesai digulir, set kedua langsung menggantikannya tanpa jeda.
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="w-full overflow-hidden relative hover-pause py-4">
       {/* Gradien pudar di kiri dan kanan agar terlihat seperti muncul/hilang perlahan */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-light-bg to-transparent dark:from-dark-bg z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-light-bg to-transparent dark:from-dark-bg z-10 pointer-events-none"></div>

      {/* Track yang bergerak */}
      <div className={`flex gap-6 w-max ${animationClass}`}>
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index} // Menggunakan index karena ada item duplikat
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-light-card/80 dark:bg-dark-card/80 border border-light-border/50 dark:border-dark-border/50 backdrop-blur-md shadow-sm hover:border-accent-primary/50 transition-colors group cursor-default"
          >
            <span className="group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
            </span>
            <span className="text-sm md:text-base font-medium text-text-light-primary dark:text-text-dark-primary whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}