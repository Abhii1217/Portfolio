import { useState } from 'react'
import Section from './ui/Section'
import PROJECTS from '../data/projects'

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`flip-card h-[420px] rounded-xl cursor-pointer ${flipped ? 'is-flipped' : ''}`}
      onClick={() => setFlipped((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setFlipped((prev) => !prev)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${project.name} — click to ${flipped ? 'hide' : 'show'} details`}
    >
      <div className="flip-card-inner">

        <div className="flip-card-front bg-[#111111] border border-[#1a1a1a] hover:border-[#2a2a2a] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-200 flex flex-col">

          <div className="relative h-48 flex-shrink-0">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />

            <div className="absolute bottom-2 left-3 text-[10px] font-mono text-white/25 select-none pointer-events-none tracking-wider">
              tap to flip ↗
            </div>

            <div
              className="hidden w-full h-full bg-[#0f0f0f] items-center justify-center border-b border-[#1a1a1a]"
              aria-hidden="true"
            >
              <span className="font-mono text-xs text-[#2a2a2a]">{project.name}</span>
            </div>

            <div className="absolute top-3 right-3 flex flex-col gap-1.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-white bg-black/70 backdrop-blur-sm rounded-full border border-white/10 hover:bg-black/90 transition-colors duration-150"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt=""
                    className="w-3 h-3"
                    style={{ filter: 'invert(1)' }}
                  />
                  Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-white bg-black/70 backdrop-blur-sm rounded-full border border-white/10 hover:bg-black/90 transition-colors duration-150"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  Live
                </a>
              )}
              {project.patentUrl && (
                <a
                  href={project.patentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-white bg-black/70 backdrop-blur-sm rounded-full border border-white/10 hover:bg-black/90 transition-colors duration-150"
                >
                  View Patent
                </a>
              )}
            </div>
          </div>

          <div className="p-4 flex flex-col flex-1">
            <h3 className="text-white font-semibold text-sm">{project.name}</h3>
            <p className="text-xs text-[#4a4a4a] mt-0.5">{project.date}</p>

          {project.description && (
            <p className="text-xs text-[#5a5a5a] mt-2 leading-relaxed">
            {project.description}
            </p>
          )}

            <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-[#1a1a1a] text-[#5a5a5a] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flip-card-back bg-[#0d0d0d] border border-[#1f1f1f] flex flex-col p-5 overflow-hidden">

          <div className="flex-shrink-0 mb-3">
            <p className="text-[10px] font-mono text-red-500 tracking-widest uppercase mb-1">
              {project.date}
            </p>
            <h3 className="text-white font-semibold text-sm">{project.name}</h3>
          </div>

          {project.problem && (
            <div className="flex-shrink-0 mb-3">
              <p className="text-[10px] font-mono text-[#3a3a3a] tracking-widest uppercase mb-1">
                Problem
              </p>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {project.solution && (
            <div className="flex-shrink-0 mb-3">
              <p className="text-[10px] font-mono text-[#3a3a3a] tracking-widest uppercase mb-1">
                Solution
              </p>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {project.details && project.details.length > 0 && (
            <ul className="mt-1 space-y-1.5 flex-1 overflow-hidden">
              {project.details.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#5a5a5a]">
                  <span className="mt-1 w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex-shrink-0 flex justify-end mt-3 pt-3 border-t border-[#1a1a1a]">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setFlipped(false)
              }}
              className="text-xs text-[#3a3a3a] hover:text-[#6b6b6b] transition-colors duration-150 font-mono cursor-pointer"
            >
              ← back
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}