import { useContext } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ResumeContext } from '../App';

const FORMSPREE_ID = 'YOUR_FORM_ID';

const inputBase = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.09)',
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
};

const ContactSection = () => {
  const resumeCtx = useContext(ResumeContext);
  const [state, handleFormspreeSubmit] = useForm(
    FORMSPREE_ID === 'YOUR_FORM_ID' ? 'placeholder' : FORMSPREE_ID
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      const fd = new FormData(e.target);
      const subject = encodeURIComponent(fd.get('subject') || 'Portfolio Contact');
      const body = encodeURIComponent(`Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\n\n${fd.get('message')}`);
      window.open(`mailto:farazakram2024@gmail.com?subject=${subject}&body=${body}`);
      return;
    }
    await handleFormspreeSubmit(e);
  };

  const contactItems = [
    { icon: Mail,   label: 'Email',    value: 'farazakram2024@gmail.com', href: 'mailto:farazakram2024@gmail.com' },
    { icon: Phone,  label: 'Phone',    value: '+91 8603778367',           href: 'tel:+918603778367' },
    { icon: MapPin, label: 'Location', value: 'Bengaluru, India',         href: null },
  ];

  if (state.succeeded) {
    return (
      <section id="contact" className="relative py-16 sm:py-24 lg:py-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[50vh] text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-5"
            style={{ background: 'linear-gradient(135deg,#10b981,#059669)', boxShadow: '0 0 50px rgba(16,185,129,0.4)' }}>
            <CheckCircle size={28} className="text-white" />
          </motion.div>
          <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-3">Message Sent!</h3>
          <p className="text-white/50 text-sm max-w-xs sm:max-w-sm leading-relaxed">
            I'll get back to you at <span className="text-red-400">farazakram2024@gmail.com</span> within 24 hours.
          </p>
          <button onClick={() => window.location.reload()}
            className="mt-8 px-6 py-3 rounded-full text-sm font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300">
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32"
      style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(139,0,0,0.07) 0%, transparent 60%)' }}>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-10 sm:mb-16">
          <p className="font-mono text-red-400 text-xs tracking-widest mb-3">07. CONTACT</p>
          <h2 className="section-title text-white">Let's <span className="text-gradient-red">Connect</span></h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-red-500 to-transparent" />
          <p className="mt-4 text-white/40 text-sm max-w-md">
            Open to full-time roles, freelance projects, and collaborations. Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* info */}
          <div className="space-y-4 sm:space-y-5">
            {contactItems.map((item) => (
              <div key={item.label}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl hover:bg-white/[0.02] transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.25)' }}>
                  <item.icon size={16} className="text-red-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-white/30 text-xs tracking-wider mb-0.5">{item.label.toUpperCase()}</p>
                  {item.href
                    ? <a href={item.href} className="text-white text-sm font-medium hover:text-red-400 transition-colors break-all">{item.value}</a>
                    : <p className="text-white text-sm font-medium">{item.value}</p>}
                </div>
              </div>
            ))}

            {/* socials */}
            <div className="p-4 sm:p-5 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="font-mono text-white/30 text-xs tracking-wider mb-3">FIND ME ON</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <a href="https://github.com/faraz-2023" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-sm text-white/60 hover:text-white transition-all duration-300 hover:bg-white/5"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <FaGithub size={14} /> GitHub
                </a>
                <a href="https://linkedin.com/in/farazakram031" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-sm text-white/60 hover:text-white transition-all duration-300 hover:bg-white/5"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <FaLinkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>

            <button onClick={() => resumeCtx?.openResumeModal()}
              className="w-full flex items-center justify-center gap-3 py-3.5 sm:py-4 rounded-2xl font-semibold text-white text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              style={{ background: 'rgba(220,20,60,0.08)', border: '1px solid rgba(220,20,60,0.3)' }}>
              <Download size={15} />
              Download Resume
              <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono">PDF</span>
            </button>

            {FORMSPREE_ID === 'YOUR_FORM_ID' && (
              <div className="p-4 rounded-xl" style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.2)' }}>
                <p className="font-mono text-amber-400 text-xs tracking-wider mb-1">⚡ ACTIVATE EMAIL</p>
                <p className="text-white/40 text-xs leading-relaxed">
                  Get a free ID at <a href="https://formspree.io" target="_blank" rel="noreferrer" className="text-amber-400 underline">formspree.io</a> and paste in ContactSection.jsx. Until then the form opens your mail client.
                </p>
              </div>
            )}
          </div>

          {/* form */}
          <form onSubmit={handleSubmit}
            className="rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-5"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)' }}>

            <div className="mb-4 sm:mb-6">
              <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-1">Send a Message</h3>
              <p className="text-white/30 text-xs font-mono">I reply within 24 hrs · farazakram2024@gmail.com</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-white/35 text-xs tracking-wider mb-2">YOUR NAME *</label>
                <input type="text" name="name" required placeholder="John Doe"
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl text-sm text-white placeholder-white/20"
                  style={inputBase}
                  onFocus={e => (e.target.style.border = '1px solid rgba(220,20,60,0.5)')}
                  onBlur={e => (e.target.style.border = '1px solid rgba(255,255,255,0.09)')} />
                <ValidationError field="name" prefix="Name" errors={state.errors} className="text-red-400 text-xs mt-1 font-mono" />
              </div>
              <div>
                <label className="block font-mono text-white/35 text-xs tracking-wider mb-2">EMAIL *</label>
                <input type="email" name="email" required placeholder="john@example.com"
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl text-sm text-white placeholder-white/20"
                  style={inputBase}
                  onFocus={e => (e.target.style.border = '1px solid rgba(220,20,60,0.5)')}
                  onBlur={e => (e.target.style.border = '1px solid rgba(255,255,255,0.09)')} />
                <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-400 text-xs mt-1 font-mono" />
              </div>
            </div>

            <div>
              <label className="block font-mono text-white/35 text-xs tracking-wider mb-2">SUBJECT *</label>
              <input type="text" name="subject" required placeholder="Job Opportunity / Collaboration"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl text-sm text-white placeholder-white/20"
                style={inputBase}
                onFocus={e => (e.target.style.border = '1px solid rgba(220,20,60,0.5)')}
                onBlur={e => (e.target.style.border = '1px solid rgba(255,255,255,0.09)')} />
            </div>

            <div>
              <label className="block font-mono text-white/35 text-xs tracking-wider mb-2">MESSAGE *</label>
              <textarea name="message" required rows={4} placeholder="Tell me about the opportunity..."
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl text-sm text-white placeholder-white/20 resize-none"
                style={inputBase}
                onFocus={e => (e.target.style.border = '1px solid rgba(220,20,60,0.5)')}
                onBlur={e => (e.target.style.border = '1px solid rgba(255,255,255,0.09)')} />
              <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-400 text-xs mt-1 font-mono" />
            </div>

            {state.errors && state.errors.length > 0 && (
              <div className="flex items-start gap-3 p-3 rounded-xl text-xs"
                style={{ background: 'rgba(220,20,60,0.08)', border: '1px solid rgba(220,20,60,0.25)' }}>
                <AlertCircle size={13} className="text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-red-300">Something went wrong. Email me at farazakram2024@gmail.com</span>
              </div>
            )}

            <motion.button type="submit" disabled={state.submitting}
              whileHover={{ scale: state.submitting ? 1 : 1.02 }}
              whileTap={{ scale: state.submitting ? 1 : 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl font-semibold text-white text-sm transition-all duration-300"
              style={{ background: 'linear-gradient(135deg,#DC143C,#8B0000)', boxShadow: '0 0 30px rgba(220,20,60,0.3)', opacity: state.submitting ? 0.7 : 1 }}>
              {state.submitting
                ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</>
                : <><Send size={14} /> Send Message</>}
            </motion.button>

            <p className="text-white/20 text-xs text-center font-mono">
              Powered by <a href="https://formspree.io" target="_blank" rel="noreferrer" className="text-white/35 hover:text-white/60 underline transition-colors">Formspree</a> · No backend required
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
