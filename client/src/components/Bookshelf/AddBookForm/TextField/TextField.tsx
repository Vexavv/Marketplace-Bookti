import { FC, InputHTMLAttributes } from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './TextField.module.scss';

interface ITextFieldProps extends InputHTMLAttributes<HTMLSelectElement> {
    component: 'input' | 'textarea';
}

const TextField: FC<ITextFieldProps> = ({ component, ...props }) => {
    return (
        <div className={styles.InputBox}>
            <Field {...props} component={component} />
            <ErrorMessage
                name={props.name as string}
                className="error"
                component={'span'}
            />
        </div>
    );
};

export default TextField;
