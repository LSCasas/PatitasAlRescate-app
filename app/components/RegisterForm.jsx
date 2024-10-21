import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
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
      <h2 className="text-center text-2xl font-bold mb-6 text-black">Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Nombre
          </label>
          <input
            type="text"
            {...register("name", { required: "Nombre es requerido" })}
            placeholder="Ingresa tu nombre"
            className={`w-full px-4 md:py-3 py-1 border-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Correo */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Correo
          </label>
          <input
            type="email"
            {...register("email", { required: "Correo es requerido" })}
            placeholder="Ingresa tu correo aquí"
            className={`w-full px-4 md:py-3 py-1 border-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Contraseña */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Contraseña
          </label>
          <input
            type="password"
            {...register("password", { required: "Contraseña es requerida" })}
            placeholder="Ingresa tu contraseña"
            className={`w-full px-4 md:py-3 py-1 border-2 ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

       
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            {...register("confirmPassword", { required: "Confirma tu contraseña" })}
            placeholder="Confirma tu contraseña"
            className={`w-full px-4 md:py-3  py-1 border-2 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            {...register("phone", { required: "Teléfono es requerido" })}
            placeholder="Ingresa tu número de teléfono"
            className={`w-full px-4 md:py-3 py-1 border-2 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Tipo */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Tipo
          </label>
          <select
            {...register("type", { required: "Selecciona un tipo" })}
            className={`w-full px-4 md:py-3 py-1 border-2 ${
              errors.type ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-gray-500 text-gray-800`}
          >
            <option value="">Selecciona un tipo</option>
            <option value="donante">Donante</option>
            <option value="banco">Banco</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
          )}
        </div>

        {/* Botón de Registro */}
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-medium md:py-3 py-1 rounded-md hover:bg-yellow-500 transition"
        >
          Registrarme
        </button>
      </form>
    </div>
  );
};

export default Register;
