

export interface Commit {
  id: number;
  date: string; // ISO string or sortable format
  name: string;
  description?: string;
  branch: string; // name of branch this commit belongs to
  parent?: number; // previous commit id in same branch
  mergeTo?: string; // branch this commit merges into (should only be end of branch)
  source?: string; // if new branch, origin branch
}

export const commits: Commit[] = [
  {
    id: 1,
    branch: "master",
    name: "Initial commit",
    description: "Hello World!",
    date: "1998-06-25T00:00:00Z",
  },
  {
    id: 2,
    branch: "cadets",
    name: "Started Cadets",
    description: undefined,
    date: "2009-06-25T00:00:00Z",
    mergeTo: "master",
  },
  {
    id: 4,
    branch: "Education",
    name: "Enrolled Coventry University",
    description: "Hello World!",
    date: "2018-09-20T00:00:00Z",
    source: "master",
    mergeTo: "master",
  },
  {
    id: 3,
    branch: "career",
    name: "Joined Touch Systems",
    description: undefined,
    date: "2016-07-14T00:00:00Z",
    mergeTo: "master",
  },
  {
    id: 5,
    branch: "career",
    name: "Joined Codebase 8 / Davies Group",
    description: undefined,
    date: "2021-07-14T00:00:00Z",
  },
  {
    id: 6,
    branch: "career",
    name: "Joined Skylift UAV",
    description: undefined,
    date: "2023-04-24T00:00:00Z",
  },
  {
    id: 7,
    branch: "career",
    name: "Joined Rolls Royce",
    description: undefined,
    date: "2024-09-02T00:00:00Z",
    mergeTo: "master",
  },
]


/*
 - - - SAMPLE TESTING DATA - - - 
export const commits = [
  {
    id: 1,
    branch: "master",
    name: "Initial commit",
    description: "Set up project structure",
    date: "2024-01-01T09:00:00Z",
  },
  {
    id: 2,
    branch: "master",
    name: "Add README",
    description: "Created initial README.md",
    date: "2024-01-01T12:00:00Z",
  },
  {
    id: 3,
    branch: "feature/login",
    name: "Start login feature",
    description: "Add login component skeleton",
    date: "2024-01-02T10:00:00Z",
    source: 2, // branched from master commit 2
  },
  {
    id: 4,
    branch: "master",
    name: "Add API layer",
    description: "Add initial REST client for backend",
    date: "2024-01-02T15:00:00Z",
  },
  {
    id: 5,
    branch: "feature/login",
    name: "Implement login logic",
    description: "Wire up API calls and basic validation",
    date: "2024-01-03T09:00:00Z",
  },
  {
    id: 6,
    branch: "hotfix/crash",
    name: "Fix crash on startup",
    description: "Patch issue in app initialization",
    date: "2024-01-03T12:00:00Z",
    source: 4, // branched from master commit 4
  },
  {
    id: 7,
    branch: "hotfix/crash",
    name: "Verify crash fix",
    description: "Add regression test for startup",
    date: "2024-01-03T15:00:00Z",
    mergeTo: "master", // will merge back into master later
  },
  {
    id: 8,
    branch: "master",
    name: "Merge hotfix/crash",
    description: "Merge branch 'hotfix/crash' into master",
    date: "2024-01-03T16:00:00Z",
  },
  {
    id: 9,
    branch: "feature/login",
    name: "Finish login UI",
    description: "Final polish and styles for login page",
    date: "2024-01-04T11:00:00Z",
    mergeTo: "master", // merges into master
  },
  {
    id: 10,
    branch: "master",
    name: "Merge feature/login",
    description: "Merge branch 'feature/login' into master",
    date: "2024-01-04T12:00:00Z",
  },
];
*/


/*

export const branches = [
  { id: 1, name: "Hello World!", date: "1998-06-25", branch: "Master"},
  { id: 2, branch: "Master"},
  { id: 4, name: "Started at Skylift UAV (2022)", branch: "Develop" },
  { id: 5, name: "Lead Cloud Developer promotion (2024)", branch: "Master" },
  { id: 5, name: "Lead Cloud Developer promotion (2024)", branch: "Develop", merge: true },
  { id: 3, name: "Test commit 2", branch: "Master" },
];
*/

/*

export interface Branch {
    id: number;
    name: string;
    source?: number; // commit id to branch from (optional)
    commits: Commit[];
}

export interface Commit {
    id: number;
    name?: string;
    description?: string;   
    date?: string;
    mergeTo?: number; // id of commit to merge into

}


export const branches: Branch[] = [
    {
      id: 0,
      name: "Main",
      commits: [
        { id: 1, name: "Hello World!", date: "1998-06-25"},
        { id: 2},
        { id: 3, name: "Test commit 2" },
      ],
    },
    {
      id: 1,
      name: "Employment",
      source: 1, // branches from commit id=1
      commits: [
        { id: 4, name: "Started at Skylift UAV (2022)" },
        { id: 5, name: "Lead Cloud Developer promotion (2024)", mergeTo: 2 },
      ],
    },
  ];


  */