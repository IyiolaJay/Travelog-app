import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyForm = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    //check if input is a number
    // if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //focus on next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container grid h-screen place-items-center">
      <div className="w-full">
        <div className="mb-10">
          <h1 className="mb-3 text-3xl">Verification</h1>
          <p className="text-sm text-[#252525B2]">
            Enter the verification code you have received in your{" "}
            <span className="text-base-color">email</span> here
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-10 flex gap-8">
            {otp.map((data, index) => {
              return (
                <input
                  type="tel"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  className="w-full border-b border-b-[#d1d1d1] text-center outline-none"
                  placeholder="0"
                />
              );
            })}
          </div>
          <button
            className="mb-4 w-full rounded bg-pry-color p-[10px] text-center text-white"
            onClick={() => navigate("/verified")}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyForm;
