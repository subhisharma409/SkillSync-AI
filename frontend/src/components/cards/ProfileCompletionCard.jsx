

const ProfileCompletionCard = ({ completion }) => {
  
  return (

    <div className="bg-white rounded-3xl shadow-sm p-6">

      <h2 className="text-xl font-semibold">

        Profile Completion

      </h2>

      <div className="flex justify-center mt-8">

        <div className="relative w-40 h-40">

          <svg className="w-40 h-40">

            <circle
              cx="80"
              cy="80"
              r="60"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />

            <circle
              cx="80"
              cy="80"
              r="60"
              stroke="#8B5CF6"
              strokeWidth="12"
              fill="none"
              strokeDasharray="380"
              strokeDashoffset="40"
              strokeLinecap="round"
              transform="rotate(-90 80 80)"
            />

          </svg>

          <div className="absolute inset-0 flex flex-col justify-center items-center">

            <h1 className="text-4xl font-bold">

              {completion}%

            </h1>

          </div>

        </div>

      </div>

      <button className="mt-6 w-full bg-indigo-100 py-3 rounded-xl font-semibold text-indigo-600">

        Complete Now

      </button>

    </div>

  );

};

export default ProfileCompletionCard;