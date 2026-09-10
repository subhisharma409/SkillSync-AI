import { Bell, Menu, Search } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { useSidebar } from "../../hooks/useSidebar";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex min-h-16 items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <Menu size={22} />
        </button>

        <div className="relative hidden w-[min(420px,40vw)] md:block">
          <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search anything..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-xl p-2.5 text-slate-600 transition hover:bg-slate-100"
        >
          <Bell size={21} />
          <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white">3</span>
        </button>
        <UserDropdown />
      </div>
    </header>
  );
};

export default Navbar;
