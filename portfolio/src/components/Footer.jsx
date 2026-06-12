import { motion } from 'framer-motion';
import { Mail, Download, Heart, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Faraz_Akram_Resume.pdf';
    link.click();
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden"
      style={{
        background: 'linear-gradient(to top, rgba(139,0,0,0.08) 0%, transparent 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #DC143C, #8B0000)' }}>
                FA
              </div>
              <span className="font-display font-semibold text-white">Faraz Akram</span>
            </div>
            <p className="text-white/30 text-xs font-mono mb-1">Frontend Engineer</p>
            <p className="text-white/40 text-sm leading-relaxed mb-5 mt-3">
              Designed & Developed by Faraz Akram. Building modern web experiences with React, AI, and innovation.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/faraz-2023" target="_blank" rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/8 text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 hover:bg-white/5">
                <FaGithub size={16} />
              </a>
              <a href="https://linkedin.com/in/farazakram031" target="_blank" rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/8 text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 hover:bg-white/5">
                <FaLinkedin size={16} />
              </a>
              <a href="mailto:farazakram2024@gmail.com"
                className="p-2.5 rounded-xl border border-white/8 text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 hover:bg-white/5">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-white/30 text-xs tracking-widest mb-4">NAVIGATION</p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {['home', 'about', 'experience', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                <button key={section} onClick={() => scrollToSection(section)}
                  className="text-left text-white/40 hover:text-red-400 text-sm capitalize transition-colors duration-200">
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-white/30 text-xs tracking-widest mb-4">GET IN TOUCH</p>
            <div className="space-y-3">
              <a href="mailto:farazakram2024@gmail.com"
                className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200">
                <Mail size={13} className="text-red-400 flex-shrink-0" />
                farazakram2024@gmail.com
              </a>
              <a href="tel:+918603778367"
                className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200">
                <Phone size={13} className="text-red-400 flex-shrink-0" />
                +91 8603778367
              </a>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={13} className="text-red-400 flex-shrink-0" />
                Bengaluru, India
              </div>
              <a href="https://github.com/faraz-2023" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200">
                <FaGithub size={13} className="text-red-400 flex-shrink-0" />
                github.com/faraz-2023
              </a>
              <a href="https://linkedin.com/in/farazakram031" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200">
                <FaLinkedin size={13} className="text-red-400 flex-shrink-0" />
                linkedin.com/in/farazakram031
              </a>

              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{
                  background: 'linear-gradient(135deg, #DC143C, #8B0000)',
                  boxShadow: '0 0 20px rgba(220,20,60,0.3)',
                }}
              >
                <Download size={14} />
                Resume PDF
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-white/20 text-xs tracking-wider">
            © 2026 Faraz Akram. All rights reserved.
          </p>
          <p className="font-mono text-white/20 text-xs flex items-center gap-1">
            Built with <Heart size={10} className="text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
