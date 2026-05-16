import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  // Skills Array
  const skills = [
    'C++', 'Python', 'JavaScript', 'React', 'Flask', 
    'TensorFlow', 'OpenCV', 'LLMs', 'RAG', 'Tailwind CSS', 
    'Framer Motion', 'Git & GitHub', 'Linux', 'VS Code', 'REST APIs'
  ];

  // --- Custom Typewriter Logic ---
  const phrases = [
    "Open to freelance projects",
    "Building AI-powered web apps",
    "Turning ideas into products",
    "Fine-tuning LLMs for real use",
    "Designing scalable REST APIs"
  ];
  
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typingSpeed = isDeleting ? 30 : 80; // Faster delete, natural typing

    const handleTyping = () => {
      if (!isDeleting && text === currentPhrase) {
        // Pause at the end of the phrase before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        // Move to the next phrase and start typing
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        // Perform the actual typing or deleting
        setText(prev => 
          isDeleting 
            ? currentPhrase.substring(0, prev.length - 1) 
            : currentPhrase.substring(0, prev.length + 1)
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);
  // -------------------------------

  return (
    <section className="min-h-[100svh] flex flex-col justify-center pt-24 pb-6 px-4 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto text-center z-10 relative">
        
        <motion.div style={{ y: yText, opacity: opacityText }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium tracking-widest uppercase mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Available for Freelance & Full-time
            </div>
            
            {/* Main Title Stack */}
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-[1.1] tracking-tight flex flex-col items-center">
              <span>Aspiring</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 py-1">
                Software Engineer
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 py-1">
                & AI Developer
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-slate-400 font-mono text-sm md:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
              Crafting scalable web architectures and intelligent AI systems that turn ideas into impactful products.
            </p>
            
            {/* Typewriter Terminal Text */}
            <div className="text-[#00FF41] font-mono text-sm md:text-base mb-8 flex items-center justify-center gap-1 h-6">
              <span>{'>'} {text}</span>
              <span className="w-2.5 h-5 bg-[#00FF41] animate-pulse"></span>
            </div>

            {/* Skill Pills Grid */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-3xl mx-auto">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-1.5 rounded-full text-xs font-mono border border-white/10 bg-white/5 text-slate-300 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
              <a href="#projects" className="group bg-white text-black hover:scale-105 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-3 w-full sm:w-auto shadow-2xl">
                Explore Projects 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="hover:scale-105 border border-white/20 text-white hover:border-primary px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto">
                Contact Me
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center justify-center opacity-60">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 mb-2 uppercase">Scroll</span>
              <div className="w-[1px] h-10 bg-gradient-to-b from-slate-400 to-transparent"></div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;