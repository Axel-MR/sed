import React from 'react';
import Image from 'next/image';
import tokenPlata from '../images/token_plateado.png';
import tokenOro from '../images/token_dorado.png';

const TokenDisplay = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <Image src={tokenPlata} alt="Token Plata" width={24} height={24} />
        <span>50</span>
      </div>
      <div className="flex items-center">
        <Image src={tokenOro} alt="Token Oro" width={24} height={24} />
        <span>50</span>
      </div>
    </div>
  );
};

export default TokenDisplay;