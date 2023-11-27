import React, {useState} from 'react';
import styles from './Search.module.scss'
import Container from "../Container/Container";
import Button from "../Button/Button";
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
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Назва книги або автора"/>
                    {/*<label>Наприклад: Ремарк, Гаррі Поттер</label>*/}
                    <Button type='submit'  name='SearchButton'>Знайти</Button>
                </form>
                <p className={styles.SearchLabel}>Наприклад: Ремарк, Гаррі Поттер</p>

            </div>


        </Container>

    );
};

export default Search;