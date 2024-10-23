import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { createUser } from "../api/api";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [showAddress, setShowAddress] = useState(false); 

  const onSubmit = async (data) => {
    console.log(data);

    
    try {
      const response = await createUser(data);
      console.log("Response:", response);

      if (response && response.user) {
        const { name, email } = response.user;
        console.log("User:", name, email);

        setNotification({ message: 'Registro exitoso', type: 'success' });

       
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      } else {
        console.error("Error en el registro:", response);
        setNotification({ message: response?.message || 'Error en el registro', type: 'error' });
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setNotification({ message: 'Error en la solicitud', type: 'error' });
    }
  };

  const handleTypeChange = (event) => {
    setShowAddress(event.target.value === "banco");
  };

  const password = watch("password"); 

  return (
    <div className="p-10 w-full max-w-md mx-auto bg-white rounded-lg">
      <h2 className="text-center text-2xl font-bold mb-6 text-black">Registro</h2>
      <div className="max-h-[600px] overflow-y-auto"> 
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Nombre</label>
            <input
              type="text"
              {...register("name", { required: "Nombre es requerido" })}
              placeholder="Ingresa tu nombre"
              className={`w-full px-4 md:py-3 py-1 border-2 ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Correo */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Correo</label>
            <input
              type="email"
              {...register("email", { required: "Correo es requerido" })}
              placeholder="Ingresa tu correo aquí"
              className={`w-full px-4 md:py-3 py-1 border-2 ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Contraseña</label>
            <input
              type="password"
              {...register("password", { required: "Contraseña es requerida" })}
              placeholder="Ingresa tu contraseña"
              className={`w-full px-4 md:py-3 py-1 border-2 ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Confirmar Contraseña</label>
            <input
              type="password"
              {...register("confirmPassword", { 
                required: "Confirma tu contraseña", 
                validate: value => value === password || "Las contraseñas no coinciden" 
              })}
              placeholder="Confirma tu contraseña"
              className={`w-full px-4 md:py-3 py-1 border-2 ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Teléfono</label>
            <input
              type="tel"
              {...register("phone", { required: "Teléfono es requerido" })}
              placeholder="Ingresa tu número de teléfono"
              className={`w-full px-4 md:py-3 py-1 border-2 ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Tipo */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Tipo</label>
            <select
              {...register("type", { required: "Selecciona un tipo" })}
              onChange={handleTypeChange} 
              className={`w-full px-4 md:py-3 py-1 border-2 ${errors.type ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-gray-500 text-gray-800`}
            >
              <option value="">Selecciona un tipo</option>
              <option value="donante">Donante</option>
              <option value="banco">Banco</option>
            </select>
            {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
          </div>

          {/* Campo adicional para dirección */}
          {showAddress && (
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">Dirección</label>
              <input
                type="text"
                {...register("location", { required: "Dirección es requerida" })} // Cambié "address" a "location"
                placeholder="Ingresa tu dirección"
                className={`w-full px-4 md:py-3 py-1 border-2 ${errors.location ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400`}
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
            </div>
          )}

          {/* Botón de Registro */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-medium md:py-3 py-1 rounded-md hover:bg-yellow-500 transition"
          >
            Registrarme
          </button>

          {/* Notificación */}
          {notification.message && (
            <p className={`text-${notification.type === 'success' ? 'green' : 'red'}-500 text-sm mt-4`}>
              {notification.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}






