import Section from './ui/Section'
import EDUCATION from '../data/education'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        {EDUCATION.map((edu) => (
          <div
            key={edu.institution}
            className="flex flex-col sm:flex-row sm:justify-between gap-2"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                {edu.logo ? (
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-10 h-10 rounded-full object-cover border border-[#2a2a2a]"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full border border-[#2a2a2a] bg-[#141414] flex items-center justify-center text-xs text-[#4a4a4a] font-mono flex-shrink-0">
                    OL
                  </div>
                )}
                <div>
                  <p className="text-white font-medium text-sm">
                    {edu.institution}
                  </p>
                  <p className="text-[#6b6b6b] text-sm">{edu.degree}</p>
                </div>
              </div>
              <p className="text-[#5a5a5a] text-sm leading-relaxed mt-2 max-w-sm pl-[52px]">
                {edu.detail}
              </p>
            </div>
            <p className="text-xs font-mono text-[#3a3a3a] shrink-0 sm:text-right">
              {edu.period}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}