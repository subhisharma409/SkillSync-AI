import { CalendarDays, Clock3 } from "lucide-react";

const UpcomingEventsCard = ({ events }) => (
  <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
    <div className="mb-5 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Upcoming Contests & Events</h2>
        <p className="mt-1 text-sm text-slate-500">Stay consistent with your competitive programming routine.</p>
      </div>
      <CalendarDays size={21} className="text-indigo-600" />
    </div>

    <div className="space-y-3">
      {events.map((event) => (
        <div key={event.title} className="flex items-center gap-4 rounded-xl border border-slate-100 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <CalendarDays size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-slate-800">{event.title}</p>
            <div className="mt-1 flex flex-wrap gap-3 text-xs text-slate-400">
              <span>{event.date}</span>
              <span className="flex items-center gap-1"><Clock3 size={13} /> {event.time}</span>
            </div>
          </div>
          <button className="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-600 hover:bg-indigo-100">Register</button>
        </div>
      ))}
    </div>

    <button className="mt-4 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700">View All Events →</button>
  </section>
);

export default UpcomingEventsCard;
