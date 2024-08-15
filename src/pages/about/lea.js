import React from 'react';
import { useTranslation } from 'react-i18next';

const Lea = () => {
  const { t } = useTranslation('about');

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-4xl text-center font-bold mb-12">{t('teamMembers.leaLuttenberger.name')}</h2>
      <div className="flex flex-col items-center px-4">
        <img
          src="/images/lea.jpg"
          alt={t('teamMembers.lea')}
          width={200}
          height={200}
          className="rounded-full mb-8"
        />
        <div className="max-w-2xl">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t('teamMembers.leaLuttenberger.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lea;
