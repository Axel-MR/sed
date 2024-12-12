import React from 'react';
import Link from 'next/link';

const Button = ({ text, link }) => {
  return (
    <Link href={link}>
      <button
        className="bg-blue-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;