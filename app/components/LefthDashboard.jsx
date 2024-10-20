/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuItem = ({ icon, title, onClick, selected }) => (
  <div
    className={`flex items-center justify-start mt-2 cursor-pointer p-2 w-full transition-all duration-300 ease-in-out rounded-md 
      ${selected ? 'bg-white text-black' : 'hover:bg-[#2D2F39] text-[#f2f6fc]'}`}
    onClick={onClick}
  >
    <img src={icon} alt={title} />
    <p className='font-medium text-sm ml-10'>{title}</p>
  </div>
)

export default function LefthDashboard() {
  const router = useRouter()

  const handleSignOut = () => {
    window.localStorage.removeItem('token')
    router.push('/inicioSesion')
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <main className='h-screen p-4 text-[#f2f6fc]' style={{ background: 'linear-gradient(90deg, #F1C21B 12%, #FFDA57 76%)' }}>
      <div className='flex flex-col items-center'>
        <div className='flex h-[5rem] w-[10rem]'>
          {/* Logo actualizado */}
          <img
            className='h-[3rem] w-[5rem]'
            src='/img/logo-patitasAlRescate.png'
            alt='Logo'
          />
        </div>

        {/* Contenedor de imagen de usuario actualizado */}
        <div className='my-1 flex h-[120px] w-[100px] flex-col items-center bg-white rounded-[40px] p-4 shadow-md'>
          <img className='h-20 w-20' src='/img/dog5.png' alt='User' />
          <p className='text-sm font-bold text-black'>Name</p>
        </div>
      </div>

      <section className='mt-6 flex h-2/3 flex-col justify-between md:h-2/3 2xl:h-3/4'>
        <div className='Seccion1 mb-4'>
          {/* Solo la sección de Tickets se mantiene */}
          <Link href='/ticketsDashboard'>
            <MenuItem icon='/img/lensPerson.png' title='Bancos de alimento' selected={router.pathname === '/ticketsDashboard'} />
          </Link>
        </div>
        <div className='Seccion2 mb-5'>
          <MenuItem
            icon='/img/singOut.png'
            title='Sign Out'
            onClick={handleSignOut}
          />
        </div>
      </section>
    </main>
  )
}


