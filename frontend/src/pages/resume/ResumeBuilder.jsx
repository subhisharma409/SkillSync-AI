import { Download, FileText, Sparkles, Upload } from "lucide-react";
import PageHeader from "../../components/common/PageHeader";

const ResumeBuilder = () => (
  <div>
    <PageHeader
      eyebrow="Resume intelligence"
      title="Resume Builder"
      description="Build a structured resume, evaluate ATS readiness and get AI-powered improvement suggestions."
      action={<button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"><Download size={16} /> Export PDF</button>}
    />
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50"><FileText size={20} className="text-indigo-600" /></div><div><h2 className="font-semibold">Resume Content</h2><p className="text-sm text-slate-400">Structured sections ready for the editor.</p></div></div>
        <div className="mt-6 space-y-4">{["Summary", "Education", "Skills", "Projects", "Achievements", "Experience"].map((section) => <div key={section} className="rounded-xl border border-slate-100 p-4"><div className="flex items-center justify-between"><span className="font-medium text-slate-700">{section}</span><button className="text-xs font-semibold text-indigo-600">Edit</button></div></div>)}</div>
        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 py-4 text-sm font-semibold text-slate-500 hover:border-indigo-300 hover:text-indigo-600"><Upload size={17} /> Import existing resume</button>
      </section>
      <section className="space-y-6">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"><p className="text-sm text-slate-400">ATS Score</p><p className="mt-2 text-5xl font-bold text-indigo-600">84<span className="text-lg text-slate-300">/100</span></p><p className="mt-2 text-sm text-emerald-600">Strong baseline</p><div className="mt-5 h-2 rounded-full bg-slate-100"><div className="h-full w-[84%] rounded-full bg-indigo-500" /></div></div>
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6"><div className="flex items-center gap-2"><Sparkles size={19} className="text-indigo-600" /><h2 className="font-semibold">AI Resume Review</h2></div><p className="mt-3 text-sm leading-6 text-slate-600">Your resume is strong on projects, but stronger impact can come from quantified outcomes, deployment details and role-specific keywords.</p><button className="mt-4 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm">Run AI Review</button></div>
      </section>
    </div>
  </div>
);

export default ResumeBuilder;
