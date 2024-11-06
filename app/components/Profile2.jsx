import React from 'react';
import { useRouter } from 'next/router'; 

const Profile = () => {
  const router = useRouter(); 

  const handleDonarClick = () => {
    router.push("/formulario"); 
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
          src="/img/logo2.png" 
          alt="Perfil de perros" 
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-white"
        />
      </div>

      <h2 className="mt-20 text-2xl text-black text-center">Banapar</h2>
      <p className="text-gray-600 mb-5 text-center">
        <strong>Cuautitlan</strong> · 154 following · 2135 followers
      </p>

      <h3 className="text-xl text-black mb-2">Nos comprometemos a:</h3>
      <ul className="list-disc pl-5 space-y-2 w-full">
        <li className="text-gray-600">
          Alimentar con amor: Nos comprometemos a distribuir alimentos nutritivos y de alta calidad a todos los perros necesitados, asegurando que cada plato esté lleno de amor y bienestar.
        </li>
        <li className="text-gray-600">
          Rendición de cuentas: Nuestra misión es mantenerte informado, por eso te brindamos informes transparentes y detallados sobre el impacto de tu contribución.
        </li>
        <li className="text-gray-600">
          Cuidado de la salud: Nos aseguramos de que cada perro reciba la mejor nutrición y atención posible para su crecimiento saludable y felicidad.
        </li>
        <li className="text-gray-600">
          Sostenibilidad: Adoptamos prácticas amigables con el medio ambiente para proteger tanto a nuestros peluditos como a la naturaleza que nos rodea.
        </li>
      </ul>

      <div className="tabs mt-5 text-gray-600 text-center">
        <span>My posts</span> · <span>Likes</span> · <span>Bookmarks</span>
      </div>
    </div>
  );
};

export default Profile;

