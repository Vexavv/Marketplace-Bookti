import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALS } from './constants';
import headerUk from './locales/uk/header.json';
import headerEn from './locales/en/header.json';
import mobileMenuUk from './locales/uk/mobileMenu.json';
import mobileMenuEN from './locales/en/mobileMenu.json';
import footerUk from './locales/uk/footer.json';
import footerEn from './locales/en/footer.json';
import homeUk from './locales/uk/home.json';
import homeEn from './locales/en/home.json';
import loginUk from './locales/uk/login.json';
import loginEn from './locales/en/login.json';
import modalUK from './locales/uk/modal.json';
import modalEn from './locales/en/modal.json';
import bookshelfUk from './locales/uk/bookshelf.json';
import bookshelfEn from './locales/en/bookshelf.json';
import addBookUk from './locales/uk/add-book.json';
import addBookEn from './locales/en/add-book.json';
import profileUk from './locales/uk/profile.json';
import profileEn from './locales/en/profile.json';
import separatePageUk from './locales/uk/separatePage.json'
import separatePageEn from './locales/en/separatePage.json'

const resources = {
    [LOCALS.UK]: {
        header: headerUk,
        mobileMenu: mobileMenuUk,
        footer: footerUk,
        home: homeUk,
        login: loginUk,
        modal: modalUK,
        bookshelf: bookshelfUk,
        addBook: addBookUk,
        profile: profileUk,
        separatePage:separatePageUk,
    },
    [LOCALS.EN]: {
        header: headerEn,
        mobileMenu: mobileMenuEN,
        footer: footerEn,
        home: homeEn,
        login: loginEn,
        modal: modalEn,
        bookshelf: bookshelfEn,
        addBook: addBookEn,
        profile: profileEn,
        separatePage:separatePageEn,
    },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
    resources,
    fallbackLng: LOCALS.UK,
    debug: true,
});

export default i18n;
