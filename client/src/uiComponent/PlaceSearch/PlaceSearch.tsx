import React, {useEffect, useState} from 'react';
import styles from './PlaceSearch.module.scss'
import {FieldProps, FieldMetaProps} from 'formik';
import axios from "axios";

interface PlaceSearchProps extends FieldProps {
    className?: string;
}

const PlaceSearch: React.FC<PlaceSearchProps> = ({className, field, form, ...props}) => {
    const [valueCity, setValueCity] = useState(field.value || '')
    const [countries, setCountries] = useState<any>([])


    //------------------------ REQUEST-------------------------------

    const fetchCountries = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Замените на правильный URL для получения списка стран
            setCountries(response.data); // Предположим, что setCountries - это функция установки состояния
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };
    useEffect(() => {
        fetchCountries()
    }, []);
    //---------------------------------Filtered Function--------------------
    const filteredCity = countries.filter((city: any) => (
        city.title.toLowerCase().includes(valueCity.toLowerCase())
    ))


    console.log(valueCity)
    console.log(countries)
    const {onChange, onBlur, value, name} = field;


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValueCity(newValue);
        onChange(event);
    };
    return (
        <>
            <input
                className={` ${className || ''}`}
                type="text"
                onChange={handleInputChange}
                value={valueCity}
                name={name}
                onBlur={onBlur}
                {...props}  />
            <ul className={styles.Gog}>
                {filteredCity.map(
                    (city: any) => (
                        <li key={city.id}>{city.title}</li>
                    )
                )}
            </ul>
        </>

    );
};

export default PlaceSearch;

