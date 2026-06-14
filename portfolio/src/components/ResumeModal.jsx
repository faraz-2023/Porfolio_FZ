import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink, Loader } from 'lucide-react';
import { RESUME_URL, RESUME_DOWNLOAD_URL } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [downloading, setDownloading] = useState(false);

  /* ── open in new tab ── */
  const handleView = () => {
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  };

  /* ── force download via fetch → blob ── */
  const handleDownload = async () => {
    setDownloading(true);
    try {
      const res = await fetch(RESUME_DOWNLOAD_URL);
      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = 'Faraz_Akram_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      /* fallback: direct link */
      window.open(RESUME_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md"
          />

          {/* modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.95,   y: 12 }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[10000] max-w-3xl mx-auto rounded-2xl overflow-hidden flex flex-col"
            style={{
              background:    'rgba(8,8,8,0.98)',
              border:        '1px solid rgba(220,20,60,0.22)',
              backdropFilter:'blur(40px)',
              boxShadow:     '0 30px 90px rgba(0,0,0,0.85), 0 0 60px rgba(220,20,60,0.12)',
              maxHeight:     '90vh',
            }}
          >
            {/* ── header ── */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(220,20,60,0.15)', border: '1px solid rgba(220,20,60,0.3)' }}>
                  <FileText size={16} className="text-red-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-sm">Faraz Akram — Resume</h3>
                  <p className="font-mono text-white/30 text-xs">Faraz_Akram_Resume.pdf</p>
                </div>
              </div>
              <button onClick={onClose}
                className="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all duration-200">
                <X size={18} />
              </button>
            </div>

            {/* ── PDF preview ── */}
            <div className="relative flex-1 min-h-0" style={{ height: 'clamp(300px, 55vh, 560px)' }}>
              {/* spinner while iframe loads */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
                  style={{ background: 'rgba(8,8,8,0.9)' }}>
                  <Loader size={24} className="text-red-400 animate-spin" />
                  <p className="font-mono text-white/30 text-xs">Loading resume…</p>
                </div>
              )}

              {/* embed PDF — works for ImageKit / direct PDF URLs */}
              <iframe
                src={`${RESUME_URL}#toolbar=0&navpanes=0`}
                title="Faraz Akram Resume"
                className="w-full h-full border-0"
                onLoad={() => setIframeLoaded(true)}
                style={{ background: '#fff' }}
              />
            </div>

            {/* ── actions ── */}
            <div className="flex gap-3 px-5 py-4 border-t border-white/[0.06] flex-shrink-0">
              {/* View in new tab */}
              <motion.button
                onClick={handleView}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background:  'linear-gradient(135deg,#DC143C,#8B0000)',
                  boxShadow:   '0 0 28px rgba(220,20,60,0.35)',
                }}
              >
                <ExternalLink size={14} />
                View Full Screen
              </motion.button>

              {/* Download */}
              <motion.button
                onClick={handleDownload}
                disabled={downloading}
                whileHover={{ scale: downloading ? 1 : 1.02 }}
                whileTap={{ scale: downloading ? 1 : 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white/80 hover:text-white border border-white/15 hover:border-red-500/40 hover:bg-red-500/8 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {downloading
                  ? <><Loader size={13} className="animate-spin" /> Downloading…</>
                  : <><Download size={14} /> Download PDF</>
                }
              </motion.button>

              {/* Close */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="px-4 py-3 rounded-xl text-sm text-white/35 hover:text-white border border-white/8 hover:border-white/20 transition-all duration-300"
              >
                <X size={15} />
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
