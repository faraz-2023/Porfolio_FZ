import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Clock, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl flex flex-col"
      style={{
        background: hovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        border: hovered
          ? `1px solid ${project.accentColor}55`
          : '1px solid rgba(255,255,255,0.09)',
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.5), 0 0 40px ${project.accentColor}18`
          : '0 4px 20px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.35s ease',
      }}
    >
      {/* ── Banner ── */}
      <div
        className="relative h-44 rounded-t-2xl overflow-hidden flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg,#0d0d0d 0%,#1a0808 100%)' }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

        {/* big blurred name */}
        <span
          className="absolute font-display font-black select-none pointer-events-none"
          style={{
            fontSize: '6rem',
            color: project.accentColor,
            opacity: 0.06,
            whiteSpace: 'nowrap',
          }}
        >
          {project.name}
        </span>

        {/* centre icon */}
        <div
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-display font-bold text-white"
          style={{
            background: `${project.accentColor}25`,
            border: `1px solid ${project.accentColor}50`,
            boxShadow: `0 0 30px ${project.accentColor}30`,
          }}
        >
          {project.name.charAt(0)}
        </div>

        {/* status badge */}
        <div className="absolute top-3 right-3 z-10">
          {project.status === 'live' ? (
            <span
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-green-400"
              style={{
                background: 'rgba(16,185,129,0.15)',
                border: '1px solid rgba(16,185,129,0.35)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          ) : (
            <span
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-amber-400"
              style={{
                background: 'rgba(245,158,11,0.12)',
                border: '1px solid rgba(245,158,11,0.3)',
              }}
            >
              <Clock size={10} />
              Coming Soon
            </span>
          )}
        </div>

        {hovered && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.accentColor}12, transparent 70%)`,
            }}
          />
        )}
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className="font-display font-bold text-xl leading-tight mb-1 transition-colors duration-300"
          style={{ color: hovered ? '#fca5a5' : '#ffffff' }}
        >
          {project.name}
        </h3>
        <p className="font-mono text-xs mb-3" style={{ color: project.accentColor }}>
          {project.subtitle}
        </p>
        <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* key features */}
        <div className="mb-5">
          <p className="font-mono text-white/25 text-xs tracking-widest mb-3">KEY FEATURES</p>
          <ul className="space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-white/50 text-xs leading-relaxed">
                <CheckCircle2
                  size={12}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: project.accentColor }}
                />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5 flex-1 content-start">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs font-mono text-white/50"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="h-px mb-4"
          style={{
            background: 'linear-gradient(90deg,rgba(255,255,255,0.06),transparent)',
          }}
        />

        {/* buttons */}
        <div className="flex gap-3">
          {project.status === 'live' && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:opacity-80"
              style={{
                background: `linear-gradient(135deg,${project.accentColor}45,${project.accentColor}20)`,
                border: `1px solid ${project.accentColor}45`,
              }}
            >
              <ExternalLink size={14} /> Live Demo <ArrowUpRight size={12} />
            </a>
          ) : (
            <div
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white/25 select-none"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <Clock size={13} /> Coming Soon
            </div>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white/60 hover:text-white transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>

      {/* bottom accent */}
      <div
        className="h-0.5 rounded-b-2xl transition-all duration-500"
        style={{
          width: hovered ? '100%' : '0%',
          background: `linear-gradient(90deg,${project.accentColor},transparent)`,
        }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────── */

const ProjectsSection = () => (
  <section id="projects" className="relative py-24 lg:py-32">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* header */}
      <div className="mb-16">
        <p className="font-mono text-red-400 text-xs tracking-widest mb-3">05. PROJECTS</p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="section-title text-white">
              Featured <span className="text-gradient-red">Work</span>
            </h2>
            <div className="mt-4 h-px w-20 bg-gradient-to-r from-red-500 to-transparent" />
          </div>
          <p className="text-white/40 text-sm max-w-sm">
            A selection of projects showcasing problem-solving and technical depth.
          </p>
        </div>
      </div>

      {/* grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {/* cta */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/faraz-2023"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/5"
        >
          <Github size={16} /> View All Projects on GitHub <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
