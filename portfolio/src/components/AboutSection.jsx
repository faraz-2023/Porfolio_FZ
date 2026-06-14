import { useRef, useContext } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Download, User } from 'lucide-react';
import { stats, education, personalInfo } from '../data/portfolioData';
import { ResumeContext } from '../App';

const AboutSection = () => {
  const resumeCtx = useContext(ResumeContext);
  const { ref: statsRef, inView: statsVisible } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32"
      style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(139,0,0,0.05) 0%, transparent 60%)' }}>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-10 sm:mb-16">
          <p className="font-mono text-red-400 text-xs tracking-widest mb-3">02. ABOUT</p>
          <h2 className="section-title text-white">About <span className="text-gradient-red">Me</span></h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-red-500 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">

          {/* Left */}
          <div className="space-y-4 sm:space-y-5">
            {/* bio */}
            <div className="glass-card rounded-2xl p-5 sm:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.3)' }}>
                  <User size={16} className="text-red-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-base sm:text-lg">About Me</h3>
              </div>
              <p className="text-white/60 leading-relaxed text-sm mb-3">
                I'm a Computer Science Engineering student at <span className="text-white/80">Ghousia College of Engineering</span> with a strong passion for frontend development. I specialize in building responsive user interfaces using <span className="text-red-400">React.js</span> and have experience with Django and FastAPI.
              </p>
              <p className="text-white/60 leading-relaxed text-sm">
                Beyond web development, I enjoy exploring <span className="text-white/80">Artificial Intelligence</span> and software solutions that solve real-world problems.
              </p>
              <div className="mt-4 flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={13} className="text-red-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* education */}
            <div className="glass-card rounded-2xl p-5 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.3)' }}>
                  <GraduationCap size={16} className="text-red-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-base sm:text-lg">Education</h3>
              </div>
              <div className="relative pl-4 sm:pl-5">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 to-transparent" />
                <div className="absolute left-[-3px] top-1 w-2 h-2 rounded-full bg-red-500" />
                <span className="font-mono text-red-400 text-xs px-2 py-0.5 rounded-full inline-block mb-2"
                  style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.2)' }}>
                  CGPA {education.cgpa}
                </span>
                <h4 className="font-display font-bold text-white text-sm sm:text-base mt-1">{education.degree}</h4>
                <p className="text-white/60 text-sm mt-1">{education.institution}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <MapPin size={11} className="text-white/30" />
                  <p className="text-white/30 text-xs">{education.location}</p>
                </div>
                <p className="font-mono text-white/30 text-xs mt-1">{education.year}</p>
              </div>
            </div>

            {/* resume btn */}
            <button
              onClick={() => resumeCtx?.openResumeModal()}
              className="w-full flex items-center justify-center gap-3 py-3.5 sm:py-4 rounded-2xl font-semibold text-white text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: 'rgba(220,20,60,0.08)', border: '1px solid rgba(220,20,60,0.3)' }}
            >
              <Download size={15} />
              Download Resume
              <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono">PDF</span>
            </button>
          </div>

          {/* Right */}
          <div className="space-y-4 sm:space-y-5">
            {/* stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <div key={stat.label}
                  className="glass-card rounded-2xl p-4 sm:p-6 group hover:border-red-500/30 transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                    {statsVisible
                      ? <CountUp end={stat.value} duration={2} delay={i * 0.2} suffix={stat.suffix} />
                      : <span>0{stat.suffix}</span>}
                  </div>
                  <p className="text-white/40 text-xs leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* core stack */}
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <p className="font-mono text-red-400 text-xs tracking-wider mb-3 sm:mb-4">CORE STACK</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {['React.js','JavaScript','TypeScript','Tailwind CSS','Python','Django','FastAPI','MongoDB','SQL','Git','Vercel','Figma'].map((tech) => (
                  <span key={tech}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-mono text-white/60 hover:text-white transition-all duration-300 hover:bg-red-500/10 cursor-default"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* contact teaser */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 space-y-2.5">
              <p className="font-mono text-red-400 text-xs tracking-wider mb-1">CONTACT</p>
              {[
                { label: 'EMAIL', href: `mailto:${personalInfo.email}`, value: personalInfo.email },
                { label: 'PHONE', href: `tel:${personalInfo.phone}`, value: personalInfo.phone },
                { label: 'GITHUB', href: personalInfo.github, value: 'github.com/faraz-2023' },
                { label: 'LINKEDIN', href: personalInfo.linkedin, value: 'linkedin.com/in/farazakram031' },
              ].map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="flex items-start gap-2 text-white/50 hover:text-white text-xs sm:text-sm transition-colors duration-200 group">
                  <span className="text-red-400 font-mono text-xs w-16 flex-shrink-0 mt-0.5">{c.label}</span>
                  <span className="break-all">{c.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
