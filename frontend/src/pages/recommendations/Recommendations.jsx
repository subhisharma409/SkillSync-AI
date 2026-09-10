import { ArrowRight, BookOpen, BriefcaseBusiness, Lightbulb, Sparkles } from "lucide-react";
import PageHeader from "../../components/common/PageHeader";
import { useUser } from "../../hooks/useUser";

const Recommendations = () => {
  const { user } = useUser();
  return (
    <div>
      <PageHeader eyebrow="AI career intelligence" title="Recommendations" description="Personalized next steps generated from your target role, strengths, gaps and activity." />
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { title: "Career Fit", value: "91%", icon: BriefcaseBusiness, text: "Your profile is strongly aligned with AI/ML Engineering." },
          { title: "Learning Priority", value: "High", icon: BookOpen, text: "Focus on deployment, system design and data engineering next." },
          { title: "Project Opportunity", value: "2", icon: Lightbulb, text: "Two existing projects could become stronger portfolio assets." },
        ].map(({ title, value, icon: Icon, text }) => (
          <div key={title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50"><Icon size={19} className="text-indigo-600" /></div><p className="mt-4 text-sm text-slate-400">{title}</p><p className="mt-1 text-3xl font-bold">{value}</p><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>
        ))}
      </div>
      <section className="mt-6 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 p-6">
        <div className="flex items-start gap-3"><Sparkles size={21} className="mt-1 text-indigo-600" /><div><h2 className="text-lg font-semibold text-slate-900">Your recommended sequence</h2><p className="mt-1 text-sm text-slate-500">The sequence below is designed to improve your placement readiness efficiently.</p></div></div>
        <div className="mt-6 space-y-3">{user.recommendations.map((item, index) => <div key={item} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">{index + 1}</span><p className="flex-1 text-sm text-slate-600">{item}</p><ArrowRight size={16} className="text-slate-300" /></div>)}</div>
      </section>
    </div>
  );
};

export default Recommendations;
