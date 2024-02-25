import React, {useEffect, useState} from 'react';
import styles from './PlaceSearch.module.scss'
import {FieldProps, FieldMetaProps} from 'formik';
import axios from "axios";


//--------------------------Types-----------------------------------------
interface PlaceSearchProps extends FieldProps {
    className?: string;
}
interface City {
    city: string;
}

const PlaceSearch: React.FC<PlaceSearchProps> = ({className, field, form, ...props}) => {
    const [valueCity, setValueCity] = useState(field.value || '')
    const [cities, setCities] = useState<any>([])
    const [isOpen, setIsOpen] = useState(true)
    const {onChange, onBlur, value, name} = field;

    //------------------------ REQUEST-------------------------------
    const fetchCountries = async () => {
        try {
            const response = await axios.get('/cities/ua.json');
            setCities(response.data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };
    useEffect(() => {
        fetchCountries()
    }, []);
    //---------------------------------Filtered--------------------
    const filteredCity:City[] = cities.filter((item:City) => (
        item.city.toLowerCase().includes(valueCity.toLowerCase())

    ))

    useEffect(() => {
        if (filteredCity.length === 0) {
            setValueCity('');
        }
    }, [filteredCity]);
//---------------------------------- Added to input ----------------------------------
    const itemClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        const clickedElement = e.target as HTMLLIElement;
        setIsOpen(!isOpen);
        setValueCity(clickedElement.textContent || '');
    }

//--------------------------- Change value input -------------------------------
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
                    (item: { city: string }, index: number) => (
                        <li onClick={itemClickHandler} className={styles.AutocompleteItem}
                            key={index}>{item.city}</li>
                    )
                ) : null}
            </ul>
        </>

    );
};

export default PlaceSearch;

