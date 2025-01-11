import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

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

    try {
      const response = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log(response.data);
      toast.success('Login Successful!');
      document.getElementById("my_modal_3").close();

      setTimeout(() => {
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        window.location.reload();
      }, 500);
    } catch (err) {
      if (err.response && err.response.data.message) {
        toast.error(`Error: ${err.response.data.message}`);
      } else {
        toast.error("An unexpected error occurred.");
      }
      console.error(err);
    }
  };

  return (
    <div>
      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-gray-800 text-white"> {/* Dark mode styles */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            {/* Login Form */}
            <h3 className="font-bold text-lg">Login</h3>

            {/* Email Field */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email" className="text-white">Email</label> {/* Label for accessibility */}
              <br/>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 rounded-md bg-gray-700 text-white"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password Field */}
            <div className="mt-4 space-y-2">
              <label htmlFor="password" className="text-white">Password</label> {/* Label for accessibility */}
              <br/>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 rounded-md bg-gray-700 text-white"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>

            {/* Buttons */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p className="ml-1 py-2">
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">SignUp</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
