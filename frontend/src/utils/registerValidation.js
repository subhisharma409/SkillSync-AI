// ===============================
// Register Form Validation
// SkillSync AI
// ===============================

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const githubRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/;

const usernameRegex = /^[a-zA-Z0-9_.-]{2,30}$/;

/**
 * Validate Step 1
 */
export const validateStepOne = (formData) => {
  const errors = {};

  // Full Name
  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (formData.fullName.trim().length < 3) {
    errors.fullName = "Full name must be at least 3 characters.";
  }

  // Email
  if (!formData.email.trim()) {
    errors.email = "College email is required.";
  } else if (!emailRegex.test(formData.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // Password
  if (!formData.password) {
    errors.password = "Password is required.";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  // Confirm Password
  if (!formData.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  // College
  if (!formData.college.trim()) {
    errors.college = "College name is required.";
  }

  // Branch
  if (!formData.branch) {
    errors.branch = "Please select your branch.";
  }

  // Year
  if (!formData.year) {
    errors.year = "Please select your year.";
  }

  return errors;
};

/**
 * Validate Step 2
 */
export const validateStepTwo = (formData) => {
  const errors = {};

  // Career Goal
  if (!formData.careerGoal) {
    errors.careerGoal = "Please select your career goal.";
  }

  // GitHub Username (Optional)
  if (
    formData.github &&
    !githubRegex.test(formData.github.trim())
  ) {
    errors.github = "Invalid GitHub username.";
  }

  // LeetCode Username (Optional)
  if (
    formData.leetcode &&
    !usernameRegex.test(formData.leetcode.trim())
  ) {
    errors.leetcode = "Invalid LeetCode username.";
  }

  // Codeforces Username (Optional)
  if (
    formData.codeforces &&
    !usernameRegex.test(formData.codeforces.trim())
  ) {
    errors.codeforces = "Invalid Codeforces username.";
  }

  // CodeChef Username (Optional)
  if (
    formData.codechef &&
    !usernameRegex.test(formData.codechef.trim())
  ) {
    errors.codechef = "Invalid CodeChef username.";
  }

  return errors;
};

/**
 * Validate Complete Form
 */
export const validateRegisterForm = (formData) => {
  return {
    ...validateStepOne(formData),
    ...validateStepTwo(formData),
  };
};