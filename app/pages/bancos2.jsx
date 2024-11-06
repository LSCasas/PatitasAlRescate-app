import { useState, useEffect } from 'react';
import Title from '../components/Title';
import DonationList from '../components/DonationList';
import LefthAdmin from '../components/LefthAdmin'; // Importamos el nuevo LefthAdmin
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import { getUsers } from '../api/api';

const montserrat = Montserrat({ subsets: ['latin'] });
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] });

const Bancos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fetchUser = async () => {
    try {
      const users = await getUsers();
      const currentUserEmail = window.localStorage.getItem('email');
      const currentUser = users.find((user) => user.email === currentUserEmail);
      setUser(currentUser);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={`min-h-screen bg-white flex relative ${montserrat.className}`}>
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transform transition-transform duration-300 ease-in-out bg-gradient-to-b from-[#31416d] to-[#232c48] md:w-[30%] lg:w-[15%] w-[50%] h-full fixed lg:static z-40`}
      >
        <LefthAdmin /> {/* Aquí usamos LefthAdmin en lugar de LefthDashboard */}
      </div>

      <main className="flex-1 ml-3 flex flex-col items-center">
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between mt-2">
            <div className="lg:hidden top-4 left-4 z-50">
              <button
                onClick={toggleMenu}
                className="text-white bg-[#f7e736f3] p-2 rounded-md focus:outline-none"
              >
                {isMenuOpen ? '✖' : '☰'}
              </button>
            </div>
          </div>

          <Title className="text-base">Bancos de Donaciones</Title>
          <DonationList />
        </div>
      </main>
    </div>
  );
};

export default Bancos;
