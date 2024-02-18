import React, {useState} from 'react';
import styles from './PlaceSearch.module.scss'
import { FieldProps, FieldMetaProps } from 'formik';
interface PlaceSearchProps extends FieldProps {
    className?: string;
}

const PlaceSearch: React.FC<PlaceSearchProps> = ({ className,field, form, ...props }) => {
    // const [value, setValue] = useState(field.value || '')
    // const {  onChange, onBlur } = field;


    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //
    //     const newValue = event.target.value;
    //     setValue(newValue);
    //     onChange({
    //         ...event,
    //         target: {
    //             ...event.target,
    //             value: newValue,
    //         },
    //     });
    //
    // };
    return (
        <>
            <input
                className={` ${className || ''}`}
                type="text"
                {...field}
                {...props}  />


            {/*<input*/}
            {/*    className={` ${className || ''}`}*/}
            {/*    type="text"*/}
            {/*    onChange={handleInputChange}*/}
            {/*    value={value}*/}
            {/*    name={field.name}*/}
            {/*    onBlur={onBlur}*/}
            {/*    {...props}  />*/}
        </>

    );
};

export default PlaceSearch;

