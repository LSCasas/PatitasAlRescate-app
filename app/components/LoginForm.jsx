import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
  };

  return (
    <div className="p-10 w-full max-w-md mx-auto bg-white rounded-lg">
      <h2 className="text-center text-2xl font-bold mb-6 text-black">Iniciar Sesion</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your Email here"
            className={`w-full px-4 py-3 border-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Enter your Password here"
            className={`w-full px-4 py-3 border-2 ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-medium md:py-3 py-3 rounded-md hover:bg-yellow-500 transition"
        >
          Iniciar Sesion
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
      No tienes una cuenta?{" "}
        <a href="/registro" className="text-yellow-600 hover:underline">
          Resgistrar
        </a>
      </p>

      <div className="flex items-center justify-center mt-6">
        <span className="text-gray-400">- O -</span>
      </div>

      <div className="flex space-x-4 mt-6">
        <button className="w-full flex items-center justify-center border-2 border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
          <img src="img/google.jpg" alt="Google" className="w-5 h-5 mr-2" />
          <span className="text-gray-600">Inicia Sesion con Google</span>
        </button>
       
      </div>
    </div>
  );
};

export default Login;



