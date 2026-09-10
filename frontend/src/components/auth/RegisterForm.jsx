import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo";
import { ROUTES } from "../../constants/routes";
import { validateStepOne, validateStepTwo } from "../../utils/registerValidation";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    college: "",
    branch: "",
    year: "",
    careerGoal: "",
    github: "",
    leetcode: "",
    codeforces: "",
    codechef: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const handleNext = () => {
    const validationErrors = validateStepOne(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    setErrors({});
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateStepTwo(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const response = await register(formData);

    if (response.success) {
      toast.success("Account created successfully.");
      navigate(ROUTES.LOGIN);
    } else {
      toast.error(response.message || "Registration failed.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
        <p className="mt-2 text-sm text-gray-500">Join SkillSync AI and begin your placement journey.</p>
      </div>
      <ProgressBar currentStep={step} totalSteps={2} />
      <form onSubmit={handleSubmit} className="mt-8 space-y-8">
        {step === 1 ? (
          <RegisterStepOne formData={formData} errors={errors} handleChange={handleChange} />
        ) : (
          <RegisterStepTwo formData={formData} errors={errors} handleChange={handleChange} />
        )}

        <div className="flex flex-col-reverse gap-4 pt-4 sm:flex-row sm:justify-between">
          {step === 2 ? (
            <button type="button" onClick={handlePrevious} disabled={loading} className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-60">Previous</button>
          ) : <div />}

          {step === 1 ? (
            <button type="button" onClick={handleNext} className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">Next</button>
          ) : (
            <button type="submit" disabled={loading} className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-60">
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
