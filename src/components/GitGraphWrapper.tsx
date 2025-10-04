"use client";

import { useEffect, useState } from "react";
import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
import { Commit, commits } from "@/data/about";

interface Props {
  onCommitClick?: (commit: Commit) => void;
}

// TODO: Customize the template as needed
const customTemplate = templateExtend("metro" as TemplateName, {
  colors: ["#00ffae", "#4facfe", "#f77737", "#ff006e"],
  branch: { lineWidth: 3, spacing: 60 },
  commit: { message: { displayHash: true, displayAuthor: false } },
});


export default function GitGraphWrapper({ onCommitClick }: Props) {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const branchMap: Record<string, any> = {} //ReturnType<typeof Gitgraph.branch>> = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const commitMap: Record<number, any> = {} //ReturnType<typeof Gitgraph.commit>> = {};

  const orderedCommits = commits.sort((a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="w-full flex justify-center py-10">
      <Gitgraph options={{ template: customTemplate }}>
        {(gitgraph) => {

          orderedCommits.forEach((commit) => {

            /* If branch for commit doesnt exist yet */
            if (!branchMap[commit.branch]) {
              /* Check if it has a source */
              if (commit.source) {
                /* If source branch exists, create new branch from it */
                branchMap[commit.branch] = branchMap[commit.source].branch({ name: commit.branch });
              } else {
                /* Otherwise create the root of the tree */
                branchMap[commit.branch] = gitgraph.branch({ name: commit.branch });
              }
            }

            /* Create the commit */
            commitMap[commit.id] = branchMap[commit.branch].commit({
              subject: commit.name,
              onClick: () => onCommitClick?.(commit)
            })

            /* Handle merging */
            if (commit.mergeTo) {
              branchMap[commit.mergeTo].merge(branchMap[commit.branch])
            }

          })
        }}

         
        
      </Gitgraph>
    </div>
  );
}
