import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import {
  BRANCH_OPTIONS,
  YEAR_OPTIONS,
} from "../../data/registerOptions";

const RegisterStepOne = ({
  formData,
  errors,
  handleChange,
}) => {
  return (
    <div className="space-y-5">
      <FormInput
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
        required
        error={errors.fullName}
        autoComplete="name"
      />

      <FormInput
        label="College Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@college.edu"
        required
        error={errors.email}
        autoComplete="email"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a password"
          required
          error={errors.password}
          autoComplete="new-password"
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          required
          error={errors.confirmPassword}
          autoComplete="new-password"
        />
      </div>

      <FormInput
        label="College"
        name="college"
        value={formData.college}
        onChange={handleChange}
        placeholder="Enter your college name"
        required
        error={errors.college}
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormSelect
          label="Branch"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          options={BRANCH_OPTIONS}
          placeholder="Select Branch"
          required
          error={errors.branch}
        />

        <FormSelect
          label="Year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          options={YEAR_OPTIONS}
          placeholder="Select Year"
          required
          error={errors.year}
        />
      </div>
    </div>
  );
};

export default RegisterStepOne;