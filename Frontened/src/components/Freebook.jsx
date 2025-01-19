import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        const filteredBooks = response.data.filter(book => book.image);
        setBooks(filteredBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center text-pink-500 mb-10">
        Free Books
      </h2>
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book._id} className="p-2">
            <Cards item={book} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;