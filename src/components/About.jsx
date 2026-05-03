import Section from './ui/Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-[#8a8a8a] text-base leading-relaxed max-w-xl">
        <p>
          I’m a final-year Computer Science student at KIIT University building full-stack applications with a focus on backend systems and real-world data handling. My stack includes Node.js, Express, React, MySQL, and Tailwind CSS, and I prioritize writing clean, scalable code over quick fixes.
        </p>
        <p>
        I’m currently building a Skill-Swap Marketplace with Proof Tasks — a platform where users exchange skills instead of money, with built-in task verification. Core systems include skill-based matching, proof uploads, peer-validated reputation, and a skill graph for smart recommendations.
        </p>
        <p>
          Outside work: Specialty coffee, contributing to community-driven initiatives and working on creative tech projects.        </p>
      </div>
    </Section>
  )
}