const PlacementReadinessCard = ({ score }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      <h2 className="text-xl font-semibold">
        Placement Readiness Score
      </h2>

      <div className="flex justify-center mt-8">

        <div className="relative w-44 h-44">

          <svg className="w-44 h-44">

            <circle
              cx="88"
              cy="88"
              r="70"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />

            <circle
              cx="88"
              cy="88"
              r="70"
              stroke="#22C55E"
              strokeWidth="12"
              fill="none"
              strokeDasharray="440"
              strokeDashoffset="80"
              strokeLinecap="round"
              transform="rotate(-90 88 88)"
            />

          </svg>

          <div className="absolute inset-0 flex flex-col justify-center items-center">

            <h1 className="text-5xl font-bold">

              {score}

            </h1>

            <p className="text-gray-500">

              /100

            </p>

          </div>

        </div>

      </div>

      <div className="mt-6">

        <h3 className="font-semibold">

          Great Job! 🎉

        </h3>

        <p className="text-gray-500 mt-2">

          Your placement readiness is improving.

        </p>

      </div>

    </div>
  );
};

export default PlacementReadinessCard;