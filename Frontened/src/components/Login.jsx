import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // Handle form submission logic here
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged in Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-center mb-4">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <label className="block text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="text-gray-700 dark:text-gray-300">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;