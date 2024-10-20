import React from "react";
import RegisterForm from "../components/RegisterForm"; 

const Register = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      
      <div className="bg-[#E6F3FF] flex justify-center items-start p-10 flex-[0.9]">
        <img
          src="/img/dog2.png" 
          alt="Dog using computer"
          className="h-[100%] w-auto object-cover rounded-lg" 
        />
      </div>

      
      <div className="flex justify-center items-start bg-white  flex-1">
        <div className="w-full max-w-md mt-0"> 
          <RegisterForm /> 
        </div>
      </div>
    </div>
  );
};

export default Register;


