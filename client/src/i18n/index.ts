import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {LOCALS} from "./constants";
import headerUk from './locales/uk/header.json'
import headerEn from './locales/en/header.json'


const resources = {
    [LOCALS.UK]: {
        header: headerUk,

    },
    [LOCALS.EN]: {
        header: headerEn,
    }
};


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "uk",
        debug: true,
    });

export default i18n;