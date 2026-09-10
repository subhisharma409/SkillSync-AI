import {
  FaGithub,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
} from "react-icons/si";

const CodingProfilesCard = ({ user }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Coding Profiles
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <FaGithub className="text-xl" />

            <span>GitHub</span>

          </div>

          <span className="font-semibold">

            {user.github.contributions} Contributions

          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <SiLeetcode className="text-xl text-orange-500" />

            <span>LeetCode</span>

          </div>

          <span className="font-semibold">

            {user.leetcode.solved} Solved

          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <SiCodeforces className="text-xl text-blue-600" />

            <span>Codeforces</span>

          </div>

          <span className="font-semibold">

            {user.codeforces.rating}

          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <SiCodechef className="text-xl text-amber-700" />

            <span>CodeChef</span>

          </div>

          <span className="font-semibold">

            {user.codechef.rating}

          </span>

        </div>

      </div>

    </div>
  );
};

export default CodingProfilesCard;