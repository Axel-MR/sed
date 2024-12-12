import React from 'react';
import Image from 'next/image';
import Logo from '../../images/servitoken_logo.png';

const Registro = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background dark:bg-white-900">
      <div className="max-w-md w-full p-8 bg-[#4b5778] text-white rounded-lg shadow-lg">
        <form className="space-y-4">
          <div className="flex justify-center mb-6">
            <Image
                   src={Logo}
                   alt="Logo"
                   width={50} // Ajusta el ancho según tus necesidades
                   height={50} // Ajusta la altura según tus necesidades
                 />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            Registro de Usuario
          </h2>

          <div>
            <label htmlFor="username" className="block font-semibold mb-1 text-white">
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-1 text-white">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold mb-1 text-white">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block font-semibold mb-1 text-white">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;