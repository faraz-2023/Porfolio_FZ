import { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView as useIOView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Code2, Download, User } from 'lucide-react';
import { stats, education, personalInfo } from '../data/portfolioData';
import { ResumeContext } from '../App';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { ref: statsRef, inView: statsVisible } = useIOView({ triggerOnce: true, threshold: 0.3 });
  const resumeCtx = useContext(ResumeContext);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(139,0,0,0.05) 0%, transparent 60%)' }}>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <p className="font-mono text-red-400 text-xs tracking-widest mb-3">02. ABOUT</p>
          <h2 className="section-title text-white">
            About <span className="text-gradient-red">Me</span>
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-red-500 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Bio + Education */}
          <div className="space-y-5">
            {/* Bio card */}
            <div className="about-card glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.3)' }}>
                  <User size={18} className="text-red-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg">About Me</h3>
              </div>
              <p className="text-white/60 leading-relaxed text-sm mb-4">
                I'm a Computer Science Engineering student at <span className="text-white/80">Ghousia College of Engineering</span> with a strong passion for frontend development and modern web technologies. I specialize in building responsive user interfaces using <span className="text-red-400">React.js</span> and have experience working with backend frameworks such as Django and FastAPI.
              </p>
              <p className="text-white/60 leading-relaxed text-sm">
                Beyond web development, I enjoy exploring <span className="text-white/80">Artificial Intelligence</span>, data-driven applications, and software solutions that solve real-world problems. My goal is to continuously grow as a software engineer and contribute to impactful products that improve people's lives.
              </p>
              <div className="mt-5 flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={14} className="text-red-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Education card */}
            <div className="about-card glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.3)' }}>
                  <GraduationCap size={18} className="text-red-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg">Education</h3>
              </div>

              <div className="relative pl-5">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 to-transparent" />
                <div className="absolute left-[-3px] top-1 w-2 h-2 rounded-full bg-red-500" />

                <div>
                  <span className="font-mono text-red-400 text-xs px-2 py-0.5 rounded-full inline-block mb-2"
                    style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.2)' }}>
                    CGPA {education.cgpa}
                  </span>
                  <h4 className="font-display font-bold text-white text-base mt-1">{education.degree}</h4>
                  <p className="text-white/60 text-sm mt-1">{education.institution}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin size={12} className="text-white/30" />
                    <p className="text-white/30 text-xs">{education.location}</p>
                  </div>
                  <p className="font-mono text-white/30 text-xs mt-1">{education.year}</p>
                </div>
              </div>
            </div>

            {/* Resume download */}
            <motion.button
              onClick={() => resumeCtx?.openResumeModal()}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="about-card w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-white text-sm transition-all duration-300"
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
          </div>

          {/* Right — Stats + Core Stack */}
          <div className="about-card space-y-5">
            {/* Stats grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 group hover:border-red-500/30 transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="text-3xl font-display font-bold text-white mb-1">
                    {statsVisible ? (
                      <CountUp end={stat.value} duration={2} delay={i * 0.2} suffix={stat.suffix} />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </div>
                  <p className="text-white/40 text-xs leading-snug">{stat.label}</p>
                  <div className="mt-3 h-px w-full bg-gradient-to-r from-red-500/40 to-transparent
                    scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </motion.div>
              ))}
            </div>

            {/* Core stack */}
            <div className="glass-card rounded-2xl p-6">
              <p className="font-mono text-red-400 text-xs tracking-wider mb-4">CORE STACK</p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'FastAPI', 'MongoDB', 'SQL', 'Git', 'Vercel', 'Figma'].map((tech) => (
                  <span key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-mono text-white/60 hover:text-white transition-all duration-300 hover:bg-red-500/10 hover:border-red-500/30 cursor-default"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact teaser */}
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <p className="font-mono text-red-400 text-xs tracking-wider mb-2">CONTACT</p>
              <a href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200 group">
                <span className="text-red-400 font-mono text-xs w-16">EMAIL</span>
                <span className="group-hover:text-red-400 transition-colors">{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200 group">
                <span className="text-red-400 font-mono text-xs w-16">PHONE</span>
                <span>{personalInfo.phone}</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200 group">
                <span className="text-red-400 font-mono text-xs w-16">GITHUB</span>
                <span>github.com/faraz-2023</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200 group">
                <span className="text-red-400 font-mono text-xs w-16">LINKEDIN</span>
                <span>linkedin.com/in/farazakram031</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
