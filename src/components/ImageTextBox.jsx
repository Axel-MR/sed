import React from 'react';
import Image from 'next/image';
import Button from './Button';

const ImageTextBox = ({ imageSrc, alt, title, description, buttonLink }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg w-full mx-auto mt-10 flex flex-col items-center group min-h-[400px] bg-white dark:bg-gray-800">
      <div className="w-full h-48 relative overflow-hidden">
        <Image
          src={`/images/${imageSrc}`}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
          priority
        />
      </div>
      <div className="w-full p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">{title}</h2>
        <p className="text-center mt-2 flex-grow text-gray-600 dark:text-gray-400">{description}</p>
        <div className="mt-4 flex justify-center">
          <Button text="Obtener servicio" link={buttonLink} />
        </div>
      </div>
    </div>
  );
};

export default ImageTextBox;

