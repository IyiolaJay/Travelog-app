import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="container grid h-screen place-items-center">
      <div className="w-full">
        <div className="mb-10">
          <h1 className="mb-3 text-3xl">Sign Up</h1>
          <p className="text-sm text-[#252525B2]">
            create an account with your{" "}
            <span className="text-base-color">email</span> and{" "}
            <span className="text-base-color">password</span>
          </p>
        </div>
        <form autoComplete="off" className="w-full">
          <div className="mb-3 flex w-full flex-col">
            <label htmlFor="username" className="mb-1">
              Username
            </label>
            <input
              type="email"
              id="username"
              name="username"
              className="border-1 h-[48px] rounded border border-[#d1d1d1]  px-4 outline-none"
            />
          </div>
          <div className="mb-3 flex w-full flex-col">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-1 h-[48px] rounded border border-[#d1d1d1]  px-4 outline-none"
            />
          </div>
          <div className="mb-3 flex w-full flex-col">
            <label htmlFor="password" className="mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-1 h-[48px] rounded border border-[#d1d1d1] px-4 outline-none"
            />
          </div>
          <div className="mb-8 flex w-full flex-col">
            <label htmlFor="confirm_password" className="mb-1">
              Confirm Password
            </label>
            <input
              type="confirm_password"
              id="confirm_password"
              name="confirm_password"
              className="border-1 h-[48px] rounded border border-[#d1d1d1] px-4 outline-none"
            />
          </div>
          <button className="mb-4 w-full rounded bg-pry-color p-[10px] text-center text-white">
            Get Started
          </button>
          <p className="text-center text-sm">
            Do you already have an account?{" "}
            <Link to="/signin" className="text-base-color">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
