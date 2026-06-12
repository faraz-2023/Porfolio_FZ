import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Faraz_Akram_Resume.pdf';
    link.click();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[10000] max-w-2xl mx-auto rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(10,10,10,0.95)',
              border: '1px solid rgba(220,20,60,0.2)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 25px 80px rgba(0,0,0,0.8), 0 0 60px rgba(220,20,60,0.15)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(220,20,60,0.15)', border: '1px solid rgba(220,20,60,0.3)' }}>
                  <FileText size={18} className="text-red-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white">Resume Preview</h3>
                  <p className="font-mono text-white/30 text-xs">Faraz_Akram_Resume.pdf • PDF</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Preview Area */}
            <div className="p-6">
              <div className="rounded-xl overflow-hidden mb-6"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  minHeight: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* Resume content preview */}
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #DC143C, #8B0000)' }}>
                    <span className="font-display font-bold text-white text-xl">FA</span>
                  </div>
                  <h2 className="font-display font-bold text-white text-2xl mb-1">Faraz Akram</h2>
                  <p className="text-red-400 font-mono text-sm mb-4">Frontend Engineer</p>

                  <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-6">
                    {[
                      { label: 'CGPA', value: '8.08' },
                      { label: 'Projects', value: '10+' },
                      { label: 'Experience', value: '1yr' },
                    ].map(stat => (
                      <div key={stat.label} className="text-center">
                        <div className="font-display font-bold text-white text-lg">{stat.value}</div>
                        <div className="font-mono text-white/30 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {['React.js', 'TypeScript', 'Django', 'FastAPI', 'MongoDB'].map(tech => (
                      <span key={tech} className="px-2.5 py-1 rounded-full text-xs font-mono text-white/50"
                        style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.2)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-white/30 text-xs font-mono">
                    📄 Add your actual resume PDF to <span className="text-red-400">public/resume.pdf</span>
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #DC143C, #8B0000)',
                    boxShadow: '0 0 30px rgba(220,20,60,0.3)',
                  }}
                >
                  <Download size={15} />
                  Download PDF
                </motion.button>

                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/25 transition-all duration-300"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
