import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { login } from '../api/api'; // Asegúrate de que la ruta de tu archivo api sea correcta

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [notification, setNotification] = useState({ message: '', type: '' });

  const onSubmit = async (data) => {
    try {
      const result = await login(data.email, data.password);

      if (result.success && result.data.token) {
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('email', data.email);
        setNotification({ message: 'Welcome', type: 'success' });
        setTimeout(() => {
          setNotification({ message: '', type: '' });
          router.push('/bancos2'); // Cambia esta ruta según tu estructura
        }, 1000);
      } else {
        setNotification({ message: 'Datos incorrectos', type: 'error' });
      }
    } catch (error) {
      setNotification({ message: 'Datos incorectos', type: 'error' });
      console.error('Error handling request:', error);
    }
  };

  return (
    <div className="p-10 w-full max-w-md mx-auto bg-white rounded-lg">
      <h2 className="text-center text-2xl font-bold mb-6 text-black">Iniciar Sesion</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your Email here"
            className={`w-full px-4 py-3 border-2 ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Enter your Password here"
            className={`w-full px-4 py-3 border-2 ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-medium md:py-3 py-3 rounded-md hover:bg-yellow-500 transition"
        >
          Iniciar Sesion
        </button>
      </form>
      {notification.message && (
        <div className={`p-2 mt-4 text-white rounded ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          {notification.message}
        </div>
      )}
      <p className="text-center text-sm text-gray-600 mt-4">
        No tienes una cuenta?{" "}
        <a href="/registro" className="text-yellow-600 hover:underline">Registrar</a>
      </p>
    </div>
  );
};

export default Login;
