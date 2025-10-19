import React, { Suspense } from "react";
import AllCategories from "../Categories/Categories";
import Categories from "../Categories/Categories";
import { Bars, CirclesWithBar, RotatingLines } from "react-loader-spinner";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center ">
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="#f98886"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        }
      >
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
