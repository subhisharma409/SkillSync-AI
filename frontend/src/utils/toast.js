import { toast } from "react-hot-toast";

export const showSuccess = (message) => {
  toast.success(message, {
    duration: 3000,
    position: "top-right",
  });
};

export const showError = (message) => {
  toast.error(message, {
    duration: 4000,
    position: "top-right",
  });
};

export const showInfo = (message) => {
  toast(message, {
    icon: "ℹ️",
    duration: 3000,
    position: "top-right",
  });
};

export const showLoading = (message = "Loading...") => {
  return toast.loading(message, {
    position: "top-right",
  });
};

export const dismissToast = (toastId) => {
  toast.dismiss(toastId);
};