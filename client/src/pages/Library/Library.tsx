import React, {useEffect, useState} from 'react';
import styles from './Library.module.scss'

import {BASE_URL} from "../../constants/api";
import axios from 'axios';
import {Link} from "react-router-dom";


interface Data {
    // Замените типы данных на свои, соответствующие структуре вашего ответа сервера
    content:[
        { id: string,
            title: string,
            author: string,
            genre: string,
            language: string,
            description: string,
            publication_date: string
            trade_format: string,
            image_url: string,
            user_id: string
        }
    ]

    // Добавьте другие поля по необходимости
}
const Library = () => {
    const [data, setData] = useState<Data | null>(null);
    // const [book, setBook] = useState()
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
        <div>
            {list?.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>

                    <Link to={`/separatePage/${item.id}`}><button>click</button></Link>
                </div>
            ))}
        </div>
    );
};

export default Library;