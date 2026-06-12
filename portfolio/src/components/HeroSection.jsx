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
  const sectionRef  = useRef(null);
  const imageRef    = useRef(null);
  const glowRef     = useRef(null);
  const cardRef     = useRef(null);
  const [imgError, setImgError] = useState(false);

  const resumeCtx = useContext(ResumeContext);

  /* ── 3-D tilt on mouse move ── */
  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });
  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const section = sectionRef.current;
    const image   = imageRef.current;

    /* cinematic entrance */
    gsap.fromTo(
      image,
      { scale: 0.75, opacity: 0, y: 70 },
      { scale: 1,    opacity: 1, y: 0,  duration: 1.6, ease: 'power3.out', delay: 0.4 }
    );

    /* scroll parallax */
    gsap.to(image, {
      yPercent: -18,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 1.2 },
    });

    /* glow pulse on scroll */
    gsap.to(glowRef.current, {
      scale: 1.6, opacity: 0.9,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'center top', scrub: 1 },
    });

    /* mouse tracking */
    const onMove = (e) => {
      const r = section.getBoundingClientRect();
      mouseX.set(e.clientX - r.left  - r.width  / 2);
      mouseY.set(e.clientY - r.top   - r.height / 2);
    };
    section.addEventListener('mousemove', onMove);
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center"
      style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(139,0,0,0.10) 0%, #050505 60%)' }}
    >
      <ParticleBackground />

      {/* subtle grid */}
      <div className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle,#DC143C,transparent 70%)', filter: 'blur(70px)' }} />
      <div className="absolute bottom-1/3 left-1/4 w-[280px] h-[280px] rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle,#DC143C,transparent 70%)', filter: 'blur(90px)' }} />

      {/* ─────────────── CONTENT ─────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[85vh]">

          {/* ── LEFT — text ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit"
              style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-red-400 tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
            </motion.div>

            {/* greeting + name */}
            <p className="font-mono text-red-400 text-sm tracking-widest mb-2">Hi, I'm</p>
            <h1 className="font-display font-bold leading-none mb-4"
              style={{ fontSize: 'clamp(3rem,7vw,5.5rem)' }}>
              <span className="text-white">Faraz</span><br />
              <span className="text-gradient-red">Akram</span>
            </h1>

            {/* typing */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-red-500/60" />
              <TypeAnimation
                sequence={['Frontend Engineer',2000,'React Developer',2000,'Software Engineer',2000,'UI Enthusiast',2000,'Problem Solver',2000]}
                wrapper="span" speed={50} repeat={Infinity}
                className="font-mono text-white/60 text-sm tracking-wider"
              />
            </div>

            {/* tagline */}
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-lg">{heroTagline}</p>

            {/* buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <motion.button
                onClick={() => scrollTo('projects')}
                whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                className="btn-primary text-white text-sm"
              >
                View Projects
              </motion.button>

              <motion.button
                onClick={() => resumeCtx?.openResumeModal()}
                whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 btn-secondary text-white text-sm"
              >
                <Download size={14} />
                Download Resume
                <span className="text-xs bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-mono">PDF</span>
              </motion.button>

              <motion.button
                onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <Mail size={14} /> Contact Me
              </motion.button>
            </div>

            {/* socials */}
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

          {/* ── RIGHT — profile image ── */}
          <div className="flex justify-center items-center order-1 lg:order-2 relative">

            {/* spinning ring */}
            <div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full border border-red-500/10 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[360px] h-[360px] lg:w-[460px] lg:h-[460px] rounded-full border border-red-500/5 pointer-events-none"
              style={{ animation: 'spin 14s linear infinite reverse' }} />

            {/* red ambient glow — follows scroll */}
            <div ref={glowRef}
              className="absolute w-72 h-72 rounded-full pointer-events-none opacity-35"
              style={{ background: 'radial-gradient(circle,rgba(220,20,60,0.55),transparent 70%)', filter: 'blur(50px)' }}
            />

            {/* 3-D tilt + float card */}
            <motion.div
              ref={imageRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              {/* glass card frame */}
              <div
                ref={cardRef}
                className="relative rounded-2xl"
                style={{
                  padding: '5px',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(220,20,60,0.30)',
                  boxShadow:
                    '0 0 0 1px rgba(255,255,255,0.06), 0 0 60px rgba(220,20,60,0.30), 0 0 120px rgba(220,20,60,0.12), inset 0 1px 0 rgba(255,255,255,0.10)',
                }}
              >
                {/* ── actual photo ── */}
                <div className="w-[260px] h-[340px] lg:w-[320px] lg:h-[420px] rounded-xl overflow-hidden relative">
                  {!imgError ? (
                    <img
                      src="/profile.jpg"
                      alt="Faraz Akram"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top"
                      style={{ display: 'block' }}
                    />
                  ) : (
                    /* fallback initials if image missing */
                    <div className="w-full h-full flex flex-col items-center justify-center"
                      style={{ background: 'linear-gradient(135deg,rgba(139,0,0,0.35) 0%,rgba(5,5,5,0.9) 50%,rgba(139,0,0,0.18) 100%)' }}>
                      <div className="w-28 h-28 rounded-full mb-4 flex items-center justify-center text-5xl font-display font-bold"
                        style={{ background: 'linear-gradient(135deg,#DC143C,#8B0000)', boxShadow: '0 0 40px rgba(220,20,60,0.6)' }}>
                        FA
                      </div>
                      <p className="text-white font-display font-bold text-lg">Faraz Akram</p>
                      <p className="text-red-400 text-xs font-mono mt-1 tracking-wider">FRONTEND ENGINEER</p>
                    </div>
                  )}

                  {/* cinematic red gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                    style={{ background: 'linear-gradient(to top,rgba(5,5,5,0.7) 0%,transparent 100%)' }} />

                  {/* scanline texture */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.5) 2px,rgba(0,0,0,0.5) 4px)' }} />
                </div>

                {/* name tag at bottom of card */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-mono text-white/70 whitespace-nowrap"
                  style={{ background: 'rgba(5,5,5,0.92)', border: '1px solid rgba(220,20,60,0.35)', backdropFilter: 'blur(12px)' }}>
                  ● Bengaluru, India
                </div>
              </div>

              {/* floating "Open to Work" badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
                className="absolute -top-4 -right-4 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white"
                style={{ background: 'linear-gradient(135deg,#DC143C,#8B0000)', boxShadow: '0 4px 20px rgba(220,20,60,0.55)' }}
              >
                <Briefcase size={11} /> Open to Work
              </motion.div>

              {/* floating tech badge bottom-left */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-2 -left-6 px-3 py-1.5 rounded-xl text-xs font-mono text-white/60"
                style={{ background: 'rgba(5,5,5,0.9)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)' }}
              >
                React · TS · Tailwind
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.button
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/25 hover:text-white/60 transition-colors duration-300"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={15} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
