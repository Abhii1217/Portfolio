import Section from './ui/Section'
import PROJECTS from '../data/projects'

function ProjectCard({ project }) {
  return (
    <div className="bg-[#111111] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#2a2a2a] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-200">
      
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-40 object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />

        <div
          className="hidden w-full h-40 bg-[#0f0f0f] items-center justify-center border-b border-[#1a1a1a]"
          aria-hidden="true"
        >
          <span className="font-mono text-xs text-[#2a2a2a]">
            {project.name}
          </span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="absolute top-3 right-3 flex gap-2">
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 text-xs text-white bg-black/60 rounded-full border border-gray-600 hover:bg-black/80 transition-colors duration-150"
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
              className="flex items-center gap-1.5 px-3 py-1 text-xs text-white bg-black/60 rounded-full border border-gray-600 hover:bg-black/80 transition-colors duration-150"
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
              className="flex items-center gap-1.5 px-3 py-1 text-xs text-white bg-black/60 rounded-full border border-gray-600 hover:bg-black/80 transition-colors duration-150"
            >
              View Patent
            </a>
          )}

        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold text-sm">{project.name}</h3>
        <p className="text-xs text-[#4a4a4a] mt-1">{project.date}</p>
        
        <p className="text-sm text-[#6b6b6b] mt-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#5a5a5a] rounded"
            >
              {tag}
            </span>
          ))}
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