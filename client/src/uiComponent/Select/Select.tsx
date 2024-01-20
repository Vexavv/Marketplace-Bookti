import { FC, InputHTMLAttributes, useState } from 'react';
import { Field } from 'formik';
import styles from './Select.module.scss';

interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    name: string;
    title: string;
    options: { value: string; label: string }[];
}

const Select: FC<ISelectProps> = ({ options, title, name, ...props }) => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>(
        undefined
    );

    return (
        <div className={styles.Wrapper}>
            <Field
                {...props}
                name={name}
                className={styles.WrapperSelect}
                as="select"
                type="text"
            >
                <option value="" disabled hidden>
                    {title}
                </option>
                {options.length &&
                    options.map(item => (
                        <option
                            key={item.value}
                            className={styles.WrapperSelectOption}
                            value={item.value}
                        >
                            {item.label}
                        </option>
                    ))}
            </Field>
            <img src="/bookshelf/arrow-select.svg" alt="Arrow" />
        </div>
    );
};

export default Select;
