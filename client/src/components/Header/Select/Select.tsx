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

//---------------------------------------------------------------
// import React, { useState, useEffect, useRef } from "react";
// import styles from './Select.module.scss'
// import {SelectProps} from "./Select.props";
// import {Option} from "./OptionEl/OptionEl.props";
// import type { MouseEventHandler } from "react";
// import OptionEl from "./OptionEl/OptionEl";
// import { IoMdArrowDropdown } from "react-icons/io";
// import i18next from "i18next";
// import {LOCALS} from "../../../i18n/constants";
// const Select = (props: SelectProps) => {
//     const {
//         mode = "rows",
//         options,
//         placeholder,
//         status = "default",
//         selected,
//         onChange,
//         onClose
//     } = props;
//     const [isOpen, setIsOpen] = useState<boolean>(false);
//     const rootRef = useRef<HTMLDivElement>(null);
//     const placeholderRef = useRef<HTMLDivElement>(null);
//
//     useEffect(() => {
//         const handleClick = (event: MouseEvent) => {
//             const { target } = event;
//             if (target instanceof Node && !rootRef.current?.contains(target)) {
//                 isOpen && onClose?.();
//                 setIsOpen(false);
//             }
//         };
//
//         window.addEventListener("click", handleClick);
//
//         return () => {
//             window.removeEventListener("click", handleClick);
//         };
//     }, [onClose]);
//
//     useEffect(() => {
//         const placeholderEl = placeholderRef.current;
//         if (!placeholderEl) return;
//
//         const handleEnterKeyDown = (event: KeyboardEvent) => {
//             if (event.key === "Enter") {
//                 setIsOpen((prev) => !prev);
//             }
//         };
//         placeholderEl.addEventListener("keydown", handleEnterKeyDown);
//
//         return () => {
//             placeholderEl.removeEventListener("keydown", handleEnterKeyDown);
//         };
//     }, []);
//
//     const handleOptionClick = (value: Option["value"]) => {
//         setIsOpen(false);
//         onChange?.(value);
//     };
//     const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
//         setIsOpen((prev) => !prev);
//     };
//
//     return (
//         <div
//             className={styles.Wrapper}
//             ref={rootRef}
//             data-is-active={isOpen}
//             data-mode={mode}
//             data-testid="selectWrapper"
//         >
//
//                 {i18next.language === LOCALS.EN ? <img className={styles.WrapperFlag} src="/select/flag-en.svg" alt="Flag-en"/> :
//                     <img className={styles.WrapperFlag} src="/select/flag-ukraine.svg" alt="Flag-uk"/>}
//
//
//             <div
//                 className={styles.placeholder}
//                 data-status={status}
//                 data-selected={!!selected?.value}
//                 onClick={handlePlaceHolderClick}
//                 role="button"
//                 tabIndex={0}
//                 ref={placeholderRef}
//              >
//                 {selected?.title || placeholder}
//              </div>
//             <div className={styles.WrapperArrow}>
//                 <IoMdArrowDropdown />
//             </div>
//             {isOpen && (
//                 <ul className={styles.WrapperSelect} data-testid="selectDropdown">
//                     {options.map((option) => (
//                         <OptionEl
//                             key={option.value}
//                             option={option}
//                             onClick={handleOptionClick}
//                         />
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };
//
// export default Select;
//


//-------------------------------------------------------------


