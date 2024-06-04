import React, { useEffect, useState } from "react";
import tv from "../Assets/tv.png";
import userIcon from "../Assets/userIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../Utils/ReduxStore/userSlice";

const Header = () => {
  const [isUserIconClick, setUserIconClick] = useState(false);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIconClick = () => {
    setUserIconClick(!isUserIconClick);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-500  to-blue-800 cursor-pointer  flex flex-row justify-between">
      <img
        src={tv}
        alt="LOGO"
        className=" w-20 h-20 md:w-28 p-4 md:h-28 ml-8"
      />
      <h1 className=" font-semibold text-2xl md:text-6xl font-sans text-blue-300 mt-5 mr-5 md:mr-9">
        View Tube
      </h1>
      {user && (
        <div className="flex flex-col  mt-6 mr-7 md:mr-14 text-white font-semibold">
          <img
            src={userIcon}
            alt=""
            className="w-4 h-4 md:w-8 md:h-8 ml-5"
            onClick={handleIconClick}
          />
          <h4 className="text-xs md:text-sm pt-1">Hello,{user?.displayName}</h4>
          {isUserIconClick && (
            <button
              className="bg-red-600 p-1 rounded-xl justify-center text-xs md:text-sm"
              onClick={handleSignOut}
            >
              SIGN OUT
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
