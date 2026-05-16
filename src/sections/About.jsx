import React from 'react';
import { MapPin, GraduationCap, CheckCircle, Download } from 'lucide-react';
import profileImage from '../assets/Mohit image.png';

const About = () => {
  const stats = [
    { label: "Problems Solved", value: "400+" },
    { label: "Hackathons", value: "National Level" }, 
    { label: "Open Source", value: "Contributor" },
    { label: "Current CGPA", value: "9.5/10" }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-background/50 transition-colors duration-300 relative z-10 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">
            — The Engineer Behind The Code —
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-textMain mb-4 transition-colors duration-300">
            The Mind <span className="text-primary">&</span> The Machine
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-textMuted font-mono text-sm uppercase tracking-widest transition-colors duration-300">
            B.Tech CSE • Full Stack • AI/ML • Freelancer
          </p>
        </div>

        {/* Main Grid: Profile Card (Left) + Story (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col items-center relative overflow-hidden group hover:border-primary/40 dark:hover:border-primary/40 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-500">
            
            {/* 1. Image Section */}
            <div className="w-32 h-32 rounded-full border border-slate-200 dark:border-white/10 p-1 mb-6 relative group-hover:border-primary transition-colors duration-500 bg-white dark:bg-transparent shadow-sm">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-[#111]">
                <img 
                  src={profileImage} 
                  alt="Mohit Pal" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://ui-avatars.com/api/?name=Mohit+Pal&background=0D0D0D&color=fff&size=256";
                  }}
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-textMain mb-2 tracking-wide transition-colors duration-300">Mohit Pal</h3>
            
            <div className="flex flex-col gap-3 w-full text-sm text-slate-600 dark:text-slate-300 font-medium mb-6">
              <div className="flex items-center gap-3 bg-white dark:bg-white/5 px-4 py-3 rounded-xl border border-slate-200 dark:border-white/5 transition-colors duration-300">
                <GraduationCap size={18} className="text-primary" />
                <span className="truncate">VIT Bhopal University</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-white/5 px-4 py-3 rounded-xl border border-slate-200 dark:border-white/5 transition-colors duration-300">
                <MapPin size={18} className="text-primary" />
                <span>Madhya Pradesh, India</span>
              </div>
            </div>

            {/* UPGRADED & MOVED: High-Visibility Resume Download Button */}
            <a 
              href="https://drive.google.com/file/d/1xyezF_Hc0PQaY-ohicKSaZ_2oT9JThjr/view?usp=sharing" 
              target="_blank"
              rel="noreferrer"
              className="w-full mb-8 bg-primary hover:bg-[#8B40C4] text-white font-bold rounded-xl px-4 py-4 flex items-center justify-center gap-2 transition-all duration-300 group shadow-lg shadow-primary/30 hover:shadow-primary/50"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
              View My Resume
            </a>

            {/* Availability Badge */}
            <div className="w-full py-3 rounded-xl border border-green-500/20 bg-green-50 dark:bg-green-500/10 flex items-center justify-center gap-2 mb-8 transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-green-600 dark:text-green-400 tracking-widest uppercase">Available Now</span>
            </div>

            {/* Quick Stats */}
            <div className="w-full space-y-4 mt-auto">
              {stats.map((stat, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-white/5 pb-3 last:border-0 last:pb-0 transition-colors duration-300">
                  <span className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-wider">{stat.label}</span>
                  <span className="text-slate-900 dark:text-textMain font-bold">{stat.value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: The Story */}
          <div className="lg:col-span-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-center hover:border-primary/40 dark:hover:border-primary/40 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-500">
            
            <p className="text-slate-600 dark:text-textMuted text-lg leading-relaxed mb-8 transition-colors duration-300">
              <span className="float-left text-7xl font-serif font-bold text-primary leading-[0.8] mr-4 mt-2">P</span>
              assionate about code and driven by a genuine curiosity — I am a <strong className="text-slate-900 dark:text-textMain font-semibold transition-colors duration-300">B.Tech CSE student at VIT Bhopal University</strong>. Honored as a STARS Scholar for academic excellence, I love blending rigorous algorithmic logic with creative design to engineer digital experiences that truly matter.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 my-8 py-2">
              <p className="text-xl md:text-2xl font-serif italic text-slate-800 dark:text-white/90 leading-relaxed transition-colors duration-300">
                "I believe great software is where <span className="text-primary font-bold">efficiency</span> meets <span className="text-primary font-bold">creativity</span> — and I build exactly that."
              </p>
            </blockquote>

            <p className="text-slate-600 dark:text-textMuted text-lg leading-relaxed mb-10 transition-colors duration-300">
              My journey is defined by continuous growth. Whether I am optimizing complex data structures, contributing to major open-source repositories like <strong className="text-slate-900 dark:text-textMain font-semibold transition-colors duration-300">Matplotlib</strong>, or racing the clock as a finalist in national-level hackathons, I thrive on turning ambitious ideas into scalable, real-world solutions.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {[
                "Crafting responsive, user-centric, and highly performant web applications.",
                "Expanding into Python, AI-driven tools, and intelligent backend systems.",
                "Driven by collaborative problem-solving and creating a lasting digital impact."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 transition-colors duration-300">
                  <CheckCircle size={20} className="text-primary shrink-0 mt-1" />
                  <span className="text-slate-700 dark:text-slate-300 text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;