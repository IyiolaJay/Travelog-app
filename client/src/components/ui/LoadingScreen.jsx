import React from "react";
import earth from "../../assests/img/earth_planet.png";

const LoadingScreen = () => {
  return (
    <div className="grid h-screen w-screen place-items-center bg-[#F9A11D]">
      <div>
        <img src={earth} alt="planet earth" className="mb-3" />
        <p className="text-xl font-bold uppercase text-white">Travelog</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
