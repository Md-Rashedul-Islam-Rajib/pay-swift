import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import logo from '../assets/logo-nav.png'
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className=" bg-[#115263] h-full pb-[20%] w-screen">
      <div className="w-full flex justify-center pt-[5%]">
        <img className="w-32" src={logo} alt="" />
      </div>

      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-400 p-8 rounded-lg text-white"
        >

          <div className="flex gap-4">
          <div className="flex-1">
            <p className="mb-2">Name</p>
            <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
              <input
                type="name"
                className="grow border-0 text-black py-2 px-4 rounded-lg"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600 text-sm">Name is required</span>
              )}
            </label>
          </div>

          <div className="flex-1">
            <p className="mb-2">Email</p>
            <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
              <input
                type="email"
                className="grow border-0 text-black py-2 px-4 rounded-lg"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">Email is required</span>
              )}
            </label>
          </div>
          </div>

          <div className="flex gap-4">
          <div className="relative">
            <p className="mb-2">Pin</p>
            <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
              <input
                type={showPassword ? "number" : "password"}
                className="grow border-0 text-black py-2 px-4 rounded-lg"
                placeholder="Pin"
                {...register("pin", { required: true })}
              />
              <span
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="absolute right-3 top-11 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <span className="text-red-600 text-sm">
                  Password is required
                </span>
              )}
            </label>
          </div>

          <div>
            <p className="mb-2">Mobile No</p>
            <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
              <input
                type="number"
                className="grow border-0 text-black py-2 px-4 rounded-lg"
                placeholder="Mobile No"
                {...register("mobile", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  Mobile No is required
                </span>
              )}
            </label>
          </div>

          <div>
          <p className="mb-2">Select a role</p>
            <select
              className="input input-bordered flex items-center w-full text-black py-3 px-6 rounded-lg"
              placeholder="Role"
              {...register("role", { required: true })}
            >
              {/* <option className="text-gray-400">Select a role</option> */}
              <option value="user">User</option>
              <option value="agent">
                Agent
              </option>
            </select>
            {errors.role && (
              <span className="text-red-600 text-sm">
                Role is required
              </span>
            )}
          </div>
          </div>
          <div>
            <button className="btn text-white bg-[#115263] px-4 py-2 rounded-lg my-4">
              Sign up
            </button>
          </div>
          {/* <button className='text-[#155263] font-semibold my-4' type='button' onClick={toggleInput}>Use {showEmail ? "Mobile Number" : "Email"} Instead</button> */}
        </form>
      </div>
    </section>
  );
};

export default SignUp;
