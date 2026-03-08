import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  baseY: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  depth: number; // 0-1, controls parallax speed
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    let time = 0;
    let scrollY = 0;

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const resize = () => {
      canvas.width = window.innerWidth;
      // Make canvas tall enough to cover the full page
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create stars across the full page height
    const pageHeight = canvas.height;
    const starCount = Math.min(Math.floor((canvas.width * pageHeight) / 8000), 600);
    for (let i = 0; i < starCount; i++) {
      const depth = Math.random(); // 0 = far (slow), 1 = near (fast)
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * pageHeight,
        baseY: Math.random() * pageHeight,
        size: depth < 0.3 ? Math.random() * 0.8 + 0.2 : depth < 0.7 ? Math.random() * 1.2 + 0.4 : Math.random() * 2 + 0.8,
        opacity: depth < 0.3 ? Math.random() * 0.3 + 0.1 : Math.random() * 0.5 + 0.15,
        twinkleSpeed: Math.random() * 0.015 + 0.003,
        twinkleOffset: Math.random() * Math.PI * 2,
        depth,
      });
    }

    const spawnShootingStar = () => {
      const angle = Math.random() * 0.5 + 0.3;
      const speed = Math.random() * 3 + 2;
      const viewTop = scrollY;
      shootingStars.push({
        x: Math.random() * canvas.width * 0.8,
        y: viewTop + Math.random() * window.innerHeight * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: Math.random() * 35 + 25,
        size: Math.random() * 1.2 + 0.5,
      });
    };

    const animate = () => {
      time += 1;
      
      // Only draw the visible portion + buffer
      const viewTop = scrollY - 100;
      const viewBottom = scrollY + window.innerHeight + 100;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars with parallax
      stars.forEach((star) => {
        // Parallax offset: deeper stars move slower
        const parallaxFactor = star.depth * 0.15; // subtle parallax
        const yOffset = scrollY * parallaxFactor;
        const drawY = star.baseY - yOffset;

        // Skip stars not in view
        if (drawY < viewTop - 20 || drawY > viewBottom + 20) return;

        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = star.opacity * (0.6 + 0.4 * twinkle);

        ctx.beginPath();
        ctx.arc(star.x, drawY, star.size, 0, Math.PI * 2);

        // Soft warm-white for most stars, subtle blue/lavender tint for bright ones
        if (star.size > 1.5) {
          ctx.fillStyle = `hsla(220, 30%, 85%, ${currentOpacity})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = `hsla(220, 30%, 80%, ${currentOpacity * 0.3})`;
        } else {
          ctx.fillStyle = `hsla(230, 15%, 80%, ${currentOpacity})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Shooting stars — less frequent, softer
      if (Math.random() < 0.003) spawnShootingStar();

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life += 1;

        const progress = ss.life / ss.maxLife;
        const fadeIn = Math.min(progress * 5, 1);
        const fadeOut = 1 - progress;
        const alpha = fadeIn * fadeOut * 0.6;

        const tailLen = 30;
        const gradient = ctx.createLinearGradient(
          ss.x, ss.y,
          ss.x - ss.vx * tailLen, ss.y - ss.vy * tailLen
        );
        gradient.addColorStop(0, `hsla(220, 25%, 85%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(220, 20%, 80%, ${alpha * 0.4})`);
        gradient.addColorStop(1, `hsla(220, 20%, 80%, 0)`);

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.vx * tailLen, ss.y - ss.vy * tailLen);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = ss.size;
        ctx.stroke();

        // Soft head
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(220, 20%, 90%, ${alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(220, 25%, 80%, ${alpha * 0.4})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (ss.life >= ss.maxLife) shootingStars.splice(i, 1);
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Observe page height changes
    const resizeObserver = new ResizeObserver(() => {
      canvas.height = document.documentElement.scrollHeight;
    });
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default ParticleBackground;
