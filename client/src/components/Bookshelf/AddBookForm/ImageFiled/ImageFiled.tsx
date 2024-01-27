import { Dispatch, FC, SetStateAction, FocusEvent, useRef } from 'react';
import { ErrorMessage, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { ImageType } from '../AddBookForm';
import styles from './ImageFiled.module.scss';

interface ImageFiledProps {
    isUrl: boolean;
    name: string;
    type: string;
    setImageUrl: Dispatch<SetStateAction<ImageType>>;
}

const ImageFiled: FC<ImageFiledProps> = ({
    name,
    type,
    isUrl,
    setImageUrl,
}) => {
    const { t } = useTranslation('addBook');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSelectImg = () => {
        inputRef.current?.click();
    };

    return (
        <div className={styles.Wrapper}>
            <button type="button" onClick={handleSelectImg}>
                {isUrl
                    ? t('form.btn-add-photo.values.photo-noexist')
                    : t('form.btn-add-photo.values.photo-exist')}
            </button>
            <ErrorMessage name="image" className="error" component={'span'} />
            <Field name={name} type={type}>
                {(e: any) => (
                    <input
                        ref={inputRef}
                        accept="image/png, image/jpeg"
                        type="file"
                        name="image"
                        onChange={({
                            currentTarget,
                        }: FocusEvent<HTMLInputElement>) => {
                            const file = currentTarget.files?.item(0);

                            setImageUrl(file);
                            e.form.setFieldValue('image', file);
                        }}
                    />
                )}
            </Field>
        </div>
    );
};

export default ImageFiled;