import React, { useEffect } from 'react';

const Particles = () => {
  useEffect(() => {
    const createParticle = () => {
      const container = document.querySelector('.particles-container');
      if (!container) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = window.innerHeight + 'px';
      
      // Random animation duration
      particle.style.animation = `float ${5 + Math.random() * 5}s linear infinite`;
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, 10000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 200);

    return () => clearInterval(interval);
  }, []);

  return <div className="particles-container" />;
};

export default Particles;