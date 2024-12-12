// import React from "react";

function Contact() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center text-pink-500">
          Contact Us
        </h1>
        <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mt-6">
          We would love to hear from you! Whether you have a question about our platform, need assistance, or just want to give feedback, feel free to reach out to us.
        </p>
        <div className="mt-8">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-8 text-center">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
            alt="Contact Us"
            className="w-1/2 md:w-1/3 h-auto mx-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;