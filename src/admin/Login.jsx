import React, { useState } from "react";
import { useForm } from "react-hook-form"; 
import { IoMdEye,IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
      <div className="card w-full max-w-md shadow-xl bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required", pattern: /^[^@]+@[^@]+\.[^@]+$/i })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Password Input */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full pr-12"
                {...register("password", { 
                  required: "Password is required", 
                  minLength: { value: 6, message: "Password must be at least 6 characters" } 
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEye />
 : <IoMdEyeOff />
}
              </button>
            </div>
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password.message}</span>
            )}
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full mt-5">Login</button>

          {/* Forgot Password & Sign Up */}
          <div className="mt-3 text-center">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
