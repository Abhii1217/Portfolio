import Section from './ui/Section'
import CERTS from '../data/certifications'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {CERTS.map((cert) => (
          <div
            key={cert.name}
            className="bg-[#111111] border border-[#1a1a1a] rounded-xl p-4 hover:border-[#2a2a2a] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-200"
          >
            <img
              src={cert.logo}
              alt={cert.issuer}
              className="w-8 h-8 object-contain mb-3"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <p className="text-white text-sm font-medium leading-snug">
              {cert.name}
            </p>
            <p className="text-[#5a5a5a] text-xs mt-1">{cert.issuer}</p>
            <p className="text-[#3a3a3a] text-xs font-mono mt-0.5">
              {cert.year}
            </p>
          </div>
        ))}
      </div>

      <a
        href="https://drive.google.com/drive/folders/119EBIzT41s6Bi-Aqf1Nuv8fce8lUA7Xm?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-[#6b6b6b] border border-[#1f1f1f] px-4 py-2 rounded-lg hover:border-[#2a2a2a] hover:text-[#e2e2e2] transition-colors duration-200"
      >
        View More
      </a>
    </Section>
  )
}