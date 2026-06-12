import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMouseMove}
      whileHover={{ y: -6, scale: 1.04 }}
      className="relative rounded-2xl p-5 cursor-default overflow-hidden group"
      style={{
        background: hovered
          ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(220,20,60,0.12) 0%, rgba(255,255,255,0.03) 60%)`
          : 'rgba(255,255,255,0.03)',
        border: hovered ? '1px solid rgba(220,20,60,0.3)' : '1px solid rgba(255,255,255,0.06)',
        boxShadow: hovered ? '0 8px 40px rgba(220,20,60,0.15)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Glow on hover */}
      {hovered && (
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(220,20,60,0.08) 0%, transparent 60%)`,
          }}
        />
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-mono text-red-400 text-xs">{skill.level}%</span>
        </div>

        <p className="font-display font-semibold text-white text-sm mb-3">{skill.name}</p>

        {/* Progress bar */}
        <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.06 + 0.3, ease: 'power2.out' }}
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #DC143C, #ff4444)' }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef(null);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #DC143C, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-red-400 text-xs tracking-widest mb-3">04. SKILLS</p>
          <h2 className="section-title text-white">
            Tech <span className="text-gradient-red">Stack</span>
          </h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-red-500 to-transparent" />
          <p className="mt-4 text-white/40 text-sm max-w-xl">
            Technologies and tools I work with to build modern, performant web applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {Object.entries(skills).map(([category, categorySkills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-red-400 tracking-widest">{category.toUpperCase()}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-red-500/20 to-transparent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {categorySkills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i + catIndex * 5} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative stat */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { num: '2+', label: 'Years Learning' },
            { num: '15+', label: 'Technologies' },
            { num: '4+', label: 'Frameworks' },
            { num: '10+', label: 'Projects Built' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="font-display font-bold text-2xl text-white">{item.num}</span>
              <span className="font-mono text-white/30 text-xs mt-1 tracking-wider">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
