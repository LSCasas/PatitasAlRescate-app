import React from "react";
import AuthButtons from "../components/AuthButtons"; 
import HeroText from "../components/HeroText"; 

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
     
      <div className="flex items-center md:px-10  px-5  py-6">
        
        <img
          src="img/logo-patitasAlRescate.png"
          alt="Logo"
          className="w-30 h-16 md:w-[10%] md:h-auto md:ml-44" 
        />

       
        <div className="ml-auto mr-16"> 
          <AuthButtons />
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-center items-center px-10 md:px-20 md:space-x-10 mt-10 ml-4 md:ml-36">
       
        <div className="flex-1 text-center md:text-left md:max-w-lg"> 
          <HeroText />
        </div>

       
        <div className="flex justify-center w-full md:w-auto">
          <img
            src="img/main-pets.png"
            alt="Mascotas"
            className="w-[100%] md:w-[70%] h-auto" 
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;














