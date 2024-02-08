import { FC } from 'react';
import { ErrorMessage, Field, FieldAttributes } from 'formik';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import styles from './SelectField.module.scss';
import cn from 'classnames';

interface ISelectFiledProps extends FieldAttributes<any> {
    options: string[];
    value: string;
    setvalue: any;
    placehold?: string;
}

const SelectFiled: FC<ISelectFiledProps> = ({
    options,
    placehold,
    value,
    setvalue,
    ...props
}) => {
    const { ref, isShow, setIsShow } = useClickOutside(false);

    const handleSetOption = (value: string) => {
        setvalue(props.name, value);

        if (isShow) setIsShow(false);
    };

    return (
        <div
            className={styles.Wrapper}
            onClick={() => setIsShow(!isShow)}
            ref={ref}
        >
            <div className={styles.WrapperSelectBox}>
                <Field
                    {...props}
                    as="input"
                    readOnly
                    placeholder={value ? value : placehold}
                />
                {isShow && (
                    <ul style={{ bottom: `-${options.length * 45 + 1}px` }}>
                        {options.map(item => (
                            <li
                                key={item}
                                onMouseDown={() => handleSetOption(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
                <img
                    className={cn({
                        [styles.Active]: isShow,
                    })}
                    src="/bookshelf/arrow-select.svg"
                    alt="Arrow down"
                />
            </div>
            <ErrorMessage
                name={props.name}
                className="error"
                component={'span'}
            />
        </div>
    );
};

export default SelectFiled;
