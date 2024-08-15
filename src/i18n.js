// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Import your translation files directly
import commonEN from './locales/en/common.json';
import contactEN from './locales/en/contact.json';
import aboutEN from './locales/en/about.json';
import newsletterEN from './locales/en/newsletter.json';
import privacyPolicyEN from './locales/en/privacyPolicy.json';
import projectEN from './locales/en/project.json';
import visionEN from './locales/en/vision.json';

import commonDE from './locales/de/common.json';
import contactDE from './locales/de/contact.json';
import aboutDE from './locales/de/about.json';
import newsletterDE from './locales/de/newsletter.json';
import privacyPolicyDE from './locales/de/privacyPolicy.json';
import projectDE from './locales/de/project.json';
import visionDE from './locales/de/vision.json';

const resources = {
  en: {
    common: commonEN,
    contact: contactEN,
    about: aboutEN,
    newsletter: newsletterEN,
    privacyPolicy: privacyPolicyEN,
    project: projectEN,
    vision: visionEN,
  },
  de: {
    common: commonDE,
    contact: contactDE,
    about: aboutDE,
    newsletter: newsletterDE,
    privacyPolicy: privacyPolicyDE,
    project: projectDE,
    vision: visionDE,
  },
};

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: 'de',
    debug: true,
    resources,
    ns: ['common', 'contact', 'about', 'newsletter', 'privacyPolicy', 'project', 'vision'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
