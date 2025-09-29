

export default function HomePage() {
  return (
    <main className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)] font-mono">
      {/* Left column: glowing text */}
      <section className="w-1/3 flex flex-col justify-center px-12 z-10">
        <h1 className="text-5xl font-bold whitespace-nowrap mb-2">
          Lewis Stokes
        </h1>
        <h2 className="text-2xl font-light whitespace-nowrap">
          <span
            className="text-[var(--accent)]"
            style={{ textShadow: "0 0 8px rgba(0,255,127,0.6)" }}
          >
            Software Engineer
          </span>
        </h2>
      </section>

      {/* Right column: NodeMap */}
      <section className="flex-1 relative">
        
      </section>
    </main>
  );
}
