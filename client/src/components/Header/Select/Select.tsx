import React,{useState} from 'react';
import styles from './Select.module.scss'
import i18next from "i18next";
import {LOCALS} from "../../../i18n/constants";
import {useTranslation} from "react-i18next";

const Select = () => {
    const [selectValue, setSelectValue] = useState(() => {
        const storageValue = localStorage.getItem('language') || 'uk';
        return storageValue;
    });

    const onClickLanguageChange = (e: any) => {
        let language = e.target.value;
        i18next.changeLanguage(language);
        setSelectValue(language);
        localStorage.setItem('language', language);
        e.target.blur();
    }
    const {t} = useTranslation('header')


    return (

        <select className={styles.Select} name="select" value={selectValue} onChange={onClickLanguageChange}>
            <option value="uk" disabled={i18next.language === LOCALS.UK}>{t('Select.uk')}</option>
            <option value="en" disabled={i18next.language === LOCALS.EN}>{t('Select.en')}</option>
        </select>
    );
};

export default Select;

//
// import React, { useState } from 'react';
// import styles from './Select.module.scss';
//
// interface Option {
//     value: string;
//     label: string;
//     flag: string;
// }
//
// interface SelectProps {
//     options: Option[];
// }
//
// const Select: React.FC<SelectProps> = ({ options }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState<Option | null>(null);
//
//     const toggleSelect = () => {
//         setIsOpen(!isOpen);
//     };
//
//     const handleOptionClick = (option: Option) => {
//         setSelectedOption(option);
//         setIsOpen(false);
//     };
//
//     return (
//         <div className={`${styles.selectContainer} ${isOpen ? styles.open : ''}`}>
//             <div className={styles.select} onClick={toggleSelect}>
//                 {selectedOption ? (
//                     <>
//                         <img src={selectedOption.flag} alt={selectedOption.label} />
//                         {selectedOption.label}
//                     </>
//                 ) : (
//                     'Выберите опцию'
//                 )}
//             </div>
//             <div className={styles.optionContainer}>
//                 {options.map((option) => (
//                     <div
//                         key={option.value}
//                         className={styles.option}
//                         onClick={() => handleOptionClick(option)}
//                     >
//                         <img src={option.flag} alt={option.label} />
//                         {option.label}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Select;
