import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-white bg-secondary px-3 py-2 rounded-md">Latest</p>

      <Marquee className="flex gap-6" pauseOnClick={true} speed={70}>
        <p className="font-bold">
          Bangladesh parties sign reform charter, but student and leftist group
          stays away!
        </p>

        <p className="font-bold">
          Clashes break out near Bangladesh parliament as major parties sign a
          roadmap for change!
        </p>

        <p className="font-bold">
          The charter includes provisions to increase presidential powers,
          introduce term limits, and combat corruption and conflicts of
          interest.!
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
