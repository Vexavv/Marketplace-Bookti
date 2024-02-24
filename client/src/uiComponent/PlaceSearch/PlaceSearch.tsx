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
    const [isOpen, setIsOpen] = useState(true)

    //------------------------ REQUEST-------------------------------

    const fetchCountries = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setCountries(response.data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };
    useEffect(() => {
        fetchCountries()
    }, []);
    //---------------------------------Filtered--------------------
    const filteredCity = countries.filter((city: any) => (
        city.title.toLowerCase().includes(valueCity.toLowerCase())
    ))

    const itemClickHandler = (e: any) => {
        setIsOpen(!isOpen)
        setValueCity(e.target.textContent)

        console.log(isOpen)
    }


    console.log(valueCity)
    console.log(countries)
    const {onChange, onBlur, value, name} = field;


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValueCity(newValue);
        onChange(event);
        setIsOpen(true)
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
            <ul className={styles.Autocomplete}>
                {valueCity && isOpen ? filteredCity.map(
                    (city: any) => (
                        <li onClick={itemClickHandler} className={styles.AutocompleteItem}
                            key={city.id}>{city.title}</li>
                    )
                ) : null}
            </ul>
        </>

    );
};

export default PlaceSearch;

