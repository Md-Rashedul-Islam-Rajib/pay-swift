import React from 'react';
import { useForm } from 'react-hook-form';

const CashOut = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 items-center h-screen justify-center bg-[#ff9a3c]">
      <div className="flex-col items-center text-center md:text-start text-white md:ml-[20%] md:space-y-12">
        <h1 className="font-bold text-3xl md:text-6xl">Lowest Cash <br /> Out Fee</h1>
        <p className="font-semibold  md:text-xl">Easy Cash Out With Only 1.5% Fee</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="max-w-[75%] mx-auto">
          <label className="input flex items-center gap-2 mb-2 md:mb-4">
            <input
              type="number"
              className="grow py-2 px-6 rounded-lg"
              placeholder="Agent Mobile No"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-red-600 text-sm">Agent Number is required</span>
            )}
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input
            //   type={showPassword ? "text" : "password"}
              className="grow py-2 px-6 rounded-lg"
              type="number"
              placeholder="Amount"
              {...register("amount", { required: true })}
            />
            {/* <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span> */}
            {errors.amount && (
              <span className="text-red-600 text-sm">Amount is required</span>
            )}
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input
              type="number"
              className="grow py-2 px-6 rounded-lg"
              placeholder="Pin"
              {...register("pin", { required: true })}
            />
            {errors.pin && (
              <span className="text-red-600 text-sm">Pin is required</span>
            )}
          </label>

            <div className="flex justify-center">
          <button className="btn bg-[#155263] text-white py-2 px-4 rounded-lg">Confirm</button>
            </div>
          </div>
        </form>
      </div>
    </section>
    );
};

export default CashOut;