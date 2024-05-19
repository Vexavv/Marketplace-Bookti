import React, {useState} from 'react';
import styles from './LibrarySearch.module.scss'
import {useTranslation} from "react-i18next";
import Button from "../../../uiComponent/Button/Button";
const LibrarySearch = () => {
    const {t} = useTranslation('library')
    const [search, setSearch] = useState('')
    const handleSearchChange = (event:any) => {
        setSearch(event.target.value);
    };
    const handleSubmit = async (event:any) => {
        event.preventDefault();

    };
    return (
        <div className={styles.Search}>
            <img className={styles.SearchImage} src="/library/layers.svg" alt="img"/>
            <form className={styles.SearchForm} onSubmit={handleSubmit}>
                <input className={styles.SearchFormInput} onChange={handleSearchChange}  type='text'
                       value={search} placeholder={t('Placeholder')}/>
                <Button  type='submit'>click</Button>
            </form>
        </div>
    );
};

export default LibrarySearch;