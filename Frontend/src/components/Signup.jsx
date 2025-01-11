import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      if (res.data) {
        toast.success("SignUp Successful!");
        navigate(from, { replace: true });
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));

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
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box bg-gray-800 text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close Button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>

              {/* Name Field */}
              <div className="mt-4 space-y-2">
                <label htmlFor="fullname" className="text-white">Name</label>
                <br/>
                <input
                  id="fullname"
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 py-1 rounded-md bg-gray-700 text-white"
                  {...register("fullname", { required: "Name is required" })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">{errors.fullname.message}</span>
                )}
              </div>

              {/* Email Field */}
              <div className="mt-4 space-y-2">
                <label htmlFor="email" className="text-white">Email</label>
                <br/>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 rounded-md bg-gray-700 text-white"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">{errors.email.message}</span>
                )}
              </div>

              {/* Password Field */}
              <div className="mt-4 space-y-2">
                <label htmlFor="password" className="text-white">Password</label>
                <br/>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 rounded-md bg-gray-700 text-white"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">{errors.password.message}</span>
                )}
              </div>

              {/* Button */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  SignUp
                </button>
                <p className="ml-1 py-2">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Render Login outside */}
      <Login />
    </>
  );
}

export default Signup;
