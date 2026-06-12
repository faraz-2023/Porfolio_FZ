import { Trophy } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const AchievementCard = ({ achievement }) => (
  <div
    className="group relative rounded-2xl p-6 cursor-default transition-all duration-300 hover:-translate-y-1"
    style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.08)',
    }}
  >
    {/* hover glow */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
      style={{
        background: `radial-gradient(circle at 30% 30%, ${achievement.color}12, transparent 65%)`,
      }}
    />

    {/* left border accent */}
    <div
      className="absolute left-0 top-6 bottom-6 w-0.5 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: achievement.color }}
    />

    <div className="relative z-10">
      {/* icon + year */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
          style={{
            background: `${achievement.color}18`,
            border: `1px solid ${achievement.color}35`,
          }}
        >
          {achievement.icon}
        </div>
        <span
          className="font-mono text-xs px-2.5 py-1 rounded-full"
          style={{
            color: achievement.color,
            background: `${achievement.color}12`,
            border: `1px solid ${achievement.color}25`,
          }}
        >
          {achievement.year}
        </span>
      </div>

      <h3 className="font-display font-bold text-white text-sm leading-snug mb-2 group-hover:text-red-200 transition-colors duration-300">
        {achievement.title}
      </h3>
      <p className="text-white/40 text-xs leading-relaxed">{achievement.description}</p>

      {/* bottom line */}
      <div
        className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg,${achievement.color}50,transparent)` }}
      />
    </div>
  </div>
);

/* ─────────────────────────────────────────── */

const AchievementsSection = () => (
  <section
    id="achievements"
    className="relative py-24 lg:py-32"
    style={{
      background:
        'radial-gradient(ellipse at 50% 80%, rgba(139,0,0,0.05) 0%, transparent 60%)',
    }}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* header */}
      <div className="mb-16">
        <p className="font-mono text-red-400 text-xs tracking-widest mb-3">06. ACHIEVEMENTS</p>
        <h2 className="section-title text-white">
          Milestones &amp; <span className="text-gradient-red">Awards</span>
        </h2>
        <div className="mt-4 h-px w-20 bg-gradient-to-r from-red-500 to-transparent" />
      </div>

      {/* cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((item) => (
          <AchievementCard key={item.id} achievement={item} />
        ))}
      </div>

      {/* bottom banner */}
      <div
        className="mt-12 rounded-2xl p-8 text-center relative overflow-hidden"
        style={{
          background: 'rgba(220,20,60,0.05)',
          border: '1px solid rgba(220,20,60,0.15)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(220,20,60,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(220,20,60,0.4) 1px,transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <Trophy className="w-8 h-8 text-red-400 mx-auto mb-3" />
        <p className="font-display font-bold text-white text-xl mb-2">
          Always learning, always growing.
        </p>
        <p className="text-white/40 text-sm">
          Continuously pushing boundaries through challenges, research, and innovation.
        </p>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
