import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/servitoken_logo.png'; // Adjust the path if needed
import TokenDisplay from '../components/TokenDisplay'; // Assuming this component is adapted for Next.js

const Header = () => {
  return (
    <header className="bg-[#4b5778] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={Logo} alt="Logo" width={32} height={32} />
          <h1 className="text-xl font-bold">ServiToken</h1>
        </div>

        <nav className="space-x-6 flex items-center">
          <div className="flex items-center space-x-2">
            <TokenDisplay />
            <Link href="/inicio">
              Inicio  {/* Wrap the text directly without an `a` tag */}
            </Link>
          </div>

          <Link href="/registro">
            Registro
          </Link>
          <Link href="/login">
            Iniciar Sesión
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;