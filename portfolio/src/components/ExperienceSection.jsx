import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line drawing
      gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.exp-card', {
        x: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(139,0,0,0.04) 0%, transparent 60%)' }}>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-red-400 text-xs tracking-widest mb-3">03. EXPERIENCE</p>
          <h2 className="section-title text-white">
            Work <span className="text-gradient-red">History</span>
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-red-500 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-3xl">
          {/* Timeline vertical line */}
          <div className="timeline-line absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/60 via-red-500/20 to-transparent" />

          {experience.map((exp, i) => (
            <div key={i} className="exp-card relative pl-16 pb-12 last:pb-0">
              {/* Dot on timeline */}
              <div className="absolute left-4 top-6 w-4 h-4 rounded-full -translate-x-1/2 z-10"
                style={{
                  background: 'linear-gradient(135deg, #DC143C, #8B0000)',
                  boxShadow: '0 0 20px rgba(220,20,60,0.6)',
                  border: '2px solid rgba(220,20,60,0.3)',
                }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card rounded-2xl p-8 group"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full text-xs font-mono text-red-400"
                        style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.2)' }}>
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-white text-xl mt-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase size={13} className="text-red-400" />
                      <span className="text-red-400 font-semibold text-sm">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                      <Calendar size={12} />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-red-500/20 to-transparent mb-6" />

                {/* Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((achievement, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <CheckCircle2 size={15} className="text-red-400 mt-0.5 flex-shrink-0" />
                      <p className="text-white/60 text-sm leading-relaxed group-hover/item:text-white/80 transition-colors duration-200">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom accent line on hover */}
                <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-red-500/40 to-transparent transition-all duration-500" />
              </motion.div>
            </div>
          ))}

          {/* Current position indicator */}
          <div className="exp-card relative pl-16">
            <div className="absolute left-4 top-3 w-4 h-4 rounded-full -translate-x-1/2 z-10 border-2 border-dashed border-red-500/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/60 animate-pulse" />
            </div>
            <div className="py-4 px-6 rounded-xl"
              style={{ background: 'rgba(220,20,60,0.04)', border: '1px dashed rgba(220,20,60,0.15)' }}>
              <p className="font-mono text-white/30 text-xs tracking-wider">
                <span className="text-green-400">●</span> Currently seeking full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
