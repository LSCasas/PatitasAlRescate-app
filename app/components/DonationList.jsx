import React from 'react';
import DonationCard from './DonationCard';

const DonationList = () => {
  const donationBanks = [
    {
      logo: '/img/pawpacks-logo.png',
      name: 'PawPacks',
      description: 'En PawPacks: Alimento con Amor, creemos que cada perro merece un plato lleno y un hogar lleno de amor.',
    },
    {
      logo: '/img/pethaven-logo.png',
      name: 'PetHaven',
      description: 'En PetHaven, creemos que cada mascota merece amor y un plato lleno. Nos dedicamos a asegurar que reciban lo que necesitan como nutrición y atención.',
    },
    {
      logo: '/img/amigos-logo.png',
      name: 'Amigos 24/7',
      description: 'Somos una organización dedicada a la protección de animales callejeros, nuestro objetivo es su bienestar.',
    }, {
        logo: '/img/amigos-logo.png',
        name: 'Amigos 24/7',
        description: 'Somos una organización dedicada a la protección de animales callejeros, nuestro objetivo es su bienestar.',
      }, {
        logo: '/img/amigos-logo.png',
        name: 'Amigos 24/7',
        description: 'Somos una organización dedicada a la protección de animales callejeros, nuestro objetivo es su bienestar.',
      },
    
  ];

  return (
    <div className="p-4 mt-8" style={{ height: '80vh', overflowY: 'auto' }}>
      {donationBanks.map((bank, index) => (
        <DonationCard 
          key={index}
          logo={bank.logo}
          name={bank.name}
          description={bank.description}
        />
      ))}
    </div>
  );
};

export default DonationList;


