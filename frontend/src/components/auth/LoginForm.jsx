// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import InputField from "./InputField";
// import { useAuth } from "../../hooks/useAuth";
// import { ROUTES } from "../../constants/routes";
// import toast from "react-hot-toast";

// const LoginForm = () => {
//   const { login, loading } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       toast.error("Enter your email and password.");
//       return;
//     }

//     const response = await login({ email, password });

//     if (response.success) {
//       toast.success("Welcome back.");
//       navigate(ROUTES.DASHBOARD);
//     } else {
//       toast.error(response.message || "Login failed.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl sm:p-10">
//       <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
//       <p className="mt-2 mb-8 text-gray-500">Login to SkillSync AI</p>

//       <InputField label="Email" type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
//       <InputField label="Password" type="password" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />

//       <div className="mb-6 flex items-center justify-between gap-4 text-sm">
//         <label className="flex items-center gap-2 text-slate-600"><input type="checkbox" /> Remember Me</label>
//         <button type="button" className="text-indigo-600 hover:text-indigo-700">Forgot Password?</button>
//       </div>

//       <button disabled={loading} className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60">
//         {loading ? "Signing in..." : "Login"}
//       </button>

//       <p className="mt-8 text-center">
//         Don't have an account?
//         <Link to={ROUTES.REGISTER} className="ml-2 font-semibold text-indigo-600 hover:underline">Register</Link>
//       </p>
//     </form>
//   );
// };

// export default LoginForm;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputField from "./InputField";

import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../../constants/routes";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      return;
    }

    const result = await login({
      fullName: email.split("@")[0],
      email: email.trim(),
    });

    if (result.success) {
      navigate(ROUTES.DASHBOARD, { replace: true });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[450px] max-w-full rounded-3xl bg-white p-10 shadow-xl"
    >
      <h1 className="text-3xl font-bold">Welcome Back 👋</h1>

      <p className="mb-8 mt-2 text-gray-500">
        Login to SkillSync AI
      </p>

      <InputField
        label="Email"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <div className="mb-6 flex justify-between">
        <label className="flex gap-2">
          <input type="checkbox" />
          Remember Me
        </label>

        <button
          type="button"
          className="text-indigo-600"
          onClick={() => {}}
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-indigo-600 py-3 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <p className="mt-8 text-center">
        Don't have an account?

        <Link
          to={ROUTES.REGISTER}
          className="ml-2 text-indigo-600"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;