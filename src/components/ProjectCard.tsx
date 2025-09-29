"use client";

import { FC } from "react";

interface ProjectCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  gitLink: string;
  techStack?: string[]; // optional array of tech tags
}

const ProjectCard: FC<ProjectCardProps> = ({ image, title, description, gitLink, techStack }) => (
  <div className="border border-[var(--foreground)] rounded-lg overflow-hidden hover:shadow-[0_0_20px_var(--accent)] hover:scale-105 transition-all bg-[var(--background)] flex flex-col">
    {/* Image */}
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
    )}

    {/* Content */}
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-xl font-bold mb-2 text-[var(--accent)]" style={{ textShadow: "0 0 8px rgba(0,255,127,0.6)" }}>
        {title}
      </h3>
      <p className="text-sm flex-1 mb-4">{description}</p>

      {/* Tech stack tags */}
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[var(--accent)] text-xs font-mono px-2 py-1 border border-[var(--foreground)] rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* GitHub link */}
      <a
        href={gitLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-[var(--accent)] font-mono hover:underline"
      >
        View on GitHub
      </a>
    </div>
  </div>
);

export default ProjectCard;
