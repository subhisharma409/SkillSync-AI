import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ProgressOverviewCard = ({ progress }) => {
  const data = progress.months.map((month, index) => ({
    month,
    leetcode: progress.leetcode[index],
    github: progress.github[index],
    projects: progress.projects[index] * 50,
  }));

  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Progress Over Time</h2>
          <p className="mt-1 text-sm text-slate-500">A six-month view of your development momentum.</p>
        </div>
        <span className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600">6 months</span>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
            <YAxis tickLine={false} axisLine={false} fontSize={12} />
            <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0" }} />
            <Line type="monotone" dataKey="leetcode" stroke="#6366f1" strokeWidth={3} dot={false} name="LeetCode" />
            <Line type="monotone" dataKey="github" stroke="#10b981" strokeWidth={3} dot={false} name="GitHub" />
            <Line type="monotone" dataKey="projects" stroke="#f59e0b" strokeWidth={3} dot={false} name="Projects × 50" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 flex flex-wrap gap-5 text-xs text-slate-500">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500" /> LeetCode Problems</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> GitHub Contributions</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" /> Projects</span>
      </div>
    </section>
  );
};

export default ProgressOverviewCard;
