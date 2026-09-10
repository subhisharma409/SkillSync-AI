import { FolderKanban, Plus } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import PageHeader from "../../components/common/PageHeader";

const projectData = [
  { name: "SkillSync AI", status: "In Progress", stack: "React · FastAPI · PostgreSQL", description: "Career intelligence SaaS for students, faculty and recruiters.", score: 92 },
  { name: "Customer Churn Prediction", status: "Deployed", stack: "Python · scikit-learn · Streamlit", description: "End-to-end ML pipeline for churn prediction and explainability.", score: 84 },
  { name: "Spam SMS Detection", status: "Completed", stack: "Python · NLP · scikit-learn", description: "Text classification pipeline with preprocessing and model evaluation.", score: 76 },
];

const Projects = () => (
  <div>
    <PageHeader
      eyebrow="Portfolio"
      title="Projects"
      description="Build, document and ship projects that strengthen your target-role profile."
      action={<button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"><Plus size={16} /> Add Project</button>}
    />
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {projectData.map((project) => (
        <article key={project.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50"><FolderKanban size={20} className="text-indigo-600" /></div><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">{project.status}</span></div>
          <h2 className="mt-5 text-lg font-semibold text-slate-900">{project.name}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">{project.description}</p>
          <p className="mt-4 text-xs font-medium text-slate-400">{project.stack}</p>
          <div className="mt-5"><div className="flex justify-between text-xs"><span className="text-slate-400">Resume impact</span><span className="font-semibold text-slate-700">{project.score}/100</span></div><div className="mt-2 h-2 rounded-full bg-slate-100"><div className="h-full rounded-full bg-indigo-500" style={{ width: `${project.score}%` }} /></div></div>
          <div className="mt-5 flex gap-2"><button className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">Details</button><button className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"><FaGithub size={15} /> Repo</button></div>
        </article>
      ))}
    </div>
  </div>
);

export default Projects;
