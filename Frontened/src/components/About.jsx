// import React from "react";

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center text-pink-500">
          About Us
        </h1>
        <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mt-6">
          Welcome to Our Learning Platform! We are dedicated to providing you with the best learning experience possible. Our platform offers a wide range of courses and resources to help you enhance your skills and stay ahead in your career.
        </p>
        <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mt-4">
          Our mission is to make learning accessible and enjoyable for everyone. Whether you are looking to learn a new skill, improve your knowledge, or advance your career, we have something for you.
        </p>
        <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mt-4">
          Join us on this journey of learning and growth. We are here to support you every step of the way.
        </p>
        <div className="mt-8 text-center">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1718436103~exp=1718439703~hmac=670bd008cb8cc201e68fab146cd760d12d20a4288a52f95a699d2335505760bb&w=900"
            alt="About Us"
            className="w-1/2 md:w-1/3 h-auto mx-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default About;