import React from 'react';
import { useForm } from 'react-hook-form';

const FormDonation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

              <button 
                type="submit" 
                className="md:w-[30vh] w-full py-3 text-lg bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition"
              >
                Donar
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FormDonation;





