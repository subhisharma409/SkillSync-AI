
import { Link2, Mail, MapPin, Pencil, Target } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import PageHeader from "../../components/common/PageHeader";
import { useUser } from "../../hooks/useUser";

const Profile = () => {
  const { user } = useUser();

  return (
    <div>
      <PageHeader
        eyebrow="Student profile"
        title="Your Career Profile"
        description="Keep your professional identity, goals and connected platforms up to date."
        action={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            <Pencil size={16} />
            Edit Profile
          </button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white">
              {user?.initials || "S"}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {user?.name || "Student"}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {user?.year || "Student"} · {user?.branch || "AIML"}
              </p>

              <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Mail size={14} />
                  {user?.email || "student@example.com"}
                </span>

                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  India
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">College</p>

              <p className="mt-2 font-semibold text-slate-800">
                {user?.college || "College not added"}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">Target Role</p>

              <p className="mt-2 flex items-center gap-2 font-semibold text-slate-800">
                <Target size={16} className="text-indigo-600" />
                {user?.careerGoal || "AI / ML Engineer"}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Profile Completion
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <div className="relative h-20 w-20">
              <svg className="-rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="10"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="251.2"
                  strokeDashoffset={
                    251.2 -
                    (251.2 * (user?.profileCompletion || 0)) / 100
                  }
                />
              </svg>

              <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                {user?.profileCompletion || 0}%
              </span>
            </div>

            <p className="text-sm leading-6 text-slate-500">
              Complete your profile to unlock more accurate career
              recommendations and insights.
            </p>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <Link2 size={19} className="text-indigo-600" />

          <h2 className="text-lg font-semibold text-slate-900">
            Connected Platforms
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {[
            [
              "GitHub",
              user?.github?.username || "Not connected",
            ],
            [
              "LeetCode",
              user?.leetcode?.username || "Not connected",
            ],
            [
              "Codeforces",
              user?.codeforces?.username || "Not connected",
            ],
            [
              "CodeChef",
              user?.codechef?.username || "Not connected",
            ],
            [
              "Kaggle",
              user?.kaggle?.username || "Not connected",
            ],
          ].map(([name, handle]) => (
            <div
              key={name}
              className="rounded-xl border border-slate-100 p-4"
            >
              <div className="flex items-center gap-2">
                <FaGithub size={16} className="text-slate-600" />

                <span className="font-semibold text-slate-800">
                  {name}
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-500">
                {handle === "Not connected"
                  ? handle
                  : `@${handle}`}
              </p>

              <span className="mt-3 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                {handle === "Not connected"
                  ? "Not Connected"
                  : "Connected"}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;