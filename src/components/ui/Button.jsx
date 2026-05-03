export default function Button({ href, variant, children, target, rel }) {
  const base = "inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm transition-colors duration-200"

  const variants = {
    primary: "bg-[#e2e2e2] text-[#0f0f0f] font-medium hover:bg-white",
    ghost: "border border-[#2a2a2a] text-[#8a8a8a] hover:border-[#3a3a3a] hover:text-[#e2e2e2]",
    red: "bg-red-500 text-white font-medium hover:bg-red-600",
  }

  const chosen = variants[variant] || variants.ghost

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={base + " " + chosen}
    >
      {children}
    </a>
  )
}