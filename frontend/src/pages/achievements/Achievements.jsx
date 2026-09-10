import { Award, CalendarDays, Trophy } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import PageHeader from "../../components/common/PageHeader";
import { useUser } from "../../hooks/useUser";

const Achievements = () => {
  const { user } = useUser();
  return (
    <div>
      <PageHeader eyebrow="Proof of progress" title="Achievements" description="A timeline of milestones from coding platforms, projects and professional growth." />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><Trophy className="text-amber-500" size={21} /><p className="mt-4 text-2xl font-bold">3</p><p className="text-sm text-slate-400">Major milestones</p></div>
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><SiLeetcode className="text-orange-500" size={21} /><p className="mt-4 text-2xl font-bold">{user.leetcode.solved}</p><p className="text-sm text-slate-400">Problems solved</p></div>
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><Award className="text-indigo-600" size={21} /><p className="mt-4 text-2xl font-bold">100</p><p className="text-sm text-slate-400">Day streak</p></div>
      </div>
      <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          {user.achievements.map((achievement) => (
            <div key={achievement.title} className="flex gap-4 rounded-xl border border-slate-100 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50"><Award size={20} className="text-indigo-600" /></div>
              <div className="flex-1"><div className="flex flex-col justify-between gap-2 sm:flex-row"><h2 className="font-semibold text-slate-800">{achievement.title}</h2><span className="flex items-center gap-1 text-xs text-slate-400"><CalendarDays size={13} /> {achievement.date}</span></div><p className="mt-2 text-sm text-slate-500">{achievement.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
