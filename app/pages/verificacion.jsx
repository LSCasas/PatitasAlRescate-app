import React from "react";
import Link from "next/link"; // Importa Link de Next.js para la navegación

const InicioSesion = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sección de la izquierda con imagen */}
      <div className="bg-[#E6F3FF] justify-center items-start p-10 flex-[0.9] hidden md:flex">
        <img
          src="/img/dog3.png"
          alt="Dog using computer"
          className="h-[100%] w-auto object-cover rounded-lg"
        />
      </div>

      {/* Sección de la derecha con el menú */}
      <div className="flex justify-center items-center bg-white p-10 flex-1">
        <div className="w-full max-w-md mt-10">
          {/* Título */}
          <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
            Selecciona tu perfil
          </h1>

          {/* Menú con las opciones Donante y Banco */}
          <div className="flex flex-col space-y-4">
            <Link
              href="/inicioSesion"
              className="bg-yellow-400 text-white text-center py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
            >
              Donante
            </Link>
            <Link
              href="/inicioSesion2"
              className="bg-blue-400 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Banco
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;



