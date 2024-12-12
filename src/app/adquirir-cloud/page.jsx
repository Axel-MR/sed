"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TokenPlateadoIcon from "../../images/token_plateado.png";
import TokenDoradoIcon from "../../images/token_dorado.png";
import ServiNubeImage from "../../images/servicio_nube.png";
import Header from "../../components/Header"
const AdquirirCloud = () => {
  const [selectedTokens, setSelectedTokens] = useState({
    plateado: false,
    dorado: false,
  });

  const handleCheckboxChange = (tokenType) => {
    setSelectedTokens((prevState) => ({
      ...prevState,
      [tokenType]: !prevState[tokenType],
    }));
  };

  return (
    <div>
      <Header />
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-lg">
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src={ServiNubeImage}
            alt="Servicio Nube"
            className="rounded-lg"
            layout="responsive"
            width={400}
            height={300}
          />
        </div>

        {/* Separador horizontal en escritorio */}
        <div className="md:block hidden w-px bg-gray-300 h-full mx-4"></div>

        {/* Texto a la derecha */}
        <div className="w-full md:w-1/ text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Adquiere ServiNube
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Adquiere un mes de almacenamiento en la nube por 10 servitokens.
          </p>

          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            {/* Token Plateado */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="plateado"
                checked={selectedTokens.plateado}
                onChange={() => handleCheckboxChange("plateado")}
                className="mr-2"
              />
              <Image
                src={TokenPlateadoIcon}
                alt="Token Plateado"
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="text-lg font-semibold text-gray-700">50 Plateados</span>
            </div>

            {/* Token Dorado */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="dorado"
                checked={selectedTokens.dorado}
                onChange={() => handleCheckboxChange("dorado")}
                className="mr-2"
              />
              <Image
                src={TokenDoradoIcon}
                alt="Token Dorado"
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="text-lg font-semibold text-gray-700">30 Dorados</span>
            </div>
          </div>

          <Link
            href="/cloud"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300"
          >
            COMPRA AHORA
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdquirirCloud;
