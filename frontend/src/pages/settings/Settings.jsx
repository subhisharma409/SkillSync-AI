import { Bell, Lock, Palette, Save, UserRound } from "lucide-react";
import PageHeader from "../../components/common/PageHeader";
import { useUser } from "../../hooks/useUser";

const Settings = () => {
  const { user } = useUser();
  return (
    <div>
      <PageHeader eyebrow="Account" title="Settings" description="Control your profile preferences, notifications and security settings." />
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          {[
            ["Profile", UserRound],
            ["Notifications", Bell],
            ["Appearance", Palette],
            ["Security", Lock],
          ].map(([label, Icon], index) => <button key={label} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium ${index === 0 ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"}`}><Icon size={18} /> {label}</button>)}
        </section>
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Profile Preferences</h2>
          <div className="mt-5 space-y-4">
            <label className="block"><span className="text-sm font-medium text-slate-700">Display Name</span><input defaultValue={user.name} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50" /></label>
            <label className="block"><span className="text-sm font-medium text-slate-700">Career Goal</span><select defaultValue={user.careerGoal} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"><option>AI / ML Engineer</option><option>Backend Developer</option><option>Data Scientist</option><option>Software Engineer</option></select></label>
            <label className="flex items-center justify-between rounded-xl bg-slate-50 p-4"><div><p className="font-medium text-slate-700">Weekly progress summary</p><p className="mt-1 text-xs text-slate-400">Receive a compact progress summary.</p></div><input type="checkbox" defaultChecked className="h-5 w-5 accent-indigo-600" /></label>
          </div>
          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"><Save size={16} /> Save Changes</button>
        </section>
      </div>
    </div>
  );
};

export default Settings;
