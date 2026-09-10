import { Loader2 } from "lucide-react";

const LoadingSpinner = ({
  size = "md",
  text = "",
  fullScreen = false,
  color = "indigo",
}) => {
  const sizes = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const colors = {
    indigo: "text-indigo-600",
    blue: "text-blue-600",
    green: "text-green-600",
    red: "text-red-600",
    gray: "text-gray-600",
    white: "text-white",
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <Loader2
        className={`${sizes[size]} ${colors[color]} animate-spin`}
      />

      {text && (
        <p className="text-sm text-gray-600 font-medium">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;