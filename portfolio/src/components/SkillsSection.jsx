import { useState, useRef } from 'react';
import { skills } from '../data/portfolioData';

/* category accent colours */
const CATEGORY_COLORS = {
  'Frontend Development': '#DC143C',
  'Backend Development':  '#6366f1',
  'Databases':            '#10b981',
  'Tools & Platforms':    '#f59e0b',
};

/* category icons */
const CATEGORY_ICONS = {
  'Frontend Development': '🖥️',
  'Backend Development':  '⚙️',
  'Databases':            '🗄️',
  'Tools & Platforms':    '🛠️',
};

const SkillCard = ({ skill, accentColor }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const [pos, setPos]   = useState({ x: 50, y: 50 });

  const onMouseMove = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left)  / r.width)  * 100,
      y: ((e.clientY - r.top)   / r.height) * 100,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMouseMove}
      className="relative rounded-2xl p-4 cursor-default select-none"
      style={{
        background: hovered
          ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${accentColor}18 0%, rgba(255,255,255,0.03) 65%)`
          : 'rgba(255,255,255,0.03)',
        border: hovered
          ? `1px solid ${accentColor}45`
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: hovered ? `0 8px 32px ${accentColor}18` : 'none',
        transform: hovered ? 'translateY(-4px) scale(1.03)' : 'translateY(0) scale(1)',
        transition: 'all 0.25s ease',
      }}
    >
      {/* icon + level */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg leading-none">{skill.icon}</span>
        <span className="font-mono text-xs" style={{ color: accentColor }}>
          {skill.level}%
        </span>
      </div>

      {/* name */}
      <p className="font-display font-semibold text-white text-xs mb-3 leading-tight">
        {skill.name}
      </p>

      {/* progress bar */}
      <div className="h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: hovered ? `${skill.level}%` : `${skill.level * 0.85}%`,
            background: `linear-gradient(90deg, ${accentColor}, ${accentColor}99)`,
          }}
        />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────── */

const SkillsSection = () => (
  <section
    id="skills"
    className="relative py-24 lg:py-32"
    style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139,0,0,0.04) 0%, transparent 60%)' }}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      {/* ── Header ── */}
      <div className="mb-16">
        <p className="font-mono text-red-400 text-xs tracking-widest mb-3">04. SKILLS</p>
        <h2 className="section-title text-white">
          Tech <span className="text-gradient-red">Stack</span>
        </h2>
        <div className="mt-4 h-px w-20 bg-gradient-to-r from-red-500 to-transparent" />
        <p className="mt-4 text-white/40 text-sm max-w-xl">
          Technologies and tools I work with to build modern, performant web applications.
        </p>
      </div>

      {/* ── Categories ── */}
      <div className="space-y-14">
        {Object.entries(skills).map(([category, categorySkills]) => {
          const color = CATEGORY_COLORS[category] ?? '#DC143C';
          const icon  = CATEGORY_ICONS[category]  ?? '💡';

          return (
            <div key={category}>
              {/* category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}35` }}
                >
                  {icon}
                </div>
                <span
                  className="font-mono text-xs tracking-widest font-semibold"
                  style={{ color }}
                >
                  {category.toUpperCase()}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: `linear-gradient(90deg, ${color}35, transparent)` }}
                />
                <span className="font-mono text-white/20 text-xs">
                  {categorySkills.length} skills
                </span>
              </div>

              {/* skill cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} accentColor={color} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom stats ── */}
      <div
        className="mt-16 rounded-2xl p-8"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { num: '2+',  label: 'Years Learning',   color: '#DC143C' },
            { num: '15+', label: 'Technologies',      color: '#6366f1' },
            { num: '4',   label: 'Frameworks',        color: '#10b981' },
            { num: '10+', label: 'Projects Built',    color: '#f59e0b' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span
                className="font-display font-bold text-3xl"
                style={{ color: s.color }}
              >
                {s.num}
              </span>
              <span className="font-mono text-white/35 text-xs tracking-wider">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
