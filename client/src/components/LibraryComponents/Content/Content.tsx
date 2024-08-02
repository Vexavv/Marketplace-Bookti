import styles from './Content.module.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { BASE_URL } from '../../../constants/api';

import ContentItem from './ContentItem/ContentItem';

interface Data {
    content: [
        {
            id: number;
            title: string;
            author: string;
            genre: string;
            language: string;
            description: string;
            publicationYear: string;
            exchangeFormat: string;
            imageUrl: string;
        }
    ];

    // Добавьте другие поля по необходимости
}

interface Props {
    selectedCategory: { name: string; id: number };
    filter: string;
}

const Content: React.FC<Props> = ({ selectedCategory, filter }) => {
    const { t } = useTranslation('addBook');
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
        .filter(book => {
            const currGenre = t('form.fild-genre.values', {
                lng: 'en',
                returnObjects: true,
            })[selectedCategory.id];

            return book.genre === currGenre?.toLocaleLowerCase();
        })
        .filter(book => book.title.includes(filter) || !filter);

    return (
        <div>
            <ul className={styles.List}>
                {list?.map(item => (
                    <ContentItem key={item.id} {...item}></ContentItem>
                ))}
            </ul>
        </div>
    );
};

export default Content;
