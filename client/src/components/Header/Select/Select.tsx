import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import i18next from 'i18next';
import {LOCALS} from '../../../i18n/constants';
import {useTranslation} from 'react-i18next';
import {useEffect, useState} from "react";
import {Avatar, Box} from "@mui/material";
import {Options} from './Select.props'


export default function ControlledOpenSelect() {
    const [selectValue, setSelectValue] = useState(() => {
        const storageValue = localStorage.getItem('language') || 'uk';
        return storageValue;
    });
    const [open, setOpen] = useState(false);


    const handleChange = (event: SelectChangeEvent<typeof selectValue>) => {
        const language = event.target.value;
        i18next.changeLanguage(language);
        localStorage.setItem('language', language);
    }
    const handleSelectToggle = () => {
        setOpen(current => !current);
    };

    const {t} = useTranslation('header');

    useEffect(() => {
        const handleLanguageChange = (newLanguage: string) => {
            setSelectValue(newLanguage);
        };

        i18next.on('languageChanged', handleLanguageChange);

        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const options: Options[] = [
        {id: 1, value: "uk", name: t('Select.uk'), disabled: LOCALS.UK},
        {id: 2, value: "en", name: t('Select.en'), disabled: LOCALS.EN},
    ]

    return (
        <Box sx={{display: 'flex', alignItems: 'center', height: '20px'}}>
            <FormControl sx={{mt:'4px', minWidth: 120,display: 'flex',flexDirection: 'row',alignItems: 'center' }} size="small" variant="outlined">
                {i18next.language === LOCALS.EN ?
                    <Avatar sx={{width: 19, height: 13, borderRadius: '3px'}} alt="Flag-en" src="/select/flag-en.svg"
                            variant="square"/> :
                    <Avatar sx={{width: 19, height: 13, borderRadius: '3px'}} alt="Flag-uk" src="/select/flag-ukraine.svg"
                            variant="square"/>}
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleSelectToggle}
                    onOpen={handleSelectToggle}
                    value={selectValue}
                    onChange={handleChange}
                    sx={{
                        fontSize: '16px', boxShadow: "none", fontFamily: 'Inter, serif',
                        ".MuiOutlinedInput-notchedOutline": {border: 0},
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                                border: 0,
                            },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                                border: 0,
                            },
                    }}
                >{options.map(item => (
                    <MenuItem value={item.value} key={item.id} disabled={i18next.language === item.disabled} sx={{
                        fontSize: '16px',
                        fontFamily: 'Inter, serif',
                        marginBottom: '5px',
                        borderRadius: '5px',
                        '&:hover': {background: '#447B57', color: '#fff'}
                    }}>{item.name}</MenuItem>
                ))}

                </Select>
            </FormControl>
        </Box>
    );
}









// import React, {useEffect, useState} from 'react';
// import styles from './Select.module.scss'
// import i18next from "i18next";
// import {LOCALS} from "../../../i18n/constants";
// import {useTranslation} from "react-i18next";
//
//
// const Select = () => {
//
//     const [selectValue, setSelectValue] = useState(() => {
//         const storageValue = localStorage.getItem('language') || 'uk';
//         return storageValue;
//     });
//
//     const {t} = useTranslation('header');
//
//     useEffect(() => {
//         const handleLanguageChange = (newLanguage: string) => {
//             setSelectValue(newLanguage);
//         };
//
//         i18next.on('languageChanged', handleLanguageChange);
//
//         return () => {
//             i18next.off('languageChanged', handleLanguageChange);
//         };
//     }, []);
//
//     const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         const language = e.target.value;
//         i18next.changeLanguage(language);
//         localStorage.setItem('language', language);
//         // e.target.blur();
//     };
//
//
//     return (
//         <div className={styles.Wrapper}>
//             {i18next.language === LOCALS.EN ? <img src="/select/flag-en.svg" alt="Flag-en"/> :
//                 <img src="/select/flag-ukraine.svg" alt="Flag-uk"/>}
//             <select className={styles.WrapperSelect} name="select" value={selectValue} onChange={handleChangeLanguage}>
//                 <option value="uk" disabled={i18next.language === LOCALS.UK}>{t('Select.uk')}</option>
//                 <option value="en" disabled={i18next.language === LOCALS.EN}>{t('Select.en')}</option>
//             </select>
//
//         </div>
//
//     );
// };
//
// export default Select;




