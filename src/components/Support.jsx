import Section from './ui/Section'
import Button from './ui/Button'

export default function Support() {
  return (
    <Section id="support">
      <div className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-8">
        <p className="text-xs font-mono text-[#6b6b6b] uppercase tracking-[0.15em] mb-4">
          Lets work together
        </p>

        <h2 className="text-2xl font-semibold text-[#e2e2e2] mb-2 leading-snug">
          Have a project in mind?
        </h2>
        <p className="text-[#6b6b6b] text-sm leading-relaxed max-w-md mb-6">
          Open to entry-level opportunities in web development and consulting.
          Interested in building impactful products—open to connecting.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            href="mailto:abhi12shekanand17@gmail.com"
            variant="primary"
          >
            Send an email
          </Button>
          <Button
            href="https://www.linkedin.com/in/abhishekanand1217/"
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            href="https://github.com/Abhii1217"
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </div>
      </div>

      <p className="text-center text-xs text-[#2a2a2a] mt-10 font-mono">
        Design & Built by Abhishek Anand. All rights reserved. &#169; 2026
      </p>
    </Section>
  )
}