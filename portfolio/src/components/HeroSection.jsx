import { useEffect, useRef, useState, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, ChevronDown, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';
import { ResumeContext } from '../App';
import { personalInfo, heroTagline } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(springY, [-300, 300], [8, -8]);
  const rotateY = useTransform(springX, [-300, 300], [-8, 8]);

  const resumeCtx = useContext(ResumeContext);
  const handleResumeDownload = () => {
    if (resumeCtx?.openResumeModal) resumeCtx.openResumeModal();
  };

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(image,
      { scale: 0.7, opacity: 0, y: 60 },
      { scale: 1, opacity: 1, y: 0, duration: 1.4, ease: 'power3.out' }
    );

    gsap.to(image, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    gsap.to(glowRef.current, {
      scale: 1.5,
      opacity: 0.8,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'center top',
        scrub: 1,
      },
    });

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    section.addEventListener('mousemove', onMouseMove);
    return () => section.removeEventListener('mousemove', onMouseMove);
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(139,0,0,0.08) 0%, #050505 60%)' }}
    >
      <ParticleBackground />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #DC143C, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #DC143C, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[85vh]">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit"
              style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-red-400 tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
            </motion.div>

            {/* Greeting + Name */}
            <p className="font-mono text-red-400 text-sm tracking-widest mb-2">Hi, I'm</p>
            <h1 className="font-display font-bold leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
              <span className="text-white">Faraz</span>
              <br />
              <span className="text-gradient-red">Akram</span>
            </h1>

            {/* Typing roles */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-red-500/60" />
              <TypeAnimation
                sequence={[
                  'Frontend Engineer', 2000,
                  'React Developer', 2000,
                  'Software Engineer', 2000,
                  'UI Enthusiast', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-mono text-white/60 text-sm tracking-wider"
              />
            </div>

            {/* Tagline */}
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-lg">
              {heroTagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <motion.button
                onClick={() => handleNavClick('projects')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-white text-sm"
              >
                View Projects
              </motion.button>

              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 btn-secondary text-white text-sm"
              >
                <Download size={14} />
                Download Resume
                <span className="text-xs bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-mono">PDF</span>
              </motion.button>

              <motion.button
                onClick={() => handleNavClick('contact')}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/30"
              >
                <Mail size={14} />
                Contact Me
              </motion.button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer"
                className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                <FaGithub size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                <Mail size={18} />
              </a>
              <div className="h-px w-8 bg-white/10" />
              <span className="font-mono text-xs text-white/30">{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* RIGHT — Profile card */}
          <div className="flex justify-center items-center order-1 lg:order-2 relative">
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full border border-red-500/10 animate-spin-slow" />
            <div className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full border border-red-500/5" />

            <div
              ref={glowRef}
              className="absolute w-64 h-64 rounded-full pointer-events-none opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(220,20,60,0.5), transparent 70%)', filter: 'blur(40px)' }}
            />

            <motion.div
              ref={imageRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(220,20,60,0.25)',
                  boxShadow: '0 0 60px rgba(220,20,60,0.25), 0 0 120px rgba(220,20,60,0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
                  padding: '6px',
                }}
              >
                <div className="w-[260px] h-[320px] lg:w-[320px] lg:h-[400px] rounded-xl overflow-hidden relative"
                  style={{ background: 'linear-gradient(135deg, #1a0a0a, #0d0d0d)' }}>

                  {/* Profile photo or initials fallback */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(139,0,0,0.3) 0%, rgba(5,5,5,0.8) 50%, rgba(139,0,0,0.15) 100%)' }}>
                    <div className="w-28 h-28 rounded-full mb-4 flex items-center justify-center text-5xl font-display font-bold"
                      style={{ background: 'linear-gradient(135deg, #DC143C, #8B0000)', boxShadow: '0 0 40px rgba(220,20,60,0.6)' }}>
                      FA
                    </div>
                    <p className="text-white font-display font-bold text-lg tracking-wide">Faraz Akram</p>
                    <p className="text-red-400 text-xs font-mono mt-1 tracking-wider">FRONTEND ENGINEER</p>
                    <div className="mt-3 flex flex-wrap justify-center gap-1.5 px-4">
                      {['React.js', 'TypeScript', 'Django'].map(t => (
                        <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-full text-white/50"
                          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-white/20 text-xs font-mono text-center px-4 leading-relaxed">
                      Add your photo to<br />
                      <span className="text-red-400/50">public/profile.jpg</span>
                    </p>
                  </div>

                  <div className="absolute inset-0 pointer-events-none opacity-5"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)' }}
                  />
                </div>

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-mono text-red-400 whitespace-nowrap"
                  style={{ background: 'rgba(5,5,5,0.9)', border: '1px solid rgba(220,20,60,0.3)', backdropFilter: 'blur(10px)' }}>
                  ● Bengaluru, India
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #DC143C, #8B0000)', boxShadow: '0 4px 20px rgba(220,20,60,0.5)' }}
              >
                <Briefcase size={12} className="inline mr-1" />
                Open to Work
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleNavClick('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
