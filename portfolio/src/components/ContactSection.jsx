import { useContext } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import {
  Mail, Phone, MapPin, Send, Download,
  CheckCircle, AlertCircle,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ResumeContext } from '../App';

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  FORMSPREE SETUP — takes 60 seconds, completely free        ║
 ║  1. Go to https://formspree.io/register  (free account)     ║
 ║  2. Click "New Form" → name it anything                     ║
 ║  3. Copy the form endpoint ID  e.g.  xpznkgvb               ║
 ║  4. Replace  YOUR_FORM_ID  below with that ID               ║
 ║                                                             ║
 ║  That's it. Emails land in farazakram2024@gmail.com         ║
 ╚══════════════════════════════════════════════════════════════╝
*/
const FORMSPREE_ID = 'YOUR_FORM_ID'; // ← paste your ID here, e.g. 'xpznkgvb'

/* ─── shared input style ─── */
const inputBase = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.09)',
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
};
const inputErrBase = {
  ...inputBase,
  border: '1px solid rgba(220,20,60,0.55)',
};

const ContactSection = () => {
  const resumeCtx = useContext(ResumeContext);

  /* Formspree hook — swap endpoint when you have a real ID */
  const endpoint =
    FORMSPREE_ID === 'YOUR_FORM_ID'
      ? null                         // no endpoint yet → mailto fallback
      : `https://formspree.io/f/${FORMSPREE_ID}`;

  const [state, handleFormspreeSubmit] = useForm(
    FORMSPREE_ID === 'YOUR_FORM_ID' ? 'placeholder' : FORMSPREE_ID
  );

  /* ── submit handler ── */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /* ── fallback: no Formspree ID yet ── */
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      const fd = new FormData(e.target);
      const subject = encodeURIComponent(fd.get('subject') || 'Portfolio Contact');
      const body = encodeURIComponent(
        `Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\n\n${fd.get('message')}`
      );
      window.open(
        `mailto:farazakram2024@gmail.com?subject=${subject}&body=${body}`
      );
      return;
    }

    /* ── real submission via Formspree ── */
    await handleFormspreeSubmit(e);
  };

  const contactItems = [
    { icon: Mail,   label: 'Email',    value: 'farazakram2024@gmail.com', href: 'mailto:farazakram2024@gmail.com' },
    { icon: Phone,  label: 'Phone',    value: '+91 8603778367',           href: 'tel:+918603778367'              },
    { icon: MapPin, label: 'Location', value: 'Bengaluru, India',         href: null                             },
  ];

  /* ── success screen ── */
  if (state.succeeded) {
    return (
      <section id="contact" className="relative py-24 lg:py-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center min-h-[50vh] text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ background: 'linear-gradient(135deg,#10b981,#059669)', boxShadow: '0 0 50px rgba(16,185,129,0.4)' }}
          >
            <CheckCircle size={36} className="text-white" />
          </motion.div>
          <h3 className="font-display font-bold text-white text-3xl mb-3">Message Sent!</h3>
          <p className="text-white/50 text-sm max-w-sm leading-relaxed">
            Thanks for reaching out. I'll get back to you at{' '}
            <span className="text-red-400">farazakram2024@gmail.com</span> within 24 hours.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-8 px-6 py-3 rounded-full text-sm font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32"
      style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(139,0,0,0.07) 0%, transparent 60%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-red-400 text-xs tracking-widest mb-3">07. CONTACT</p>
          <h2 className="section-title text-white">
            Let's <span className="text-gradient-red">Connect</span>
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-red-500 to-transparent" />
          <p className="mt-4 text-white/40 text-sm max-w-md">
            Let's build something amazing together. Open to full-time roles, freelance
            projects, and exciting collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── LEFT — info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl group hover:bg-white/[0.02] transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.25)' }}
                >
                  <item.icon size={17} className="text-red-400" />
                </div>
                <div>
                  <p className="font-mono text-white/30 text-xs tracking-wider mb-0.5">
                    {item.label.toUpperCase()}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white text-sm font-medium hover:text-red-400 transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="p-5 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="font-mono text-white/30 text-xs tracking-wider mb-4">FIND ME ON</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/faraz-2023"
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-white/60 hover:text-white transition-all duration-300 hover:bg-white/5"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <FaGithub size={15} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/farazakram031"
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-white/60 hover:text-white transition-all duration-300 hover:bg-white/5"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <FaLinkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Resume */}
            <motion.button
              onClick={() => resumeCtx?.openResumeModal()}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-white text-sm"
              style={{
                background: 'rgba(220,20,60,0.08)',
                border: '1px solid rgba(220,20,60,0.3)',
                boxShadow: '0 0 30px rgba(220,20,60,0.08)',
              }}
            >
              <Download size={16} />
              Download Resume
              <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono">PDF</span>
            </motion.button>

            {/* Setup hint */}
            {FORMSPREE_ID === 'YOUR_FORM_ID' && (
              <div
                className="p-4 rounded-xl"
                style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.2)' }}
              >
                <p className="font-mono text-amber-400 text-xs tracking-wider mb-1">⚡ ACTIVATE EMAIL</p>
                <p className="text-white/40 text-xs leading-relaxed">
                  Get a free Formspree ID at{' '}
                  <a
                    href="https://formspree.io"
                    target="_blank" rel="noreferrer"
                    className="text-amber-400 underline underline-offset-2"
                  >
                    formspree.io
                  </a>{' '}
                  and paste it into <span className="text-amber-400">ContactSection.jsx</span>.
                  Until then, the form opens your mail client.
                </p>
              </div>
            )}
          </motion.div>

          {/* ── RIGHT — form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 space-y-5"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="mb-6">
                <h3 className="font-display font-bold text-white text-xl mb-1">Send a Message</h3>
                <p className="text-white/30 text-xs font-mono">
                  I reply within 24 hours · farazakram2024@gmail.com
                </p>
              </div>

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-white/35 text-xs tracking-wider mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20"
                    style={inputBase}
                    onFocus={e => (e.target.style.border = '1px solid rgba(220,20,60,0.5)')}
                    onBlur={e  => (e.target.style.border = '1px solid rgba(255,255,255,0.09)')}
                  />
                  <ValidationError field="name" prefix="Name" errors={state.errors}
                    className="text-red-400 text-xs mt-1 font-mono" />
                </div>

                <div>
                  <label className="block font-mono text-white/35 text-xs tracking-wider mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20"
                    style={inputBase}
                    onFocus={e => (e.target.style.border = '1px solid rgba(220,20,60,0.5)')}
                    onBlur={e  => (e.target.style.border = '1px solid rgba(255,255,255,0.09)')}
                  />
                  <ValidationError field="email" prefix="Email" errors={state.errors}
                    className="text-red-400 text-xs mt-1 font-mono" />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block font-mono text-white/35 text-xs tracking-wider mb-2">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Job Opportunity / Collaboration / Project"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20"
                  style={inputBase}
                  onFocus={e => (e.target.style.border = '1px solid rgba(220,20,60,0.5)')}
                  onBlur={e  => (e.target.style.border = '1px solid rgba(255,255,255,0.09)')}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-white/35 text-xs tracking-wider mb-2">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 resize-none"
                  style={inputBase}
                  onFocus={e => (e.target.style.border = '1px solid rgba(220,20,60,0.5)')}
                  onBlur={e  => (e.target.style.border = '1px solid rgba(255,255,255,0.09)')}
                />
                <ValidationError field="message" prefix="Message" errors={state.errors}
                  className="text-red-400 text-xs mt-1 font-mono" />
              </div>

              {/* Generic error */}
              {state.errors && state.errors.length > 0 && (
                <div
                  className="flex items-start gap-3 p-3 rounded-xl text-xs"
                  style={{ background: 'rgba(220,20,60,0.08)', border: '1px solid rgba(220,20,60,0.25)' }}
                >
                  <AlertCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-red-300">
                    Something went wrong. Please email me directly at farazakram2024@gmail.com
                  </span>
                </div>
              )}

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #DC143C, #8B0000)',
                  boxShadow: '0 0 30px rgba(220,20,60,0.3)',
                  opacity: state.submitting ? 0.7 : 1,
                  cursor: state.submitting ? 'not-allowed' : 'pointer',
                }}
              >
                {state.submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-white/20 text-xs text-center font-mono pt-1">
                Powered by{' '}
                <a
                  href="https://formspree.io"
                  target="_blank" rel="noreferrer"
                  className="text-white/35 hover:text-white/60 underline underline-offset-2 transition-colors"
                >
                  Formspree
                </a>{' '}
                · No backend required
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
