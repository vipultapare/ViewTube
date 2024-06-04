import React, { useRef, useState } from "react";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/ReduxStore/userSlice";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [isSignUp, setSignUp] = useState(false);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const validateData = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    // else
    // sign in and sign up user

    if (isSignUp) {
      // for sign up
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // for sign in

      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const handleSignUp = () => {
    setSignUp(!isSignUp);
  };

  const provider = new GoogleAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <Header />
      <div className="ml-[25%] w-2/4 mt-16 h-auto bg-blue-400 rounded-2xl">
        <h1 className="text-3xl font-semibold text-black text-center p-2">
          {isSignUp ? "SIGN UP" : "LOGIN"}
        </h1>
        <div className="flex flex-col rounded-full gap-2 m-3">
          {isSignUp && (
            <input
              ref={name}
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
              {isSignUp ? "SIGN UP" : "LOG IN"}
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

            <h4
              className="p-2 text-center cursor-pointer hover:text-white font-semibold"
              onClick={handleGoogle}
            >
              USE GMAIL
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
