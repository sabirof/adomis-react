import React from 'react';
import { useTranslation } from 'react-i18next';

const InterviewDetailsPage = () => {
  const { t } = useTranslation('project');

  return (
    <div className="container mx-auto py-20 px-6">
      <div className="bg-white p-8 text-center rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl text-black font-bold mb-4">{t('interviewStudyTitle')}</h2>
        <p className="text-lg text-gray-700">{t('interviewStudyContent').replace("Qualitative Interviewstudie, die in der ersten Phase des Forschungsprojekts durchgeführt wird.", "")}</p>
      </div>
    </div>
  );
};

export default InterviewDetailsPage;
