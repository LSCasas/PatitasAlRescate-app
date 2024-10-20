import React from "react";
import Link from "next/link"; 

const AuthButtons = () => {
  return (
    <div className="flex space-x-4"> 
      
      <Link href="/inicioSesion">
        <button className="bg-gray-800 text-white py-2 px-8 rounded font-sans hover:bg-gray-900 active:bg-black">
          Iniciar Sesion
        </button>
      </Link>
      
     
      <Link href="/registro">
        <button className="bg-white border-2 text-black py-2 px-8 rounded font-sans hover:bg-gray-100 active:bg-gray-200">
          Registrarme
        </button>
      </Link>
    </div>
  );
};

export default AuthButtons;




