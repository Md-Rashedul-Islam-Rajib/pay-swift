import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="mb-2">Email</p>
                <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
                  <input
                    type="text"
                    className="grow border-0"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600 text-sm">
                      Email is required
                    </span>
                  )}
                </label>

                <p className="mb-2">password</p>
                <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="grow border-0"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <span
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {errors.password && (
                    <span className="text-red-600 text-sm">
                      Password is required
                    </span>
                  )}
                </label>

                <button className={`btn text-white bg-[#FEA116] w-full`}>
                  Log In
                </button>
              </form>
        </div>
    );
};

export default Login;