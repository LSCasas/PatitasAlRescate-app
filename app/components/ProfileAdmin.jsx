import React, { useState } from 'react';
import { useRouter } from 'next/router'; 

const Profile = () => {
  const router = useRouter(); 

  // Estado para la información editable
  const [location, setLocation] = useState('San Francisco');
  const [commitments, setCommitments] = useState([
    'Impacto directo: Con tus donaciones, llevamos alimentos a las mascotas más necesitadas, garantizando que cada donativo se traduzca en un plato lleno y una vida más digna.',
    'Transparencia total: En PawPack, valoramos la confianza, es por lo que proporcionamos reportes claros y detallados para que sepas exactamente cómo tu donación está ayudando a cambiar vidas.',
    'Alimentos de calidad: Nos aseguramos de que cada perro reciba una dieta equilibrada y saludable, para que puedan crecer fuertes y llenos de energía.',
    'Compromiso con el medio ambiente: Usamos empaques reciclables y procesos sostenibles para cuidar tanto de nuestras mascotas como del planeta.'
  ]);

  // Función para manejar la actualización de la ubicación
  const handleLocationUpdate = (e) => {
    setLocation(e.target.value);
  };

  // Función para manejar la actualización de los compromisos
  const handleCommitmentUpdate = (index, e) => {
    const updatedCommitments = [...commitments];
    updatedCommitments[index] = e.target.value;
    setCommitments(updatedCommitments);
  };

  // Función para borrar la información
  const handleClear = () => {
    setLocation('');
    setCommitments([
      '', '', '', ''
    ]);
  };

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
        <strong>
          {/* Campo editable para la ubicación */}
          <input 
            type="text" 
            value={location} 
            onChange={handleLocationUpdate} 
            className="bg-transparent text-center text-gray-600 font-semibold focus:outline-none w-full"
            placeholder="Ubicación"
          />
        </strong> · 154 following · 6711 followers
      </p>

      <h3 className="text-xl text-black mb-2">Nos comprometemos a:</h3>
      <ul className="list-disc pl-5 space-y-2 w-full">
        {/* Iteramos los compromisos para hacerlos editables */}
        {commitments.map((commitment, index) => (
          <li key={index} className="text-gray-600">
            <input 
              type="text" 
              value={commitment} 
              onChange={(e) => handleCommitmentUpdate(index, e)} 
              className="bg-transparent text-gray-600 w-full border-none focus:outline-none"
            />
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <div className="mt-4 text-center">
          <button 
            onClick={handleClear} 
            className="bg-red-400 text-black font-semibold py-2 px-4 rounded hover:bg-red-500 transition duration-200"
          >
            Borrar Información
          </button>
        </div>
      </div>

      <div className="tabs mt-5 text-gray-600 text-center">
        <span>My posts</span> · <span>Likes</span> · <span>Bookmarks</span>
      </div>
    </div>
  );
};

export default Profile;


