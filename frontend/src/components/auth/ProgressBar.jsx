const ProgressBar = ({ currentStep = 1, totalSteps = 2 }) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full">
      {/* Step Labels */}
      <div className="mb-3 flex items-center justify-between">
        {[...Array(totalSteps)].map((_, index) => {
          const step = index + 1;
          const active = currentStep >= step;

          return (
            <div
              key={step}
              className="flex flex-col items-center flex-1"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300
                  ${
                    active
                      ? "border-indigo-600 bg-indigo-600 text-white"
                      : "border-gray-300 bg-white text-gray-500"
                  }`}
              >
                {step}
              </div>

              <span
                className={`mt-2 text-xs font-medium
                  ${
                    active
                      ? "text-indigo-600"
                      : "text-gray-500"
                  }`}
              >
                Step {step}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress Track */}
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-2 flex justify-end">
        <span className="text-sm font-medium text-indigo-600">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;