//
// import React, {useEffect, useState} from 'react';
// import i18next from 'i18next';
// import {LOCALS} from '../../../i18n/constants';
// import {useTranslation} from 'react-i18next';
// import {
//     Select as BaseSelect,
//     SelectProps,
//     SelectRootSlotProps,
// } from '@mui/base/Select';
// import {Option as BaseOption, optionClasses} from '@mui/base/Option';
// import {Popper as BasePopper} from '@mui/base/Popper';
// import {styled} from '@mui/system';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//
//
//
// export default function UnstyledSelectIntroduction() {
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
//
//     const handleChangeLanguage = (
//         event: React.ChangeEvent<{ value: unknown }> | React.SyntheticEvent | null
//     ) => {
//         if (event && 'target' in event) {
//             const language = String((event as React.ChangeEvent<{ value: unknown }>).target.value);
//             console.log('Changing language to:', language);
//             i18next.changeLanguage(language);
//             localStorage.setItem('language', language);
//         }
//     };
//
//     return (
//         <>
//             {i18next.language === LOCALS.EN ? <img src="/select/flag-en.svg" alt="Flag-en"/> :
//                 <img src="/select/flag-ukraine.svg" alt="Flag-uk"/>}
//             <Select
//                 name="select"
//                 value={selectValue}
//                 onChange={handleChangeLanguage}
//             >
//                 <Option
//                     value="uk"
//                     // disabled={i18next.language === LOCALS.UK}
//                 >
//                     {t('Select.uk')}
//                 </Option>
//                 <Option
//                     value="en"
//                     // disabled={i18next.language === LOCALS.EN}
//                 >
//                     {t('Select.en')}
//                 </Option>
//             </Select>
//         </>
//     );
// }
//
// const Select = React.forwardRef(function CustomSelect<
//     TValue extends {},
//     Multiple extends boolean,
// >(props: SelectProps<TValue, Multiple>, ref: React.ForwardedRef<HTMLButtonElement>) {
//     const slots = {
//         root: StyledButton,
//         listbox: Listbox,
//         popper: Popper,
//         ...props.slots,
//     };
//
//     return <BaseSelect {...props} ref={ref} slots={slots}/>;
// });
//
// const Button = React.forwardRef(function Button<
//     TValue extends {},
//     Multiple extends boolean,
// >(
//     props: SelectRootSlotProps<TValue, Multiple>,
//     ref: React.ForwardedRef<HTMLButtonElement>,
// ) {
//     const {ownerState, ...other} = props;
//     return (
//         <button type="button" {...other} ref={ref}>
//             {other.children}
//             <ArrowDropDownIcon/>
//         </button>
//     );
// });
//
// const StyledButton = styled(Button, {shouldForwardProp: () => true})(
//     () => `
//    font-family: Inter, serif;
//   font-size: 16px;
//   box-sizing: border-box;
//   min-width: 150px;
//   padding: 8px 12px;
//   border: none;
//   text-align: left;
//   line-height: 1.5;
//   background: #fff;
//   color: black;
//   position: relative;
//   cursor:pointer;
//
//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 120ms;
//
//   & > svg {
//     font-size: 1rem;
//     position: absolute;
//     height: 100%;
//     top: 0;
//     right: 30px;
//   }
//   `,
// );
//
// const Listbox = styled('ul')(
//     () => `
//   font-family: Inter, serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   padding: 6px;
//   margin: 12px 0;
//   min-width: 150px;
//   border-radius: 12px;
//   overflow: auto;
//   outline: 0px;
//   background: #fff;
//   box-sizing: border-box;
//   color: black;
//   box-shadow: 0px 2px 4px rgba(0,0,0, 0.05);
//   border:1px solid #447B57;
//   `,
// );
//
// const Option = styled(BaseOption)(
//     () => `
//   list-style: none;
//   padding:8px;
//   border-radius: 8px;
//   cursor: pointer;
// margin-bottom: 5px;
//
//   &:last-of-type {
//     border-bottom: none;
//   }
//   &.${optionClasses.highlighted}.${optionClasses.selected} {
//     background-color: #99CCF3;
//
//   }
//
//   &.${optionClasses.disabled} {
//     color: #B0B8C4;
//   }
//
//   &:hover:not(.${optionClasses.disabled}) {
//     background-color: #F3F6F9;
//   }
//   `,
// );
//
// const Popper = styled(BasePopper)`
//   z-index: 10;
// `;

//--------------------------------------------------------------

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent, SelectProps} from '@mui/material/Select';
import i18next from 'i18next';
import {LOCALS} from '../../../i18n/constants';
import {useTranslation} from 'react-i18next';
import {useEffect} from "react";
import {Box} from "@mui/material";
import {styled} from '@mui/material/styles';
import  useOutlineSelectStyles  from './Ouyline';


export default function ControlledOpenSelect() {
    const [selectValue, setSelectValue] = React.useState(() => {
        const storageValue = localStorage.getItem('language') || 'uk';
        return storageValue;
    });
    const [open, setOpen] = React.useState(false);


    const handleChange = (event: SelectChangeEvent<typeof selectValue>) => {
        const language = event.target.value;
        i18next.changeLanguage(language);
        localStorage.setItem('language', language);
        // setSelectValue(event.target.value);

    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
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


    return (
        <Box sx={{display: 'flex'}}>
            {i18next.language === LOCALS.EN ? <img src="/select/flag-en.svg" alt="Flag-en"/> :
                <img src="/select/flag-ukraine.svg" alt="Flag-uk"/>}
            <FormControl sx={{m: 1, minWidth: 120,}} size="small" variant="outlined">
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={selectValue}
                    onChange={handleChange}
                    sx={{ boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                                border: 0,
                            },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                                border: 0,
                            },}}
                >
                    <MenuItem sx={{'&:hover':{background:"red"}}} value='uk'>{t('Select.uk')}</MenuItem>
                    <MenuItem value='en'>{t('Select.en')}</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}


