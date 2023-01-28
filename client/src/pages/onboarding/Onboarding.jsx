import React, { useState, useEffect } from "react";
import Balancer from "react-wrap-balancer";
import ONBOARDING_IMG from "../../assests/img/travelling.png";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../components/ui/LoadingScreen";

const Onboarding = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="container h-screen">
          <div className="h-full">
            <div className="grid h-[55%] place-items-center">
              <img
                src={ONBOARDING_IMG}
                alt="travelling with a plane"
                className="max-w-[100%]"
              />
            </div>
            <div>
              <h1 className="mb-3 text-2xl font-bold text-pry-color">
                <Balancer ratio={0.1}>
                  Capturing your <span className="text-base-color">best</span>{" "}
                  travel <span className="text-base-color">experiences</span>.
                </Balancer>
              </h1>
              <p className="mb-6 text-base">
                <Balancer ratio={0.1}>
                  A traveling journal that provides an avenue to capturing your
                  best experiences while you tour and transit round the globe.{" "}
                </Balancer>
              </p>
              <button
                className="mb-3 w-full rounded bg-pry-color p-[10px] text-center text-white"
                onClick={() => navigate("/signin")}
              >
                Get Started
              </button>
              <div className="text-center text-sm">
                <p>
                  Already have an account?{" "}
                  <span className="text-base-color">sign in</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Onboarding;
