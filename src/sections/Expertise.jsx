import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, TerminalSquare, Trophy, Award, Star } from 'lucide-react';

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 px-4 bg-white dark:bg-background/50 transition-colors duration-300 relative z-10 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">
            — The Proof Is In The Work —
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-textMain mb-4 transition-colors duration-300">
            Credentials <span className="text-primary">&</span> Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-textMuted max-w-2xl mx-auto text-lg transition-colors duration-300">
            Combining a strong academic foundation, competitive programming mastery, and practical experience to build scalable software solutions.
          </p>
        </motion.div>

        {/* 10/10 BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[minmax(250px,_auto)]">
          
          {/* Card 1: WIDE (Full Stack/AI) - Spans 2 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-3xl hover:border-primary/40 dark:hover:border-primary/40 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-500 group flex flex-col justify-between"
          >
            <div>
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                <BrainCircuit size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-textMain mb-3 transition-colors duration-300">AI & Full-Stack Architecture</h3>
              <p className="text-slate-600 dark:text-textMuted mb-8 leading-relaxed transition-colors duration-300 max-w-xl">
                Designing end-to-end applications and intelligent systems. Proven ability to bridge the gap between complex Python/AI backends and responsive React frontends for real-world impact.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "Flask / FastAPI", "TensorFlow", "OpenCV", "Tailwind CSS", "REST APIs"].map((skill, i) => (
                <span key={i} className="text-xs font-bold uppercase tracking-wider bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: TALL (Algorithms) - Spans 2 Rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 md:row-span-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-3xl hover:border-primary/40 dark:hover:border-primary/40 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-500 group flex flex-col justify-between"
          >
            <div>
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                <TerminalSquare size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-textMain mb-3 transition-colors duration-300">Algorithmic Dominance</h3>
              <p className="text-slate-600 dark:text-textMuted mb-8 leading-relaxed transition-colors duration-300">
                Writing highly efficient, optimized C++ code with a rigorous foundation in data structures, logic optimization, and edge-case handling.
              </p>
            </div>
            
            {/* Massive Numbers for the Tall Card */}
            <div className="space-y-4 mb-8">
              <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 p-6 rounded-2xl text-center group-hover:border-primary/30 transition-colors">
                <span className="block text-5xl font-black text-primary mb-2">400+</span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Problems Solved</span>
              </div>
              <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 p-6 rounded-2xl text-center group-hover:border-primary/30 transition-colors">
                <span className="block text-5xl font-black text-primary mb-2">5★</span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">HackerRank Status</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["C++", "Python", "Data Structures", "Algorithms"].map((skill, i) => (
                <span key={i} className="text-xs font-bold uppercase tracking-wider bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: SQUARE (Award) - Spans 1 Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-3xl hover:border-primary/40 dark:hover:border-primary/40 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-500 group flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/20"></div>
            
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 relative z-10">
              <Trophy size={32} className="text-primary" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-textMain mb-2 transition-colors duration-300 relative z-10">Award-Winning Innovator</h3>
            <p className="text-slate-600 dark:text-textMuted mb-6 text-sm relative z-10">Top 10 Finalist in InvokED 5.0 National Hackathon.</p>
            
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl relative z-10">
              <Star size={16} className="text-primary fill-primary/20" />
              <span className="font-bold text-primary text-sm tracking-wide">₹10,000 Prize Winner</span>
            </div>
          </motion.div>

          {/* Card 4: SQUARE (Academic) - Spans 1 Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-3xl hover:border-primary/40 dark:hover:border-primary/40 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-500 group flex flex-col justify-between items-start text-left relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/20"></div>
            
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 relative z-10">
              <Award size={32} className="text-primary" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-textMain mb-2 transition-colors duration-300 relative z-10">Academic Prestige</h3>
            <p className="text-slate-600 dark:text-textMuted mb-6 text-sm relative z-10">Recognized at the state & institutional levels.</p>
            
            <div className="flex flex-col gap-2 relative z-10 w-full">
              <div className="flex items-center justify-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl w-full">
                <span className="font-bold text-primary text-sm tracking-wide">STARS Scholar</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-xl w-full transition-colors duration-300">
                <span className="font-bold text-slate-700 dark:text-slate-300 text-sm tracking-wide">CM Honour Awardee</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;