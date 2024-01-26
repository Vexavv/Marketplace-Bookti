import { FC } from 'react';
import { ErrorMessage, Field, FieldAttributes } from 'formik';
import styles from './SelectField.module.scss';

interface ISelectFiledProps extends FieldAttributes<any> {
    placeholder?: string;
}

const SelectFiled: FC<ISelectFiledProps> = ({
    options,
    placeholder,
    ...props
}) => {
    return (
        <div className={styles.SelectBox}>
            <div className={styles.SelectBoxArrow}>
                <Field as="select" {...props}>
                    {placeholder?.length && (
                        <option value="" hidden>
                            {placeholder}
                        </option>
                    )}
                    {options?.length &&
                        options.map((item: any) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                </Field>
                <img src="/bookshelf/arrow-select.svg" alt="" />
            </div>
            <ErrorMessage
                name={props.name as string}
                className="error"
                component={'span'}
            />
        </div>
    );
};

export default SelectFiled;
