import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlic";
import { toggleSearchSlice } from "../utils/searchSlice";
import SearchBar from "./SearchBar";
import { Search } from "lucide-react";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const isTyping = useSelector((state) => state.search.isTyping); // Add this

  const showSearchBar = useSelector((state) => state.search.showSearchSlice);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSearchClick = () => {
    dispatch(toggleSearchSlice());
  };

  return (
<div className={`w-full fixed top-0 px-6 py-3 z-50 flex justify-between items-center ${isTyping ? "bg-black" : "bg-gradient-to-b from-black"}`}>
<img
        className="w-36 cursor-pointer"
        src={LOGO}
        alt="logo"
        onClick={() => navigate("/browse")}
      />

      <div className="flex items-center gap-6">
        {location.pathname === "/" && (
          <div className="relative">
            <div className="flex items-center border border-gray-600 rounded-lg bg-black px-3 py-1 cursor-pointer">
              <select
                className="appearance-none bg-transparent text-white font-semibold focus:outline-none cursor-pointer pr-8 pl-3"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    className="bg-gray-900 text-white"
                    key={lang.identifier}
                    value={lang.identifier}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white" />
            </div>
          </div>
        )}

        {user && (
          <div className="flex items-center gap-4">
            {!showSearchBar ? (
              <Search
                className="text-gray-300 cursor-pointer hover:text-red-500 transition"
                onClick={handleSearchClick}
              />
            ) : (
              <SearchBar />
            )}

            <img
              className="w-10 h-10  border border-red-600"
              alt="user-icon"
              src={user?.photoURL}
            />
            <button
              onClick={handleSignOut}
              className="text-white font-bold hover:text-red-500 transition"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
