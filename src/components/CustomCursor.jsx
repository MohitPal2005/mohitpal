import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Track mouse movement
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Check if hovering over a clickable element
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide custom cursor on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Solid Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1, // Shrink when hovering
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 28, mass: 0.1 }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary/50 rounded-full pointer-events-none z-[100] flex items-center justify-center bg-primary/5 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1, // Grow when hovering over buttons
          backgroundColor: isHovering ? 'rgba(157, 78, 221, 0.2)' : 'rgba(157, 78, 221, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      />
    </>
  );
};

export default CustomCursor;