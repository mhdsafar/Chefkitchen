import React from "react";
import Backgroundimg from "../assets/images/Android Compact - 1.png";
import SplashImage from "../assets/images/Frame 98.svg";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center w-full "
      style={{ backgroundImage: `url(${Backgroundimg})` }}
    >
      <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-[360px] sm:w-[380px] md:w-[400px] flex flex-col items-center">
        <img
          src={SplashImage}
          alt="Food"
          className="w-full rounded-xl shadow-xl "
        />

        <h1 className="text-2xl font-semibold text-white mt-6 text-center">
          Welcome to Chef Kitchen
        </h1>

        <p className="text-gray-300 text-sm text-center mt-2">
          Check out the awesome food experience! It's super fresh, quick, and
          oh-so tasty!
        </p>

        <button
          onClick={() => navigate("/menu")}
          className="bg-orange-400 hover:bg-orange-500 transition text-white font-medium w-full py-3 rounded-xl mt-6"
        >
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default Landingpage;
