import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  baseY: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  depth: number;
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

interface CircuitNode {
  x: number;
  y: number;
  connections: number[];
}

interface ElectricPulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

interface Wave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
}

interface RandomEffect {
  type: 'burst' | 'ripple' | 'flash';
  x: number;
  y: number;
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
    const circuitNodes: CircuitNode[] = [];
    const electricPulses: ElectricPulse[] = [];
    const waves: Wave[] = [];
    const randomEffects: RandomEffect[] = [];
    let time = 0;
    let scrollY = 0;

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create more stars
    const pageHeight = canvas.height;
    const starCount = Math.min(Math.floor((canvas.width * pageHeight) / 4000), 1200);
    for (let i = 0; i < starCount; i++) {
      const depth = Math.random();
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * pageHeight,
        baseY: Math.random() * pageHeight,
        size: depth < 0.3 ? Math.random() * 0.8 + 0.2 : depth < 0.7 ? Math.random() * 1.2 + 0.4 : Math.random() * 2.5 + 1,
        opacity: depth < 0.3 ? Math.random() * 0.3 + 0.1 : Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        depth,
      });
    }

    // Create circuit nodes for electronic effect
    const nodeCount = Math.floor(canvas.width / 200) * Math.floor(pageHeight / 300);
    for (let i = 0; i < nodeCount; i++) {
      circuitNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * pageHeight,
        connections: [],
      });
    }

    // Connect nearby nodes
    for (let i = 0; i < circuitNodes.length; i++) {
      for (let j = i + 1; j < circuitNodes.length; j++) {
        const dx = circuitNodes[i].x - circuitNodes[j].x;
        const dy = circuitNodes[i].y - circuitNodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250 && circuitNodes[i].connections.length < 3) {
          circuitNodes[i].connections.push(j);
        }
      }
    }

    const spawnShootingStar = () => {
      const angle = Math.random() * 0.5 + 0.3;
      const speed = Math.random() * 4 + 3;
      const viewTop = scrollY;
      shootingStars.push({
        x: Math.random() * canvas.width * 0.8,
        y: viewTop + Math.random() * window.innerHeight * 0.5,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: Math.random() * 40 + 30,
        size: Math.random() * 1.5 + 0.6,
      });
    };

    const spawnElectricPulse = () => {
      const nodeIndex = Math.floor(Math.random() * circuitNodes.length);
      const node = circuitNodes[nodeIndex];
      if (node.connections.length > 0) {
        const targetIndex = node.connections[Math.floor(Math.random() * node.connections.length)];
        electricPulses.push({
          fromNode: nodeIndex,
          toNode: targetIndex,
          progress: 0,
          speed: Math.random() * 0.03 + 0.015,
          color: Math.random() > 0.5 ? 'primary' : 'accent',
        });
      }
    };

    const spawnWave = () => {
      waves.push({
        x: Math.random() * canvas.width,
        y: scrollY + Math.random() * window.innerHeight,
        radius: 0,
        maxRadius: Math.random() * 150 + 100,
        opacity: 0.15,
        speed: Math.random() * 0.8 + 0.4,
      });
    };

    const spawnRandomEffect = () => {
      const types: ('burst' | 'ripple' | 'flash')[] = ['burst', 'ripple', 'flash'];
      randomEffects.push({
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * canvas.width,
        y: scrollY + Math.random() * window.innerHeight,
        life: 0,
        maxLife: Math.random() * 60 + 40,
        size: Math.random() * 30 + 20,
      });
    };

    const animate = () => {
      time += 1;

      const viewTop = scrollY - 100;
      const viewBottom = scrollY + window.innerHeight + 100;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw circuit connections (very subtle)
      ctx.globalAlpha = 0.03;
      ctx.strokeStyle = 'hsl(215, 60%, 58%)';
      ctx.lineWidth = 0.5;
      circuitNodes.forEach((node, i) => {
        const parallaxY = node.y - scrollY * 0.05;
        if (parallaxY < viewTop - 50 || parallaxY > viewBottom + 50) return;
        
        node.connections.forEach((connIndex) => {
          const target = circuitNodes[connIndex];
          const targetY = target.y - scrollY * 0.05;
          ctx.beginPath();
          ctx.moveTo(node.x, parallaxY);
          ctx.lineTo(target.x, targetY);
          ctx.stroke();
        });
      });
      ctx.globalAlpha = 1;

      // Draw stars with parallax
      stars.forEach((star) => {
        const parallaxFactor = star.depth * 0.15;
        const yOffset = scrollY * parallaxFactor;
        const drawY = star.baseY - yOffset;

        if (drawY < viewTop - 20 || drawY > viewBottom + 20) return;

        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = star.opacity * (0.6 + 0.4 * twinkle);

        ctx.beginPath();
        ctx.arc(star.x, drawY, star.size, 0, Math.PI * 2);

        if (star.size > 1.5) {
          ctx.fillStyle = `hsla(220, 30%, 85%, ${currentOpacity})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = `hsla(220, 30%, 80%, ${currentOpacity * 0.4})`;
        } else {
          ctx.fillStyle = `hsla(230, 15%, 80%, ${currentOpacity})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Shooting stars - more frequent
      if (Math.random() < 0.008) spawnShootingStar();

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life += 1;

        const progress = ss.life / ss.maxLife;
        const fadeIn = Math.min(progress * 5, 1);
        const fadeOut = 1 - progress;
        const alpha = fadeIn * fadeOut * 0.7;

        const tailLen = 35;
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

        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(220, 20%, 90%, ${alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(220, 25%, 80%, ${alpha * 0.5})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (ss.life >= ss.maxLife) shootingStars.splice(i, 1);
      }

      // Electric pulses along circuit
      if (Math.random() < 0.02) spawnElectricPulse();

      for (let i = electricPulses.length - 1; i >= 0; i--) {
        const pulse = electricPulses[i];
        pulse.progress += pulse.speed;

        const from = circuitNodes[pulse.fromNode];
        const to = circuitNodes[pulse.toNode];
        const fromY = from.y - scrollY * 0.05;
        const toY = to.y - scrollY * 0.05;

        const x = from.x + (to.x - from.x) * pulse.progress;
        const y = fromY + (toY - fromY) * pulse.progress;

        if (y >= viewTop && y <= viewBottom) {
          const alpha = Math.sin(pulse.progress * Math.PI) * 0.6;
          const color = pulse.color === 'primary' ? '215, 60%, 58%' : '255, 35%, 55%';
          
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${color}, ${alpha})`;
          ctx.shadowBlur = 12;
          ctx.shadowColor = `hsla(${color}, ${alpha * 0.8})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        if (pulse.progress >= 1) electricPulses.splice(i, 1);
      }

      // Waves
      if (Math.random() < 0.005) spawnWave();

      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i];
        wave.radius += wave.speed;
        wave.opacity = 0.1 * (1 - wave.radius / wave.maxRadius);

        if (wave.y >= viewTop && wave.y <= viewBottom && wave.opacity > 0.01) {
          ctx.beginPath();
          ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(215, 40%, 60%, ${wave.opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        if (wave.radius >= wave.maxRadius) waves.splice(i, 1);
      }

      // Random effects
      if (Math.random() < 0.003) spawnRandomEffect();

      for (let i = randomEffects.length - 1; i >= 0; i--) {
        const effect = randomEffects[i];
        effect.life += 1;
        const progress = effect.life / effect.maxLife;
        const alpha = Math.sin(progress * Math.PI) * 0.15;

        if (effect.y >= viewTop && effect.y <= viewBottom) {
          if (effect.type === 'burst') {
            for (let j = 0; j < 6; j++) {
              const angle = (j / 6) * Math.PI * 2;
              const dist = progress * effect.size;
              ctx.beginPath();
              ctx.arc(
                effect.x + Math.cos(angle) * dist,
                effect.y + Math.sin(angle) * dist,
                2,
                0,
                Math.PI * 2
              );
              ctx.fillStyle = `hsla(255, 35%, 60%, ${alpha})`;
              ctx.fill();
            }
          } else if (effect.type === 'ripple') {
            ctx.beginPath();
            ctx.arc(effect.x, effect.y, progress * effect.size, 0, Math.PI * 2);
            ctx.strokeStyle = `hsla(215, 50%, 65%, ${alpha})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          } else if (effect.type === 'flash') {
            ctx.beginPath();
            ctx.arc(effect.x, effect.y, effect.size * (1 - progress * 0.5), 0, Math.PI * 2);
            ctx.fillStyle = `hsla(220, 30%, 80%, ${alpha * 0.5})`;
            ctx.fill();
          }
        }

        if (effect.life >= effect.maxLife) randomEffects.splice(i, 1);
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

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
