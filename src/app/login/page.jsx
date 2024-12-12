import React from 'react';
import Image from 'next/image';
import Logo from '../../images/servitoken_logo.png';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background dark:bg-white-900">
      <div className="max-w-md w-full p-8 bg-[#4b5778] text-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
        <Image
        src={Logo}
        alt="Logo"
        width={50} // Ajusta el ancho según tus necesidades
        height={50} // Ajusta la altura según tus necesidades
      />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Iniciar Sesión
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block">Correo electrónico</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 mt-2 bg-gray-100 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-gray-900"
            />
          </div>
          <div>
            <label className="block">Contraseña</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 mt-2 bg-gray-100 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-gray-900"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;