import * as yup from 'yup';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';
import BookPhoto from './BookPhoto/BookPhoto';
import Button from '../../../uiComponent/Button/Button';
import Select from '../../../uiComponent/Select/Select';
import styles from './AddBookForm.module.scss';

interface IFormFilds {
    bookName: string;
    bookAuthor: string;
    bookGenre: string;
    dateWriting: string;
    language: string;
    exchange: string;
    textarea: string;
}

const AddBookForm: FC = () => {
    const { t } = useTranslation('addBook');
    const inputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<File | undefined>(undefined);

    const handleSelectImg = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setImage(files[0]);
        }
    };

    const validationSchemaRegister: yup.Schema<IFormFilds> = yup
        .object()
        .shape({
            bookName: yup.string().required(t('form.fild-name.errorMessage')),
            bookAuthor: yup
                .string()
                .required(t('form.fild-author.errorMessage')),
            bookGenre: yup.string().required(t('form.fild-genre.errorMessage')),
            dateWriting: yup
                .string()
                .required(t('form.fild-date.errorMessage')),
            language: yup
                .string()
                .required(t('form.fild-language.errorMessage')),
            exchange: yup
                .string()
                .required(t('form.fild-exchange.errorMessage')),
            textarea: yup.string().required(t('form.fild-plot.errorMessage')),
        });

    return (
        <div className={styles.Wrapper}>
            <BookPhoto url={image ? URL.createObjectURL(image) : ''} />
            <div className={styles.SelectFileBox}>
                <input type="file" ref={inputRef} onChange={handleFileChange} />
                <Button onClick={handleSelectImg} name="AddBook">
                    {t('form.btn-add-photo')}
                </Button>
            </div>

            <Formik
                initialValues={{
                    bookName: '',
                    bookAuthor: '',
                    bookGenre: '',
                    dateWriting: '',
                    language: '',
                    exchange: '',
                    textarea: '',
                }}
                validationSchema={validationSchemaRegister}
                onSubmit={(
                    values: IFormFilds,
                    { resetForm }: FormikHelpers<IFormFilds>
                ) => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                }}
            >
                <Form className={styles.WrapperForm}>
                    <div>
                        <Field
                            className={styles.WrapperFormInput}
                            name="bookName"
                            type="text"
                            placeholder={t('form.fild-name.value')}
                        />
                        <ErrorMessage component="span" name="bookName" />
                    </div>
                    <div>
                        <Field
                            className={styles.WrapperFormInput}
                            name="bookAuthor"
                            type="text"
                            placeholder={t('form.fild-author.value')}
                        />
                        <ErrorMessage component="span" name="bookAuthor" />
                    </div>
                    <div>
                        <Select
                            name="bookGenre"
                            options={[]}
                            title={t('form.fild-genre.value')}
                        />
                        <ErrorMessage component="span" name="bookGenre" />
                    </div>
                    <div>
                        <Field
                            className={styles.WrapperFormInput}
                            name="dateWriting"
                            type="text"
                            placeholder={t('form.fild-date.value')}
                        />
                        <ErrorMessage component="span" name="dateWriting" />
                    </div>
                    <div>
                        <Select
                            name="language"
                            options={[]}
                            title={t('form.fild-language.value')}
                        />
                        <ErrorMessage component="span" name="language" />
                    </div>
                    <div>
                        <Select
                            name="exchange"
                            options={[]}
                            title={t('form.fild-exchange.value')}
                        />
                        <ErrorMessage component="span" name="exchange" />
                    </div>
                    <div>
                        <Field
                            className={styles.WrapperFormTextarea}
                            as="textarea"
                            name="textarea"
                            type="text"
                            placeholder={t('form.fild-plot.value')}
                        />
                        <ErrorMessage component="span" name="textarea" />
                    </div>

                    <Button
                        type="submit"
                        name="BannerButton"
                        style={{ marginTop: '30px' }}
                    >
                        {t('form.btn-public-book')}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default AddBookForm;
