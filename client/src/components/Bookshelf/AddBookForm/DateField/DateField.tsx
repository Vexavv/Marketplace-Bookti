import { FC, InputHTMLAttributes } from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './DateField.module.scss';

interface IDateFieldProps extends InputHTMLAttributes<HTMLSelectElement> {
    component: 'input' | 'textarea';
}

const DateField: FC<IDateFieldProps> = ({ ...props }) => {
    return (
        <div className={styles.DateField}>
            <Field {...props} />
            <ErrorMessage
                name={props.name as string}
                className="error"
                component={'span'}
            />
        </div>
    );
};

export default DateField;
