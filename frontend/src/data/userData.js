const userData = {
  id: 1,
  name: "Subhi Sharma",
  email: "subhi@example.com",
  initials: "SS",
  year: "3rd Year",
  branch: "AIML",
  college: "GL Bajaj Institute of Technology and Management",
  placementReadiness: 82,
  profileCompletion: 90,
  careerGoal: "AI / ML Engineer",
  github: {
    username: "SubhiSharma",
    contributions: 620,
    repositories: 18,
  },
  leetcode: {
    username: "subhisharma",
    solved: 420,
    rank: "Top 18%",
  },
  codeforces: {
    username: "subhisharma",
    rating: 1580,
    title: "Pupil",
  },
  codechef: {
    username: "subhisharma",
    rating: 1760,
    title: "3★",
  },
  kaggle: {
    username: "subhisharma",
    notebooks: 4,
  },
  skills: [
    { name: "Python", level: 90, status: "Strong" },
    { name: "DSA", level: 88, status: "Strong" },
    { name: "Machine Learning", level: 80, status: "Strong" },
    { name: "SQL", level: 75, status: "Strong" },
    { name: "Web Development", level: 60, status: "Growing" },
    { name: "System Design", level: 40, status: "Needs Improvement" },
  ],
  skillGaps: [
    { name: "Kubernetes", priority: "High", category: "DevOps" },
    { name: "Data Engineering", priority: "High", category: "Data" },
    { name: "CI/CD", priority: "Medium", category: "Engineering" },
    { name: "Docker", priority: "Medium", category: "Cloud" },
    { name: "Go / Golang", priority: "Low", category: "Backend" },
  ],
  achievements: [
    {
      title: "500 LeetCode Problems Solved",
      date: "20 May 2024",
      description: "Consistent DSA practice milestone.",
      icon: "leetcode",
    },
    {
      title: "100 Days Coding Streak",
      date: "18 May 2024",
      description: "Maintained a daily competitive programming streak.",
      icon: "streak",
    },
    {
      title: "Top 10% LeetCode Weekly Contest",
      date: "12 May 2024",
      description: "Strong contest performance.",
      icon: "contest",
    },
  ],
  recommendations: [
    "Learn Docker and containerize one of your ML projects.",
    "Practice 50 more Graph and DP problems on LeetCode.",
    "Build and deploy an end-to-end ML project with CI/CD.",
    "Start low-level System Design with APIs, caching and databases.",
  ],
  progress: {
    months: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    leetcode: [420, 455, 500, 540, 585, 625],
    github: [180, 255, 330, 410, 510, 620],
    projects: [2, 3, 4, 5, 6, 8],
  },
  upcomingEvents: [
    { title: "LeetCode Weekly Contest 395", date: "25 May 2024", time: "08:00 PM" },
    { title: "Codeforces Round #930", date: "26 May 2024", time: "03:35 PM" },
    { title: "CodeChef Starters 133", date: "27 May 2024", time: "11:00 AM" },
  ],
};

export default userData;
