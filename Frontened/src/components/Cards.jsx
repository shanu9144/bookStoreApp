import PropTypes from "prop-types";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const { authUser } = useAuth();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (!authUser) {
      navigate("/signup");
    } else {
      // Logic to handle book purchase
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-md text-sm">
            {item.category}
          </div>
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl font-semibold mb-2">
            {item.name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{item.title}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline text-lg font-bold">
              ${item.price}
            </div>
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Cards;