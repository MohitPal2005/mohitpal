import React, { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Expertise from './sections/Expertise';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import TerminalMode from './components/TerminalMode';
import CustomCursor from './components/CustomCursor';
import Background3D from './components/Background3D';

function App() {
  // We only need to track if the Terminal is open or not!
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  if (isTerminalMode) {
    return <TerminalMode onExit={() => setIsTerminalMode(false)} />;
  }

  return (
    // We hardcode the "dark" class here so Tailwind always uses your dark theme colors
    <div className="dark scroll-smooth cursor-none">
      
      {/* We explicitly tell the background we are NOT in the terminal */}
      <Background3D isTerminal={false} />
      
      <div className="relative min-h-screen">
        <CustomCursor />
        <Navbar />
        
        <main className="relative z-10 bg-transparent">
          <Hero />
          <About />
          <Expertise />
          <Projects />
          <Contact />
        </main>

        {/* Floating Action Button (Only the Terminal button remains) */}
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={() => setIsTerminalMode(true)}
            className="p-4 rounded-full bg-[#050505] border border-[#00FF41]/30 shadow-xl shadow-[#00FF41]/20 text-[#00FF41] hover:scale-110 hover:bg-[#00FF41]/10 transition-all duration-300 group relative"
          >
            <TerminalIcon size={24} />
            <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-[#00FF41] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap border border-[#00FF41]/30 transition-opacity font-mono">
              Open Terminal
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;