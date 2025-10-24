import React, { useEffect, useRef } from "react";
import "./LokiBeam.css";

const LokiBeam = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Beam {
      constructor(amplitude, frequency, speed, colors) {
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.speed = speed;
        this.colors = colors; // array of rgba colors for glow
      }

      getY(x, time, height) {
        return height / 2 + this.amplitude * Math.sin(this.frequency * x + time * this.speed);
      }
    }

    const beams = [
      new Beam(80, 0.01, 0.5, ["rgba(0,157,255,0.3)", "rgba(0,200,255,0.15)", "rgba(255,255,255,0.05)"]),
      new Beam(100, 0.012, 0.4, ["rgba(64,169,255,0.25)", "rgba(0,200,255,0.12)", "rgba(255,255,255,0.05)"]),
      new Beam(60, 0.008, 0.6, ["rgba(0,200,255,0.2)", "rgba(0,225,255,0.1)", "rgba(255,255,255,0.05)"]),
      new Beam(90, 0.01, 0.45, ["rgba(0,225,255,0.15)", "rgba(0,157,255,0.1)", "rgba(255,255,255,0.03)"]),
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beams.forEach((beam) => {
        beam.colors.forEach((color, index) => {
          ctx.beginPath();
          ctx.lineWidth = 2 + index * 4; // wider for outer glow
          ctx.strokeStyle = color;
          ctx.shadowColor = color;
          ctx.shadowBlur = 15 + index * 5;

          for (let x = 0; x < canvas.width; x += 2) {
            const y = beam.getY(x, time, canvas.height);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }

          ctx.stroke();
        });
      });

      time += 0.02; // speed of wave
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="loki-beam" />;
};

export default LokiBeam;
