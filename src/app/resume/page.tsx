"use client";

export default function ResumePage() {
  return (
    <main className="flex flex-col items-center px-12 py-8">
      {/* Embed PDF */}
      <div className="w-full max-w-4xl h-[80vh] border border-[var(--foreground)] rounded-lg overflow-hidden mb-6">
        <iframe
          src="/CV_Lewis-Stokes_250909.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>

      {/* Download Button */}
      <a
        href="/CV_Lewis-Stokes_250909.pdf"
        download="CV_Lewis-Stokes_250909.pdf"
        className="px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded hover:brightness-125 transition-all font-mono"
      >
        Download Resume
      </a>
    </main>
  );
}
