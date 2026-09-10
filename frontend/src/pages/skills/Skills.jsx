// import { BrainCircuit, CheckCircle2, CircleAlert, Sparkles } from "lucide-react";
// import PageHeader from "../../components/common/PageHeader";
// import { useUser } from "../../hooks/useUser";

// const Skills = () => {
//   const { user } = useUser();
//   return (
//     <div>
//       <PageHeader eyebrow="Career intelligence" title="Skills" description="Understand your strengths and the skills most likely to increase your placement opportunities." />
//       <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
//         <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//           <div className="flex items-center gap-2"><BrainCircuit size={20} className="text-indigo-600" /><h2 className="text-lg font-semibold">Skill Matrix</h2></div>
//           <div className="mt-6 space-y-5">
//             {user.skills.map((skill) => (
//               <div key={skill.name}>
//                 <div className="mb-2 flex items-center justify-between"><span className="font-medium text-slate-700">{skill.name}</span><span className="text-xs font-semibold text-slate-400">{skill.level}%</span></div>
//                 <div className="h-2 rounded-full bg-slate-100"><div className="h-full rounded-full bg-indigo-500" style={{ width: `${skill.level}%` }} /></div>
//                 <p className={`mt-1 text-xs ${skill.status === "Strong" ? "text-emerald-600" : "text-amber-600"}`}>{skill.status}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//           <div className="flex items-center gap-2"><Sparkles size={20} className="text-violet-600" /><h2 className="text-lg font-semibold">AI Skill Gaps</h2></div>
//           <div className="mt-5 space-y-3">
//             {user.skillGaps.map((gap) => (
//               <div key={gap.name} className="rounded-xl border border-slate-100 p-4">
//                 <div className="flex items-start justify-between gap-3"><div><p className="font-semibold text-slate-800">{gap.name}</p><p className="mt-1 text-xs text-slate-400">{gap.category}</p></div><span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-600">{gap.priority}</span></div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//       <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//         <h2 className="text-lg font-semibold">Skill Improvement Checklist</h2>
//         <div className="mt-5 grid gap-3 md:grid-cols-2">{["Containerize an ML service", "Deploy with CI/CD", "Build one scalable API", "Practice system design weekly"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"><CheckCircle2 size={18} className="text-emerald-500" /><span className="text-sm text-slate-600">{item}</span></div>)}</div>
//         <p className="mt-4 flex items-center gap-2 text-xs text-slate-400"><CircleAlert size={14} /> AI-generated recommendations will become dynamic after backend integration.</p>
//       </section>
//     </div>
//   );
// };

// export default Skills;


import { BrainCircuit } from "lucide-react";

const skills = [
  { name: "Python", score: 90 },
  { name: "Data Structures & Algorithms", score: 88 },
  { name: "Machine Learning", score: 80 },
  { name: "SQL", score: 75 },
  { name: "Web Development", score: 60 },
  { name: "System Design", score: 40 },
];

const Skills = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Skills</h1>
        <p className="mt-1 text-slate-500">
          Understand your strengths and identify where to improve.
        </p>
      </div>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <BrainCircuit className="text-indigo-600" />
          <h2 className="text-xl font-semibold text-slate-900">
            Skill Overview
          </h2>
        </div>

        <div className="mt-8 space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">
                  {skill.name}
                </span>
                <span className="font-semibold text-slate-500">
                  {skill.score}%
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-indigo-600"
                  style={{ width: `${skill.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;