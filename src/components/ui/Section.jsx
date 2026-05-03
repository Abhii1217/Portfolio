export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-12 border-t border-[#1a1a1a]">
      {title && (
        <h2 className="inline-block text-2xl md:text-3xl font-bold text-white mb-6 cursor-default transition-all duration-300 ease-in-out hover:text-red-500 hover:scale-105 hover:translate-x-1">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}