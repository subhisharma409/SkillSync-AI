
import { TrendingUp, Target, Code2 } from "lucide-react";
import { useUser } from "../../hooks/useUser";

const Progress = () => {
  const { user } = useUser();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Progress</h1>
        <p className="mt-1 text-slate-500">
          Track your technical growth and placement readiness.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <TrendingUp className="text-indigo-600" />
          <p className="mt-4 text-sm text-slate-500">
            Placement Readiness
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {user?.placementReadiness ?? 0}/100
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <Code2 className="text-indigo-600" />
          <p className="mt-4 text-sm text-slate-500">Coding Problems</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {user?.leetcode?.solved ?? 0}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <Target className="text-indigo-600" />
          <p className="mt-4 text-sm text-slate-500">Profile Completion</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {user?.profileCompletion ?? 0}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;