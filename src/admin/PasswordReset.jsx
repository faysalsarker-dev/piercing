import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { FaArrowLeft, FaEnvelope } from "react-icons/fa";

import toast from "react-hot-toast";
import { ContextData } from "../utility/ContextData";
import { useNavigate } from "react-router";

const PasswordReset = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { resetPassword,loading}= useContext(ContextData);
const navigate = useNavigate()

  const onRequestReset = async (data) => {
 
    try {
      await resetPassword( data.email);
      toast.success("Success", "Password reset email sent! Check your inbox.", "success");
    } catch (error) {
      toast.error("Error", error.message, "error");
    }
    
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center  px-4">
        <FaArrowLeft onClick={()=>navigate(-1)} className="absolute top-3 left-3 bg-gray-300 w-14 p-3 rounded-lg h-14 shadow-2xl" />
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600">Reset Your Password</h2>

        <form onSubmit={handleSubmit(onRequestReset)} className="mt-6 space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="text-gray-700">Email Address</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered w-full pl-10"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <button type="submit" className="btn roboto btn-primary w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
