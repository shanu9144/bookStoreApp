import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Course from '../components/Course';
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Cards from "../components/Cards";
import Signup from "../components/Signup";
import Login from "../components/Login";

function Courses() {
  const { authUser } = useAuth();
  const [paidBooks, setPaidBooks] = useState([]);

  useEffect(() => {
    const fetchPaidBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        const filteredBooks = response.data.filter(book => book.price > 0);
        setPaidBooks(filteredBooks);
      } catch (error) {
        console.error("Error fetching paid books:", error);
      }
    };
    fetchPaidBooks();
  }, []);

  if (!authUser) {
    return (
      <>
        
        <Signup />
        <Login />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <Course />
        <div className="container mx-auto my-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center text-pink-500 mb-10">
            Paid Books
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paidBooks.map((book) => (
              <Cards key={book._id} item={book} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
