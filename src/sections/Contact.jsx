import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // NEW: Added a state to show a "Sending..." animation on the button
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FIXED: Actual working form submission logic using Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ce479e92-66a5-40ba-b2bc-f4f4c9553e40", 
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        alert("Message sent successfully! I will get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please check your internet connection.");
    } finally {
      setIsSubmitting(false); // Turn off loading state
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-background/50 transition-colors duration-300 relative z-10 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-3 block">
            — Let's Work Together —
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-textMain mb-4 transition-colors duration-300">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-textMuted max-w-2xl mx-auto text-lg transition-colors duration-300">
            Whether you have a freelance project, an open-source collaboration, or just want to chat about software engineering and AI, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-500 h-full flex flex-col group hover:border-primary/40 dark:hover:border-primary/40">
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-textMain mb-6 transition-colors duration-300">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/10 text-primary transition-colors duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-textMain uppercase tracking-wider mb-1 transition-colors duration-300">Email</p>
                    <a href="mailto:mohit799961@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 font-medium">
                      mohit799961@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/10 text-primary transition-colors duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-textMain uppercase tracking-wider mb-1 transition-colors duration-300">Location</p>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300 font-medium">
                      VIT Bhopal University, India<br/>
                      <span className="text-sm opacity-80">Available Worldwide (Remote)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badge for Freelancers */}
              <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-4 flex items-center gap-3 mb-10 transition-colors duration-300">
                <Clock className="text-blue-600 dark:text-blue-400 animate-pulse" size={24} />
                <div>
                  <p className="text-sm font-bold text-blue-900 dark:text-blue-300 transition-colors duration-300">Fast Response</p>
                  <p className="text-xs text-blue-700 dark:text-blue-400/80 transition-colors duration-300 font-medium">I typically reply within 12-24 hours.</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-auto">
                <p className="text-sm font-bold text-slate-900 dark:text-textMain uppercase tracking-wider mb-4 transition-colors duration-300">Connect with me</p>
                <div className="flex gap-4">
                  <a href="https://github.com/MohitPal2005" target="_blank" rel="noreferrer" className="bg-white dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/mohit-pal-2144702b8" target="_blank" rel="noreferrer" className="bg-white dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
              
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-500 hover:border-primary/40 dark:hover:border-primary/40">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-medium disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-medium disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 font-medium disabled:opacity-50"
                  placeholder="Freelance Project Inquiry"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  disabled={isSubmitting}
                  className="w-full bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none font-medium disabled:opacity-50"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* NEW: Button changes text when sending */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-[#8B40C4] disabled:bg-primary/50 text-white font-bold rounded-xl px-8 py-4 flex items-center justify-center gap-2 transition-all duration-300 group shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
              </button>

            </form>
          </motion.div>

        </div>

        {/* Footer Area */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-10 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors duration-300"
        >
          <p className="text-slate-500 dark:text-textMuted text-sm font-medium transition-colors duration-300">
            © 2026 Mohit Pal. Built with React & Tailwind.
          </p>
          <div className="flex items-center gap-2 text-slate-600 dark:text-textMuted text-sm font-medium bg-white dark:bg-white/5 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 transition-colors duration-300">
            <MapPin size={16} className="text-primary" />
            VIT Bhopal University, India
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;