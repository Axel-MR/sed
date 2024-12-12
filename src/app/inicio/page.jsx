import React from 'react';
import Image from 'next/image';
import ImageTextBox from '../../components/ImageTextBox';
import Head from 'next/head';
import Header from '@/components/Header';

const cardData = [
  {
    imageSrc: 'servicio_nube.png',
    alt: 'Almacenamiento en la nube',
    title: 'Almacenamiento en la nube',
    description: 'Con este servicio podrás obtener un almacenamiento en la nube de 1TB por un periodo definido de tiempo según el plan que selecciones.',
    buttonLink: 'adquirir-cloud',
  },
  {
    imageSrc: 'servicio_notificaciones.png',
    alt: 'Notificaciones personalizadas',
    title: 'Notificaciones',
    description: 'Con este servicio podrás obtener un sistema de notificaciones personalizadas para no olvidarte de ningún evento importante.',
    buttonLink: 'adquirir-notification',
  },
  {
    imageSrc: 'servicio_ia.png',
    alt: 'ServiBot: Chatbot de IA',
    title: 'ServiBot',
    description: 'Con este servicio podrás dialogar con una IA donde cada prompt gastará X créditos.',
    buttonLink: 'adquirir-servibot',
  },
];



const Landingpage = () => {
  return (
   <div>
    <Header />
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <ImageTextBox
              key={card.title}
              imageSrc={card.imageSrc}
              alt={card.alt}
              title={card.title}
              description={card.description}
              buttonLink={card.buttonLink}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Landingpage;

