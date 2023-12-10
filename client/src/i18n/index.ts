import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {LOCALS} from "./constants";
import headerUk from './locales/uk/header.json';
import headerEn from './locales/en/header.json';
import mobileMenuUk from './locales/uk/mobileMenu.json';
import mobileMenuEN from './locales/en/mobileMenu.json';
import footerUk from './locales/uk/footer.json';
import footerEn from './locales/en/footer.json';
import homeUk from './locales/uk/home.json';
import homeEn from './locales/en/home.json';
import loginUk from './locales/uk/login.json'
import loginEn from './locales/en/login.json'

const resources = {
    [LOCALS.UK]: {
        header: headerUk,
        mobileMenu: mobileMenuUk,
        footer:footerUk,
        home:homeUk,
        login:loginUk

    },
    [LOCALS.EN]: {
        header: headerEn,
        mobileMenu: mobileMenuEN,
        footer: footerEn,
        home: homeEn,
        login:loginEn
    }
};


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: LOCALS.UK,
        debug: true,
    });

export default i18n;