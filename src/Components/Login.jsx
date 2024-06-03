import React, { useRef, useState } from "react";
import { checkValidData } from "../Utils/validate";

const Login = () => {
  const [isSignUp, setSignUp] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const validateData = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;
  };

  const handleSignUp = () => {
    setSignUp(!isSignUp);
  };
  return (
    <div className="ml-[25%] w-2/4 mt-16 h-auto bg-blue-400 rounded-2xl">
      <h1 className="text-3xl font-semibold text-black text-center p-2">
        {isSignUp ? "SIGN UP" : "LOGIN"}
      </h1>
      <div className="flex flex-col rounded-full gap-2 m-3">
        {isSignUp && (
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-2 rounded-xl text-center"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Enter Your Email"
          className="p-2 rounded-xl text-center"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Your Password"
          className="p-2 rounded-xl text-center"
        />
        <div className="flex flex-col justify-center mt-4">
          <button
            className="p-2 bg-green-600 rounded-lg text-white font-bold hover:bg-red-500"
            onClick={validateData}
          >
            LOG IN
          </button>

          <p className="text-center font-semibold text-red-900">
            {errorMessage}
          </p>
          <h4
            className="p-2 text-center cursor-pointer hover:text-white font-semibold"
            onClick={handleSignUp}
          >
            {!isSignUp ? "Create Account" : "LOG IN"}
          </h4>

          <h4 className="p-2 text-center font-semibold">OR</h4>

          <h4 className="p-2 text-center cursor-pointer hover:text-white font-semibold">
            USE GMAIL
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
