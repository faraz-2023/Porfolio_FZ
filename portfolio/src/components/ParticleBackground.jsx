import { useCallback, memo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticleBackground = memo(() => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ['#DC143C', '#ff4444', '#8B0000', '#ffffff'] },
          links: {
            color: '#DC143C',
            distance: 130,
            enable: true,
            opacity: 0.06,
            width: 0.5,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: true,
            speed: 0.35,
            straight: false,
          },
          number: {
            density: { enable: true, area: 900 },
            value: 55,
          },
          opacity: {
            value: { min: 0.02, max: 0.12 },
            animation: { enable: true, speed: 0.4, sync: false },
          },
          shape: { type: 'circle' },
          size: {
            value: { min: 0.5, max: 1.8 },
          },
        },
        detectRetina: true,
      }}
    />
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;
