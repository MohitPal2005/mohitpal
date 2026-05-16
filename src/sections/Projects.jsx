import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "NeuroZone",
    category: "Full-Stack AI",
    description: "An advanced AI-powered e-commerce platform featuring virtual try-on capabilities and voice-based search functionality for a seamless user experience.",
    tags: ["React", "AI Integration", "Voice API", "Full-Stack"],
    github: "https://github.com/MohitPal2005/NeuroZone-AI-Driven-Smart-Shopping", 
    demo: "https://neurozone-ai-driven-smart-ecommerce.vercel.app/"
  },
  {
    title: "ShikshaManthan",
    category: "Hackathon Win",
    description: "Top 10 Finalist in the InvokED 5.0 National Hackathon. Developed a highly scalable tech solution aimed at improving educational tracking and analysis.",
    tags: ["React", "Flask", "PostgreSQL", "Tailwind"],
    github: "https://github.com/MohitPal2005/ShikshaManthan",
    demo: "https://shiksha-manthan.vercel.app/"
  },
  {
    title: "Facial Emotion Detection",
    category: "AI & Computer Vision",
    description: "Built a real-time system detecting 30+ facial emotions with 80%+ accuracy. Utilized deep learning models to process video frames efficiently.",
    tags: ["TensorFlow", "OpenCV", "Python", "Deep Learning"],
    github: "https://github.com/MohitPal2005/FaceEmotionDetection.",
    demo: "#"
  },
  {
    title: "Friday Voice Assistant",
    category: "AI Automation",
    description: "A custom-built intelligent voice assistant capable of handling desktop automation, web scraping, and conversational queries.",
    tags: ["Python", "Speech Recognition", "Automation", "APIs"],
    github: "https://github.com/MohitPal2005/FrydayVoiceAssistant",
    demo: "#"
  },
  {
    title: "Crypto Trader Behavior Analysis",
    category: "Data Science",
    description: "Conducted deep behavioral analysis and built predictive modeling for cryptocurrency traders utilizing complex Hyperliquid datasets.",
    tags: ["Python", "Data Modeling", "Analytics", "Hyperliquid"],
    github: "https://github.com/MohitPal2005/Crypto-Trader-Behavior-Analysis",
    demo: "#"
  },
  {
    title: "Matplotlib Core Contribution",
    category: "Open Source",
    description: "Successfully resolved cursor lag issues in the core Matplotlib library (PR #31426). Deep debugging of backend rendering logic and optimizing event handling.",
    tags: ["Python", "Optimization", "Git", "C++"],
    github: "https://github.com/search?q=is%3Apr%20author%3AMohitPal2005%20is%3Amerged&type=pullrequests",
    demo: "#" 
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-white dark:bg-background/50 transition-colors duration-300 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-textMain mb-4 transition-colors duration-300">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-textMuted max-w-2xl mx-auto text-lg transition-colors duration-300">
            A selection of my work ranging from open-source contributions to AI research and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden group hover:border-primary/40 dark:hover:border-primary/40 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-500"
            >
              <div className="p-8">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-textMain mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-textMuted mb-6 leading-relaxed line-clamp-3 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-primary/10 dark:bg-primary/5 text-primary border border-primary/20 px-3 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-700 dark:text-textMain hover:text-primary dark:hover:text-primary transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                    </svg>
                    Source Code
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-700 dark:text-textMain hover:text-primary dark:hover:text-primary transition-colors duration-300">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;