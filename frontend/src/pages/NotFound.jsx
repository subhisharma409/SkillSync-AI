import { Link } from "react-router-dom";
import { Home } from "lucide-react";

// import { ROUTES } from "../../constants/routes";
// import {Routes} from "C:/Users/compu/OneDrive/Desktop/SkillsSync/frontend/src/constants/routes.js";
const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-8xl font-extrabold text-indigo-600">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-900">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-600">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        <Home size={18} />
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;