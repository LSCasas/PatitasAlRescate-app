import React from "react";
import Link from "next/link"; 

const AuthButtons = () => {
  return (
    <div className="flex space-x-5"> 
      
      <Link href="/verificacion">
        <button className="bg-gray-800 text-white py-2 md:px-8  px-5 rounded font-sans hover:bg-gray-900 active:bg-black">
          Iniciar Sesion
        </button>
      </Link>
      
     
      <Link href="/registro">
        <button className="bg-white border-2 text-black py-2 md:px-8 px-5 rounded font-sans hover:bg-gray-100 active:bg-gray-200">
          Registrarme
        </button>
      </Link>
    </div>
  );
};

export default AuthButtons;




