import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createDonation } from '../api/api';  // Asegúrate de importar la función createDonation
import { useRouter } from 'next/router';  // Usamos el router para redirigir a la página

const FormDonation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });
  const router = useRouter();  // Para redirigir a /bancos cuando la donación sea exitosa

  // ID del usuario fijo para todas las donaciones
  const userId = '672ad755e1ddb48f0fd577f5';  // El ID que se va a asociar con todas las donaciones

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage(''); // Limpiar mensaje de error previo

    // Preparar los datos para enviar al servidor
    const donationData = {
      food: data.alimento,
      quantity: parseInt(data.cantidad, 10),
      type: data.tipo,
      expirationDate: data.caducidad,
      donorName: data.donante,
      donorContact: data.contacto,
      deliveryAddress: data.direccion,
      user: userId,  // Usar el userId fijo
    };

    try {
      // Aquí llamamos a la función createDonation para hacer la solicitud
      const donation = await createDonation(donationData);
      console.log('Donación realizada con éxito:', donation);
      
      // Si la donación es exitosa, mostramos el mensaje de éxito
      setNotification({ message: 'La donación se registró con éxito', type: 'success' });

      // Redirigimos a la página de bancos después de un breve tiempo
      setTimeout(() => {
        router.push('/bancos');
      }, 2000);
    } catch (error) {
      setErrorMessage('Error al registrar la donación: ' + error.message);
      console.error('Error al hacer la donación:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-[80vh] w-full flex md:mt-5 mt-0">
      <div className="flex h-full w-full">
        <main className="w-full flex-1 bg-white p-10">
          <div className="sticky top-0 bg-white z-10">
            <h1 className="text-3xl text-yellow-500 mb-8">Agregar donación</h1>
          </div>

          <div className="overflow-y-auto h-[calc(80vh-4rem)]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="alimento" className="block text-lg mb-2 text-gray-800">Alimento a donar</label>
                <input
                  type="text"
                  id="alimento"
                  {...register('alimento', { required: true })}
                  className="w-full md:p-2 p-1 border border-gray-300 rounded-md text-gray-800"
                />
                {errors.alimento && <span className="text-red-500">Este campo es requerido</span>}
              </div>

              <div>
                <label htmlFor="cantidad" className="block text-lg mb-2 text-gray-800">Cantidad</label>
                <input
                  type="number"
                  id="cantidad"
                  {...register('cantidad', { required: true, min: 1 })}
                  className="w-full md:p-2 p-1 border border-gray-300 rounded-md text-gray-800"
                />
                {errors.cantidad && <span className="text-red-500">Ingrese una cantidad válida</span>}
              </div>

              <div>
                <label htmlFor="tipo" className="block text-lg mb-2 text-gray-800">Tipo de alimento</label>
                <input
                  type="text"
                  id="tipo"
                  {...register('tipo', { required: true })}
                  placeholder="perros, gatos, etc."
                  className="w-full md:p-2 p-1 border border-gray-300 rounded-md text-gray-800"
                />
                {errors.tipo && <span className="text-red-500">Este campo es requerido</span>}
              </div>

              <div>
                <label htmlFor="caducidad" className="block text-lg mb-2 text-gray-800">Fecha de caducidad del alimento</label>
                <input
                  type="date"
                  id="caducidad"
                  {...register('caducidad', { required: true })}
                  className="w-full md:p-2 p-1 border border-gray-300 rounded-md text-gray-800"
                />
                {errors.caducidad && <span className="text-red-500">Este campo es requerido</span>}
              </div>

              <div>
                <label htmlFor="donante" className="block text-lg mb-2 text-gray-800">Nombre del donante</label>
                <input
                  type="text"
                  id="donante"
                  {...register('donante', { required: true })}
                  className="w-full md:p-2 p-1 border border-gray-300 rounded-md text-gray-800"
                />
                {errors.donante && <span className="text-red-500">Este campo es requerido</span>}
              </div>

              <div>
                <label htmlFor="contacto" className="block text-lg mb-2 text-gray-800">Contacto del donante</label>
                <input
                  type="text"
                  id="contacto"
                  {...register('contacto', { required: true })}
                  className="w-full md:p-2 p-1 border border-gray-300 rounded-md text-gray-800"
                />
                {errors.contacto && <span className="text-red-500">Este campo es requerido</span>}
              </div>

              <div>
                <label htmlFor="direccion" className="block text-lg mb-2 text-gray-800">Dirección de entrega</label>
                <input
                  type="text"
                  id="direccion"
                  {...register('direccion', { required: true })}
                  className="w-full md:p-2 p-1 border border-gray-300 rounded-md text-gray-800"
                />
                {errors.direccion && <span className="text-red-500">Este campo es requerido</span>}
              </div>

              {errorMessage && <div className="text-red-500">{errorMessage}</div>}

              <button
                type="submit"
                className="md:w-[30vh] w-full py-3 text-lg bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Donar'}
              </button>
            </form>

            {notification.message && (
              <div className={`p-2 mt-4 text-white rounded ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                {notification.message}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FormDonation;







