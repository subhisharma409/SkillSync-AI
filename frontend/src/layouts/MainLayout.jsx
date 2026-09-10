import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-slate-100 text-slate-900">
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="px-4 pt-4 sm:px-6 sm:pt-6">
          <Navbar />
        </div>
        <main className="min-w-0 flex-1 px-4 pb-8 pt-5 sm:px-6 sm:pt-6">
          {children}
        </main>
      </div>
    </div>
  </div>
);

export default MainLayout;
