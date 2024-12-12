// import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../public/Banner.png";

function Banner() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/login");
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 items-center">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Welcome to <span className="text-pink-500">Our Learning Platform</span>
          </h1>
          <p className="text-base md:text-xl text-white">
            Discover a world of knowledge at your fingertips. Join us to explore new topics, enhance your skills, and stay ahead in your career.
          </p>
          <button
            className="bg-pink-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-600 transition duration-300"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full order-1 md:order-2 md:w-1/2">
        <img src={banner} alt="Banner" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default Banner;