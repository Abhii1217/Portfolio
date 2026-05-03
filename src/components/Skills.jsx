import Section from './ui/Section'
import SKILLS from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#141414] rounded-full border border-[#1f1f1f] hover:border-[#2f2f2f] transition-colors duration-150 cursor-default"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-4 h-4 object-contain"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <span className="text-sm text-[#a0a0a0]">{skill.name}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}