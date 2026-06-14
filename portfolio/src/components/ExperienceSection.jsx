import { Briefcase, CheckCircle2, Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';

const ExperienceSection = () => (
  <section id="experience" className="relative py-16 sm:py-24 lg:py-32"
    style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(139,0,0,0.04) 0%, transparent 60%)' }}>

    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* header */}
      <div className="mb-10 sm:mb-16">
        <p className="font-mono text-red-400 text-xs tracking-widest mb-3">03. EXPERIENCE</p>
        <h2 className="section-title text-white">Work <span className="text-gradient-red">History</span></h2>
        <div className="mt-4 h-px w-20 bg-gradient-to-r from-red-500 to-transparent" />
      </div>

      {/* timeline */}
      <div className="relative max-w-3xl">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/60 via-red-500/20 to-transparent" />

        {experience.map((exp, i) => (
          <div key={i} className="relative pl-12 sm:pl-16 pb-10 last:pb-0">
            {/* dot */}
            <div className="absolute left-4 sm:left-6 top-5 w-3 h-3 sm:w-4 sm:h-4 rounded-full -translate-x-1/2 z-10"
              style={{ background: 'linear-gradient(135deg,#DC143C,#8B0000)', boxShadow: '0 0 16px rgba(220,20,60,0.6)', border: '2px solid rgba(220,20,60,0.3)' }} />

            {/* card */}
            <div className="glass-card rounded-2xl p-5 sm:p-8 group hover:translate-x-1 transition-transform duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <span className="px-2 py-0.5 rounded-full text-xs font-mono text-red-400 inline-block mb-2"
                    style={{ background: 'rgba(220,20,60,0.1)', border: '1px solid rgba(220,20,60,0.2)' }}>
                    {exp.type}
                  </span>
                  <h3 className="font-display font-bold text-white text-lg sm:text-xl mt-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Briefcase size={12} className="text-red-400" />
                    <span className="text-red-400 font-semibold text-sm">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-white/40 text-xs sm:whitespace-nowrap">
                  <Calendar size={11} />
                  <span className="font-mono">{exp.period}</span>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-red-500/20 to-transparent mb-5" />

              <div className="space-y-2.5 sm:space-y-3">
                {exp.achievements.map((a, j) => (
                  <div key={j} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 size={13} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-red-500/40 to-transparent transition-all duration-500" />
            </div>
          </div>
        ))}

        {/* seeking indicator */}
        <div className="relative pl-12 sm:pl-16">
          <div className="absolute left-4 sm:left-6 top-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full -translate-x-1/2 z-10 border-2 border-dashed border-red-500/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/60 animate-pulse" />
          </div>
          <div className="py-3 px-4 sm:py-4 sm:px-6 rounded-xl"
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

export default ExperienceSection;
