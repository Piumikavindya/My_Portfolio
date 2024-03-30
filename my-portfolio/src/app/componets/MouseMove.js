import React, { useEffect, useRef } from "react";

const MouseMove = () => {
  const canvasRef = useRef(null);
  const maxDistance = 90;
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const devicePixelRatio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    const randomColor = () => {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);

      return `rgb(${r},${g},${b})`;
    };
    var hue = 0;
    const createParticle = (x, y) => {
      const size = 3;
      const color = `hsl(${hue},100%,50%)`;
      const speedX = Math.random() * 2 - 1;
      const speedY = Math.random() * 2 - 1;

      return { x, y, size, color, speedX, speedY };
    };
    const connectParticles = () => {
      //these two for loops are used for comparing
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          //calculating the distance between the two particles
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance <= maxDistance) {
            const opacity = 1 - distance / maxDistance; //this is used to calculate the opacity of the line farhter away leseser opacity
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = particles[i].color;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hue++;
      connectParticles();
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size -= 0.05;
        if (particle.size <= 0.3) {
          particles.splice(index, 1);
        }

        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    animate();
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      for (let i = 0; i < 1; i++) {
        particles.push(createParticle(x, y));
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default MouseMove;