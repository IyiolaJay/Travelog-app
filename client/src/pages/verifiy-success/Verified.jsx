import React from "react";
import check from "../../assests/img/successful.png";

const Verified = () => {
  return (
    <div className="container grid h-screen place-items-center">
      <div className="w-full">
        <div className="mb-[140px] text-center">
          <img src={check} alt="successful" className="mx-auto mb-4 w-[50px]" />
          <p className="text-xl">
            You have been <span className="text-base-color">verified</span>{" "}
            successfully.
          </p>
        </div>
        <button className="mb-4 w-full rounded bg-pry-color p-[10px] text-center text-white">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Verified;
