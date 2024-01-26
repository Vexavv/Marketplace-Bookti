import React, {useState} from 'react';
import styles from './Search.module.scss'
import Container from "../../../uiComponent/Container/Container";
import Button from "../../../uiComponent/Button/Button";
import {useTranslation} from "react-i18next";


const Search = () => {
    const {t} = useTranslation('home')
    const [text, setText] = useState("");

    const handleTextChange = (event:any) => {
        setText(event.target.value);
    };
    const handleSubmit = async (event:any) => {
        event.preventDefault();

    };
    return (
        <Container>
            <div className={styles.Search}>
                <form className={styles.SearchForm} onSubmit={handleSubmit}>
                    <input onChange={handleTextChange} value={text} type="text" placeholder={t('Search.placeholder')}/>
                    <Button type='submit'  name='SearchButton'>{t('Search.button')}</Button>
                </form>
                <p className={styles.SearchLabel}>{t('Search.text')}</p>

            </div>


        </Container>

    );
};

export default Search;