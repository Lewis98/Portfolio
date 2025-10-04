"use client";

import { useState } from "react";
import GitGraphWrapper from "@/components/GitGraphWrapper";
import type { Commit } from "@/data/about";


export default function AboutPage() {
  const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null);

  const commitData = (commit: Commit) => {
    return(
      <div>
        <h2 className="text-xl font-bold">{commit.name}</h2>
        {commit.date && (
          <p className="text-sm text-gray-400">{commit.date}</p>
        )}
        &nbsp;
        {commit.description && <p>{commit.description}</p>}
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col md:flex-row">
      {/* Left panel: Git Graph */}
      <div className="flex-1 flex justify-center items-start md:items-start p-4">
        <GitGraphWrapper
          onCommitClick={(commit: Commit) => setSelectedCommit(commit)}
        />
      </div>

      {/* Right panel: Commit details */}
      <div className="hidden md:flex flex-1 flex-col p-6 border-l border-[var(--foreground)]">
        {selectedCommit ? commitData(selectedCommit) : (
          <p className="text-gray-500">Select a commit to see details.</p>
        )}
      </div>
    </div>
  );
}
