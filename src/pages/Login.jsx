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
        <section className=' bg-[#115263] h-full'>
            
            <div className='flex justify-center items-center h-full'>
            <form onSubmit={handleSubmit(onSubmit)}
            className='bg-slate-400 p-8 rounded-lg text-white'
            >
                <div>
                <p className="mb-2">Email/Mobile No</p>
                <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
                  <input
                    type="text"
                    className="grow border-0 py-2 px-4 rounded-lg"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600 text-sm">
                      Email is required
                    </span>
                  )}
                </label>
                </div>
                
                  <div>
                  <p className="mb-2">Pin</p>
                <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="grow border-0  py-2 px-4 rounded-lg"
                    placeholder="Password"
                    {...register("pin", { required: true })}
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
                  </div>
                
                  <div>
                <button className="btn text-white bg-[#115263] px-4 py-2">
                  Log In
                </button>
                  </div>
              </form>
        </div>
        </section>
    );
};

export default Login;