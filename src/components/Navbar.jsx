import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
  ]

  const socials = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhishekanand1217/',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt=""
          className="w-4 h-4 flex-shrink-0"
        />
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Abhii1217',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt=""
          className="w-4 h-4 flex-shrink-0"
          style={{ filter: 'invert(1)' }}
        />
      ),
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Abhii1217/',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="#FFA116">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
    },
  ]

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">

        <a
          href="#"
          className="font-mono text-xs sm:text-sm text-[#6b6b6b] hover:text-[#e2e2e2] transition-colors duration-200 whitespace-nowrap"
        >
          Abhishek Anand
        </a>

        <ul className="flex items-center gap-3 sm:gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs sm:text-sm text-[#6b6b6b] hover:text-[#e2e2e2] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-haspopup="true"
              className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 rounded-md border border-[#2a2a2a] text-[#e2e2e2] hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>

            {open && (
              <div
                role="menu"
                className="absolute right-0 top-full mt-2 w-40 bg-[#141414] border border-[#252525] rounded-lg overflow-hidden shadow-xl z-50"
              >
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#8a8a8a] hover:bg-[#1f1f1f] hover:text-[#e2e2e2] transition-colors duration-150"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ul>

      </nav>
    </header>
  )
}