'use client'
import { useEffect } from 'react';

export default function AnimatedBackground() {
  useEffect(() => {
    const handlePointerMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Calculamos posición relativa al viewport
      const posX = x - window.innerWidth / 2;
      const posY = y - window.innerHeight / 2;

      document.documentElement.style.setProperty('--posX', posX);
      document.documentElement.style.setProperty('--posY', posY);
    };

    // Usamos document en vez de un div específico
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-10 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(115deg, rgb(211 255 215), rgb(0 0 0)),
          radial-gradient(90% 100% at calc(50% + var(--posX,0)*0.2px) calc(0% + var(--posY,0)*0.2px), rgb(200 200 200), rgb(22 0 45)),
          radial-gradient(100% 100% at calc(80% - var(--posX,0)*0.25px) calc(0% - var(--posY,0)*0.25px), rgb(250 255 0), rgb(36 0 0)),
          radial-gradient(150% 210% at calc(100% + var(--posX,0)*0.3px) calc(0% + var(--posY,0)*0.2px), rgb(20 175 125), rgb(0 10 255)),
          radial-gradient(100% 100% at calc(100% - var(--posX,0)*0.2px) calc(30% - var(--posY,0)*0.25px), rgb(255 77 0), rgb(0 200 255)),
          linear-gradient(60deg, rgb(255 0 0), rgb(120 86 255))
        `,
        filter: "opacity(0.7)",
        backgroundBlendMode: 'overlay, overlay, difference, difference, difference, normal',
      }}
    />
  );
}