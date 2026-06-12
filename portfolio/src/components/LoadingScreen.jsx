import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const barRef = useRef(null);
  const progressRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set([nameRef.current, titleRef.current], { opacity: 0, y: 30 });
    gsap.set(barRef.current, { scaleX: 0, transformOrigin: 'left' });

    tl.to(nameRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .to(barRef.current, { scaleX: 1, duration: 1.5, ease: 'power2.inOut' }, '-=0.2')
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.3,
        onComplete: () => onComplete && onComplete(),
      });

    let count = 0;
    const interval = setInterval(() => {
      count += 2;
      if (progressRef.current) {
        progressRef.current.textContent = `${Math.min(count, 100)}%`;
      }
      if (count >= 100) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div ref={containerRef} className="loading-screen">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(220,20,60,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220,20,60,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Ambient glows */}
      <div className="ambient-glow w-96 h-96 bg-red-800/20 -top-20 -right-20" />
      <div className="ambient-glow w-64 h-64 bg-red-900/15 bottom-20 left-10" />

      <div className="relative z-10 text-center px-8">
        {/* Animated logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 animate-spin-slow absolute inset-0" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(220,20,60,0.2)" strokeWidth="1" strokeDasharray="8 4" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-display font-bold text-red-500">FA</span>
            </div>
          </div>
        </div>

        <h1
          ref={nameRef}
          className="font-display font-bold tracking-widest text-white mb-2"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '0.3em' }}
        >
          FARAZ AKRAM
        </h1>

        <p
          ref={titleRef}
          className="font-mono text-red-400 tracking-widest text-sm mb-12"
          style={{ letterSpacing: '0.4em' }}
        >
          FRONTEND ENGINEER
        </p>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="font-mono text-xs text-white/30 tracking-wider">LOADING</span>
            <span ref={progressRef} className="font-mono text-xs text-red-500">0%</span>
          </div>
          <div className="h-px bg-white/10 w-full relative overflow-hidden">
            <div
              ref={barRef}
              className="absolute inset-y-0 left-0 w-full"
              style={{ background: 'linear-gradient(90deg, #DC143C, #ff4444)' }}
            />
          </div>
        </div>

        {/* Scanning line effect */}
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
          style={{ animation: 'scanline 2s linear infinite', top: 0 }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
