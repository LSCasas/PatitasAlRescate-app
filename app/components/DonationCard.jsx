import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const DonationCard = ({ logo, name, description }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const limitDescription = (desc, maxWords) => {
    const words = desc.split(' ');
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : desc;
  };

  return (
    <div className="flex p-4 bg-white shadow-md rounded-lg mb-4">
      <img src={logo} alt={`${name} Logo`} className="w-20 h-20 mr-4" />
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-black">{name}</h2>
        <p className="text-gray-600 mb-2">
          {isMobile ? limitDescription(description, 20) : limitDescription(description, 40)}
        </p>
        <Link href="/perfil">
          <button className={`text-white py-2 px-4 rounded hover:bg-yellow-600 ${isMobile ? 'bg-yellow-500 text-sm' : 'bg-yellow-500 text-base'}`}>
            Ver
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;




