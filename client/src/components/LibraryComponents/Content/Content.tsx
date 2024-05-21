import React, {useEffect, useState} from 'react';
import styles from './Content.module.scss'
import axios from "axios";
import {BASE_URL} from "../../../constants/api";

import ContentItem from "./ContentItem/ContentItem";


interface Data {
    // Замените типы данных на свои, соответствующие структуре вашего ответа сервера
    content:[
        { id: number,
            title: string,
            author: string,
            genre: string,
            language: string,
            description: string,
            publicationYear: string
            exchangeFormat: string,
            imageUrl: string,
        }
    ]

    // Добавьте другие поля по необходимости
}
const Content = () => {

    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Data>(`${BASE_URL}/books`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Ошибка при загрузке данных');
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const list = data?.content
    return (
        <ul>
            {list?.map((item) => (
                <ContentItem key={item.id}{...item}></ContentItem>

            ))}

        </ul>
    );
};

export default Content;