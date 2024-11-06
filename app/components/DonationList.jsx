import React from 'react';
import DonationCard from './DonationCard';

const DonationList = () => {
  const donationBanks = [
    {
      logo: '/img/perfildogs.png',
      name: 'PawPacks',
      description: 'En PawPacks: Alimento con Amor, creemos que cada perro merece un plato lleno y un hogar lleno de amor.',
      link: '/perfil'  // Enlace específico para PawPacks
    },
    {
      logo: '/img/logo2.png',
      name: 'Banapar',
      description: 'En Banapar, creemos que cada mascota merece amor y un plato lleno. Nos dedicamos a asegurar que reciban lo que necesitan como nutrición y atención.',
      link: '/perfil2'  // Enlace específico para Banapar
    },
    {
      logo: '/img/logo5.png',
      name: 'Amigos 24/7',
      description: 'Somos una organización dedicada a la protección de animales callejeros, nuestro objetivo es su bienestar.',
      link: '/perfil3'  // Otro enlace para este banco de donaciones
    }, 
    {
      logo: '/img/logo7.png',
      name: 'PetHaven',
      description: 'Nos dedicamos a mejorar la vida de los animales sin hogar, ofreciendo un futuro lleno de cuidados y oportunidades.',
      link: '/perfil4'  // Otro enlace para este banco de donaciones
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
          link={bank.link}  // Pasamos el link como prop
        />
      ))}
    </div>
  );
};

export default DonationList;



