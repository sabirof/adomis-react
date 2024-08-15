import React from 'react';
import { useTranslation } from 'react-i18next';

const Selin = () => {
  const { t } = useTranslation('about');

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl text-center font-bold mb-12">{t('teamMembers.selinAkgoz.name')}</h2>
      <div className="flex flex-col items-center">
        <img
          src="/images/selin.jpg"
          alt={t('teamMembers.selin')}
          width={200}
          height={200}
          className="rounded-full mb-8"
        />
        <p className="text-lg text-gray-700 max-w-2xl text-center">
          {t('teamMembers.selinAkgoz.description')}
        </p>
      </div>
    </div>
  );
};

export default Selin;
