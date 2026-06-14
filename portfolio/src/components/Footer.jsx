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
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative pt-12 sm:pt-16 pb-6 sm:pb-8"
      style={{ background: 'linear-gradient(to top, rgba(139,0,0,0.08) 0%, transparent 100%)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12">

          {/* brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center font-display font-bold text-sm"
                style={{ background: 'linear-gradient(135deg,#DC143C,#8B0000)' }}>FA</div>
              <span className="font-display font-semibold text-white">Faraz Akram</span>
            </div>
            <p className="text-white/30 text-xs font-mono mb-1">Frontend Engineer</p>
            <p className="text-white/40 text-sm leading-relaxed mb-5 mt-2">
              Designed & Developed by Faraz Akram. Building modern web experiences with React, AI, and innovation.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[
                { href: 'https://github.com/faraz-2023', icon: FaGithub },
                { href: 'https://linkedin.com/in/farazakram031', icon: FaLinkedin },
                { href: 'mailto:farazakram2024@gmail.com', icon: Mail },
              ].map(({ href, icon: Icon }) => (
                <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="p-2 sm:p-2.5 rounded-xl border border-white/8 text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 hover:bg-white/5">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* nav */}
          <div>
            <p className="font-mono text-white/30 text-xs tracking-widest mb-4">NAVIGATION</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {['home','about','experience','skills','projects','achievements','contact'].map((s) => (
                <button key={s} onClick={() => scrollTo(s)}
                  className="text-left text-white/40 hover:text-red-400 text-sm capitalize transition-colors duration-200">
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* contact */}
          <div>
            <p className="font-mono text-white/30 text-xs tracking-widest mb-4">GET IN TOUCH</p>
            <div className="space-y-2.5 sm:space-y-3">
              <a href="mailto:farazakram2024@gmail.com"
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs sm:text-sm transition-colors duration-200 break-all">
                <Mail size={12} className="text-red-400 flex-shrink-0" />farazakram2024@gmail.com
              </a>
              <a href="tel:+918603778367"
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                <Phone size={12} className="text-red-400 flex-shrink-0" />+91 8603778367
              </a>
              <div className="flex items-center gap-2 text-white/40 text-xs sm:text-sm">
                <MapPin size={12} className="text-red-400 flex-shrink-0" />Bengaluru, India
              </div>
              <a href="https://github.com/faraz-2023" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                <FaGithub size={12} className="text-red-400 flex-shrink-0" />github.com/faraz-2023
              </a>
              <motion.button onClick={handleResumeDownload}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="mt-2 flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg,#DC143C,#8B0000)', boxShadow: '0 0 20px rgba(220,20,60,0.3)' }}>
                <Download size={13} />Resume PDF
              </motion.button>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6 sm:mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-white/20 text-xs tracking-wider text-center sm:text-left">
            © 2026 Faraz Akram. All rights reserved.
          </p>
          <p className="font-mono text-white/20 text-xs flex items-center gap-1">
            Built with <Heart size={10} className="text-red-500 mx-1" /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
