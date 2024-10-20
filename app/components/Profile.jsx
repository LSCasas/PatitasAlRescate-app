// components/Profile.jsx

import React from 'react';

const Profile = () => {
  return (
    <div className="mt-5 p-5 bg-white shadow-lg rounded-lg w-full md:h-[95vh] h-[90vh] overflow-auto">
      <div className="relative mb-5">
        <img 
          src="/img/bannerdogs.png" 
          alt="Banner de perros" 
          className="md:w-full md:h-[25vh] rounded-lg" 
        />
        
        <img 
          src="/img/perfildogs.png" 
          alt="Perfil de perros" 
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-white"
        />
      </div>

      <h2 className="mt-20 text-2xl text-black text-center">PawPack</h2>
      <p className="text-gray-600 mb-5 text-center">
        <strong>San Francisco</strong> · 154 following · 6711 followers
      </p>

      <h3 className="text-xl text-black mb-2">Nos comprometemos a:</h3>
      <ul className="list-disc pl-5 space-y-2 w-full">
        <li className="text-gray-600">
          Impacto directo: Con tus donaciones, llevamos alimentos a las mascotas más necesitadas, garantizando que cada donativo se traduzca en un plato lleno y una vida más digna.
        </li>
        <li className="text-gray-600">
          Transparencia total: En PawPack, valoramos la confianza, es por lo que proporcionamos reportes claros y detallados para que sepas exactamente cómo tu donación está ayudando a cambiar vidas.
        </li>
        <li className="text-gray-600">
          Alimentos de calidad: Nos aseguramos de que cada perro reciba una dieta equilibrada y saludable, para que puedan crecer fuertes y llenos de energía.
        </li>
        <li className="text-gray-600">
          Compromiso con el medio ambiente: Usamos empaques reciclables y procesos sostenibles para cuidar tanto de nuestras mascotas como del planeta.
        </li>
      </ul>

      {/* Botón "Donar" */}
      <div className="text-center mt-5">
        <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition duration-200">
          Donar
        </button>
      </div>

      <div className="tabs mt-5 text-gray-600 text-center">
        <span>My posts</span> · <span>Likes</span> · <span>Bookmarks</span>
      </div>
    </div>
  );
};

export default Profile;





