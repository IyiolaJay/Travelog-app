import React from "react";
import { Link } from "react-router-dom";

const SigninForm = () => {
  return (
    <div className="container grid h-screen place-items-center">
      <div className="w-full">
        <div className="mb-12">
          <h1 className="mb-2 text-3xl">Sign In</h1>
          <p className="text-sm text-[#252525B2]">
            Sign in into your account with email and password
          </p>
        </div>
        <form autoComplete="off" className="w-full">
          <div className="mb-5 flex w-full flex-col">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-black-[#00000080] h-[48px] rounded border-2  px-4 outline-none"
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
              className="border-black-[#00000080] h-[48px] rounded border-2 px-4 outline-none"
            />
          </div>

          <div className="mb-7 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remeber_password"
                id="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm text-[#252525B2]">
                Remember me
              </label>
            </div>
            <Link to="#" className="text-sm text-base-color">
              Forget Password?
            </Link>
          </div>

          <button className="mb-4 w-full rounded bg-pry-color p-[10px] text-center text-white">
            Get Started
          </button>
          <p className="text-sm">
            By clicking ‘sign in’ you agree to our{" "}
            <Link to="#" className="text-base-color">
              privacy policy
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-base-color">
              terms and condition
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
