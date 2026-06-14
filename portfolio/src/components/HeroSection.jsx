import { useEffect, useRef, useState, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, ChevronDown, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';
import { ResumeContext } from '../App';
import { personalInfo, heroTagline } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const imageRef   = useRef(null);
  const glowRef    = useRef(null);
  const [imgError, setImgError] = useState(false);
  const resumeCtx  = useContext(ResumeContext);
  const mouseX     = useMotionValue(0);
  const mouseY     = useMotionValue(0);

  useEffect(() => {
    const section = sectionRef.current;
    const image   = imageRef.current;
    gsap.fromTo(image,
      { scale: 0.8, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: 0.4 }
    );
    gsap.to(image, {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 1.2 },
    });
    gsap.to(glowRef.current, {
      scale: 1.5, opacity: 0.8, ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'center top', scrub: 1 },
    });
    const onMove = (e) => {
      const r = section.getBoundingClientRect();
      mouseX.set(e.clientX - r.left - r.width / 2);
      mouseY.set(e.clientY - r.top - r.height / 2);
    };
    section.addEventListener('mousemove', onMove);
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 65% 50%, rgba(139,0,0,0.10) 0%, #050505 60%)' }}
    >
      <ParticleBackground />

      {/* grid */}
      <div className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

      {/* glows */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle,#DC143C,transparent 70%)', filter: 'blur(70px)' }} />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 sm:w-64 sm:h-64 rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle,#DC143C,transparent 70%)', filter: 'blur(90px)' }} />

      {/* ── layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:min-h-[85vh]">

          {/* IMAGE — top on mobile, right on desktop */}
          <div className="order-1 lg:order-2 flex justify-center items-end relative
                          h-[320px] sm:h-[400px] lg:h-[580px] mb-8 lg:mb-0">

            {/* glow behind image */}
            <div ref={glowRef}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
              style={{
                width: 'clamp(180px,50vw,320px)',
                height: 'clamp(180px,50vw,320px)',
                background: 'radial-gradient(circle,rgba(220,20,60,0.45),transparent 70%)',
                filter: 'blur(50px)',
                opacity: 0.5,
              }} />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(220,20,60,0.15),transparent 70%)', filter: 'blur(35px)' }} />

            <motion.div
              ref={imageRef}
              className="relative z-10 w-full h-full flex items-end justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {!imgError ? (
                <img
                  src="/profile.jpg"
                  alt="Faraz Akram"
                  onError={() => setImgError(true)}
                  className="h-full w-auto object-cover object-top select-none"
                  style={{
                    maxWidth: '100%',
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    filter: 'drop-shadow(0 0 30px rgba(220,20,60,0.30))',
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center font-display font-bold mb-4"
                    style={{ fontSize: 'clamp(2rem,5vw,3rem)', background: 'linear-gradient(135deg,#DC143C,#8B0000)', boxShadow: '0 0 50px rgba(220,20,60,0.6)' }}>
                    FA
                  </div>
                  <p className="text-white font-display font-bold text-lg">Faraz Akram</p>
                  <p className="text-red-400 text-xs font-mono mt-1 tracking-wider">FRONTEND ENGINEER</p>
                </div>
              )}

              {/* Open to Work badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
                className="absolute top-4 right-2 sm:right-4 lg:right-0 flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold text-white z-20"
                style={{ background: 'linear-gradient(135deg,#DC143C,#8B0000)', boxShadow: '0 4px 20px rgba(220,20,60,0.5)' }}
              >
                <Briefcase size={10} /> Open to Work
              </motion.div>

              {/* Tech badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                className="absolute top-16 sm:top-20 left-0 sm:left-2 lg:-left-4 px-2.5 py-1.5 rounded-xl text-xs font-mono text-white/60 z-20"
                style={{ background: 'rgba(5,5,5,0.88)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)' }}
              >
                React · TS · Tailwind
              </motion.div>
            </motion.div>
          </div>

          {/* TEXT — bottom on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left"
          >
            {/* badge */}
            <div className="flex justify-center lg:justify-start mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
                style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.3)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-red-400 tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </div>

            <p className="font-mono text-red-400 text-xs sm:text-sm tracking-widest mb-2">Hi, I'm</p>
            <h1 className="font-display font-bold leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem,8vw,5.5rem)' }}>
              <span className="text-white">Faraz</span><br />
              <span className="text-gradient-red">Akram</span>
            </h1>

            {/* typing */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="h-px w-6 bg-red-500/60 hidden sm:block" />
              <TypeAnimation
                sequence={['Frontend Engineer',2000,'React Developer',2000,'Software Engineer',2000,'UI Enthusiast',2000,'Problem Solver',2000]}
                wrapper="span" speed={50} repeat={Infinity}
                className="font-mono text-white/60 text-xs sm:text-sm tracking-wider"
              />
            </div>

            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              {heroTagline}
            </p>

            {/* buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
              <motion.button
                onClick={() => scrollTo('projects')}
                whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                className="btn-primary text-white text-xs sm:text-sm px-5 sm:px-8 py-2.5 sm:py-3"
              >
                View Projects
              </motion.button>

              <motion.button
                onClick={() => resumeCtx?.openResumeModal()}
                whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 sm:gap-2 btn-secondary text-white text-xs sm:text-sm px-4 sm:px-8 py-2.5 sm:py-3"
              >
                <Download size={13} />
                Resume
                <span className="text-xs bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-mono hidden sm:inline">PDF</span>
              </motion.button>

              <motion.button
                onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <Mail size={13} /> Contact
              </motion.button>
            </div>

            {/* socials */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a href={personalInfo.github} target="_blank" rel="noreferrer"
                className="p-2 sm:p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                <FaGithub size={16} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                className="p-2 sm:p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                <FaLinkedin size={16} />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="p-2 sm:p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300">
                <Mail size={16} />
              </a>
              <div className="h-px w-6 bg-white/10 hidden sm:block" />
              <span className="font-mono text-xs text-white/25 hidden sm:block">{personalInfo.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.button
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/25 hover:text-white/60 transition-colors duration-300"
      >
        <span className="font-mono text-xs tracking-widest hidden sm:block">SCROLL</span>
        <ChevronDown size={15} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
