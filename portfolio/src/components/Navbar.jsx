import { useState, useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { ResumeContext } from '../App';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (href) => {
    const sectionId = href.replace('#', '');

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const navHeight = navRef.current?.offsetHeight ?? 72;
      const targetTop = el.getBoundingClientRect().top + window.scrollY - navHeight + 1;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }

    window.history.replaceState(null, '', href);
    setActiveSection(sectionId);
  };

  const handleNavClick = (href) => {
    const shouldWaitForMenuClose = mobileOpen;
    setMobileOpen(false);
    window.setTimeout(() => scrollToSection(href), shouldWaitForMenuClose ? 120 : 0);
  };

  const resumeCtx = useContext(ResumeContext);
  const handleResumeDownload = () => {
    if (resumeCtx?.openResumeModal) {
      resumeCtx.openResumeModal();
    }
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(5,5,5,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-sm transition-all duration-300 group-hover:shadow-red-glow"
                style={{ background: 'linear-gradient(135deg, #DC143C, #8B0000)' }}>
                FA
              </div>
              <span className="font-display font-semibold text-white hidden sm:block tracking-wide">
                Faraz Akram
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg
                    ${activeSection === link.href.slice(1)
                      ? 'text-red-400'
                      : 'text-white/60 hover:text-white'
                    }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-red-500/10 border border-red-500/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Resume Button */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #DC143C 0%, #8B0000 100%)',
                  boxShadow: '0 0 20px rgba(220, 20, 60, 0.4)',
                }}
              >
                <Download size={14} />
                Resume
              </motion.button>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
              style={{
                background: 'rgba(5,5,5,0.95)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    type="button"
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-200
                      ${activeSection === link.href.slice(1)
                        ? 'text-red-400 bg-red-500/10 border border-red-500/20'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  type="button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  onClick={handleResumeDownload}
                  className="flex items-center justify-center gap-2 mt-4 px-5 py-3 rounded-full text-sm font-semibold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #DC143C 0%, #8B0000 100%)',
                  }}
                >
                  <Download size={14} />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <motion.button
        onClick={handleResumeDownload}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.05, x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex items-center gap-2 py-3 px-4 text-xs font-semibold text-white rounded-l-xl shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #DC143C, #8B0000)',
          boxShadow: '-4px 0 30px rgba(220,20,60,0.5)',
          writingMode: 'horizontal-tb',
        }}
      >
        <Download size={13} />
        <span className="hidden sm:block">Resume</span>
      </motion.button>
    </>
  );
};

export default Navbar;
