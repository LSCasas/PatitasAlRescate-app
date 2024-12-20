import React from 'react';
import { Montserrat } from 'next/font/google'; 
const montserrat = Montserrat({ subsets: ['latin'] });

const Title = ({ children }) => {
  return (
    <h1 
      className={`text-3xl font-bold text-left mb-2 mt-4 ml-3 ${montserrat.className}`} 
      style={{ color: '#ECC605' }}
    >
      {children}
    </h1>
  );
};

export default Title;
