// src/components/layout/index.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer';
import Navbar from '../Navbar'; // Ensure these paths are correct

const Layout = ({ children }) => {
  const { t } = useTranslation('common');
  
  return (
    <>
      <Navbar />
      <main className='container p-8'>{children}</main>
      <div className="flex items-center justify-start py-4">
        <div className="flex items-center">
          <p className="ml-4">{t('fundedBy')}</p>
          <img src="/images/bua-logo.png" alt="Berlin University Alliance" width={150} height={150} className="object-contain" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
