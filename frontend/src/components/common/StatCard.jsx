const StatCard = ({ label, value, helper, icon: Icon, tone = "indigo" }) => {
  const tones = {
    indigo: "bg-indigo-50 text-indigo-600",
    green: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    blue: "bg-sky-50 text-sky-600",
    rose: "bg-rose-50 text-rose-600",
    purple: "bg-violet-50 text-violet-600",
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        {Icon && (
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tones[tone] || tones.indigo}`}>
            <Icon size={19} />
          </div>
        )}
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{value}</p>
      {helper && <p className="mt-1 text-xs text-slate-400">{helper}</p>}
    </div>
  );
};

export default StatCard;
