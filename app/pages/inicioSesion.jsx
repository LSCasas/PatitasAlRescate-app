import React from "react";
import Login from "../components/LoginForm";

const InicioSesion = () => {
  return (
    <div className="flex h-screen overflow-hidden">
     
      <div className="bg-[#E6F3FF]  justify-center items-start p-10 flex-[0.9] hidden md:flex">
        <img
          src="/img/dog3.png" 
          alt="Dog using computer"
          className="h-[100%] w-auto object-cover rounded-lg"
        />
      </div>

      
      <div className="flex justify-center items-start bg-white p-10 flex-1 ">
        <div className="w-full max-w-md mt-10"> 
          <Login />
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;



















