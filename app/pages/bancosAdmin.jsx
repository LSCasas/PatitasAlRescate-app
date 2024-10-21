import React, { useState } from 'react';
import LefthAdmin from '../components/LefthAdmin'; // Cambia a LefthAdmin
import Title from '../components/Title';  
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import DonationList from '../components/DonationList'; 

const montserrat = Montserrat({ subsets: ['latin'] });
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] });

const BancosAdmin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`min-h-screen bg-white flex relative ${montserrat.className}`}>
    
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transform transition-transform duration-300 ease-in-out bg-gradient-to-b from-[#31416d] to-[#232c48] md:w-[30%] lg:w-[15%] w-[50%] h-full fixed lg:static z-40`}
      >
        <LefthAdmin /> {/* Componente LefthAdmin */}
      </div>

      <main className='flex-1 ml-3 flex flex-col items-center'>
        <div className='flex-1 flex flex-col items-center'>
         
          <div className='w-full flex flex-col lg:flex-row lg:items-center lg:justify-between mt-2'>
            <div className='lg:hidden top-4 left-4 z-50'>
              <button
                onClick={toggleMenu}
                className='text-white bg-[#f7e736f3] p-2 rounded-md focus:outline-none'
              >
                {isMenuOpen ? '✖' : '☰'}
              </button>
            </div>
          </div>

          <Title className='text-base '>
            Bancos de Donaciones
          </Title>

          <DonationList /> {/* Componente de lista de donaciones */}
        </div>
      </main>
    </div>
  );
};

export default BancosAdmin;
