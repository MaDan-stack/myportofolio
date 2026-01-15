'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover';
  [key: string]: any;
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  animateOn = 'hover',
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let currentIteration = 0;

    const getNextChar = (char: string) => {
      if (useOriginalCharsOnly) {
        const index = Math.floor(Math.random() * text.length);
        return text[index];
      }
      const index = Math.floor(Math.random() * characters.length);
      return characters[index];
    };

    const runAnimation = () => {
      if (currentIteration >= maxIterations) {
        setDisplayText(text);
        return;
      }

      setDisplayText((prev) =>
        prev
          .split('')
          .map((char, index) => {
            if (char === ' ') return char;
            if (sequential) {
              if (revealDirection === 'start') {
                if (index < (currentIteration / maxIterations) * text.length) return text[index];
              } else if (revealDirection === 'end') {
                if (index > text.length - (currentIteration / maxIterations) * text.length) return text[index];
              } else if (revealDirection === 'center') {
                const center = text.length / 2;
                const progress = (currentIteration / maxIterations) * (text.length / 2);
                if (index >= center - progress && index <= center + progress) return text[index];
              }
            }
            return getNextChar(char);
          })
          .join('')
      );
      currentIteration++;
    };

    if ((animateOn === 'view' && isScrolled) || (animateOn === 'hover' && isHovering)) {
      interval = setInterval(runAnimation, speed);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    useOriginalCharsOnly,
    characters,
    animateOn,
    isHovering,
    isScrolled,
  ]);

  useEffect(() => {
    if (animateOn !== 'view') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsScrolled(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateOn]);

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-nowrap ${parentClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </motion.span>
  );
}