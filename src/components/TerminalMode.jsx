import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Monitor } from 'lucide-react';
import Background3D from './Background3D';

const TerminalMode = ({ onExit }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '> initializing Mohit_Pal_OS v1.0.0...' },
    { type: 'system', text: '> loading WebGL 3D starfield...' },
    { type: 'system', text: '> root access granted.' },
    { type: 'output', text: 'Welcome to the interactive terminal. Type "help" to see available commands.' }
  ]);
  
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output = '';

    switch (trimmedCmd) {
      case 'help':
        output = `Available commands:
  about      - Display user profile & education
  skills     - List technical arsenal
  projects   - Show recent engineering projects
  github     - Display GitHub profile link
  gui        - Exit terminal and load standard visual UI
  clear      - Clear terminal output`;
        break;
      case 'about':
        output = `Name: Mohit Pal
Role: Aspiring Software Engineer & AI Developer
Education: B.Tech Computer Science and Engineering (Expected 2028)
University: VIT Bhopal University`;
        break;
      case 'skills':
        output = `Languages: C++, Python, JavaScript
Frontend: React, Tailwind, Three.js
Backend/AI: Flask, TensorFlow, OpenCV`;
        break;
      case 'projects':
        output = `[1] Matplotlib Core Contribution (Merged PR #31426)
[2] Facial Emotion Detection (TensorFlow/OpenCV)
[3] ShikshaManthan (InvokED 5.0 National Hackathon Finalist)`;
        break;
      case 'github':
        output = `GitHub Profile: https://github.com/MohitPal2005`;
        break;
      case 'gui':
        output = 'Switching to Graphical User Interface...';
        setTimeout(() => onExit(), 800);
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        output = '';
        break;
      default:
        output = `Command not found: ${trimmedCmd}. Type "help" for a list of commands.`;
    }

    setHistory(prev => [
      ...prev, 
      { type: 'command', text: `mohit@ubuntu:~$ ${cmd}` },
      ...(output ? [{ type: 'output', text: output }] : [])
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    }
  };

  return (
    // FIXED: Changed bg-[#050505] to bg-transparent so the 3D canvas is visible!
    <div 
      className="min-h-screen bg-transparent text-[#00FF41] font-mono p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden"
      onClick={handleContainerClick}
    >
      {/* 3D WebGL Background Rendered Here with Hacker Green color */}
      <Background3D color="#00FF41" />

      {/* Subtle fallback glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF41]/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* GUI Toggle Button (Top Right) */}
      <button 
        onClick={onExit}
        className="absolute top-6 right-6 z-50 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md border border-white/20 transition-all font-sans text-sm backdrop-blur-md cursor-pointer"
      >
        <Monitor size={16} /> GUI Mode
      </button>

      {/* Terminal Window - z-10 so it sits ABOVE the 3D Canvas */}
      <div className="w-full max-w-4xl bg-black/60 backdrop-blur-md border border-[#00FF41]/30 rounded-xl overflow-hidden shadow-2xl shadow-[#00FF41]/10 flex flex-col h-[75vh] z-10">
        
        {/* Terminal Header */}
        <div className="bg-white/5 border-b border-[#00FF41]/30 px-4 py-3 flex items-center gap-2">
          <TerminalIcon size={16} className="text-slate-400" />
          <span className="text-slate-400 text-sm font-sans tracking-wide">mohit_pal_terminal — bash</span>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3 custom-scrollbar">
          {history.map((line, index) => (
            <div key={index} className={`whitespace-pre-wrap ${
              line.type === 'system' ? 'text-slate-400' :
              line.type === 'command' ? 'text-white font-bold' : 'text-[#00FF41]'
            }`}>
              {line.text}
            </div>
          ))}
          
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">mohit@ubuntu:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-[#00FF41] caret-[#00FF41]"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default TerminalMode;