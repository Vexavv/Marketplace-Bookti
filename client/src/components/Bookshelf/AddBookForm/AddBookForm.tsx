import * as Yup from 'yup';
import { FC, useState } from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { addBoocAsync, setStatus } from '../../../store/slices/addBookSlice';
import BookPhoto from './BookPhoto/BookPhoto';
import Button from '../../../uiComponent/Button/Button';
import ImageFiled from './ImageFiled/ImageFiled';
import TextField from './TextField/TextField';
import SelectFiled from './SelectFiled/SelectFiled';
import styles from './AddBookForm.module.scss';
import { IFormFilds, ImageType } from './AddBook.types';

const AddBookForm: FC = () => {
    const dispatch = useAppDispatch();
    const { status } = useAppSelector(state => state.addBook);
    const { t } = useTranslation('addBook');
    const [imageUrl, setImageUrl] = useState<ImageType>(null);

    const exchangeOptions = [
        { label: t('form.fild-exchange.value'), value: 'exchange' },
        { label: t('form.fild-exchange.value-present'), value: 'present' },
    ];

    const validationSchema = Yup.object().shape({
        image: Yup.mixed()
            .required(t('form.btn-add-photo.errorsMessage.req'))
            .test(
                'fileFormat',
                t('form.btn-add-photo.errorsMessage.type-file'),
                (value: any) => {
                    if (value) {
                        const supportedFormats = ['jpg', 'png', 'webp', 'jpeg'];
                        return supportedFormats.includes(
                            value.name.split('.').pop()
                        );
                    }
                    return true;
                }
            )
            .test(
                'fileSize',
                t('form.btn-add-photo.errorsMessage.file-size'),
                (value: any) => {
                    if (value) return value.size <= 3145728;
                    return true;
                }
            ),
        title: Yup.string().required(t('form.fild-name.errorMessage')),
        author: Yup.string().required(t('form.fild-author.errorMessage')),
        genre: Yup.string().required(t('form.fild-genre.errorMessage')),
        date: Yup.string().required(t('form.fild-date.errorMessage')),
        language: Yup.string().required(t('form.fild-language.errorMessage')),
        exchange: Yup.string().required(t('form.fild-exchange.errorMessage')),
        textarea: Yup.string()
            .required(t('form.fild-plot.errorMessage'))
            .max(300, 'max length 300 symbols'),
    });

    const handleSubmit = async (data: IFormFilds) => {
        await dispatch(addBoocAsync(data));
    };

    return (
        <Formik
            initialValues={{
                image: null,
                title: '',
                author: '',
                genre: '',
                date: '',
                language: '',
                exchange: t('form.fild-exchange.value'),
                textarea: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values: IFormFilds) => handleSubmit(values)}
        >
            <Form className={styles.Form}>
                <BookPhoto
                    url={imageUrl ? URL.createObjectURL(imageUrl) : ''}
                />
                <ImageFiled
                    isUrl={!!imageUrl}
                    name="image"
                    type="file"
                    setImageUrl={setImageUrl}
                />
                <TextField
                    component="input"
                    name="title"
                    type="text"
                    placeholder={t('form.fild-name.value')}
                />
                <TextField
                    component="input"
                    name="author"
                    type="text"
                    placeholder={t('form.fild-author.value')}
                />
                <SelectFiled
                    placeholder={t('form.fild-genre.value')}
                    name="genre"
                    options={[{ label: 'default', value: 'default' }]}
                />
                <TextField
                    component="input"
                    name="date"
                    type="text"
                    placeholder={t('form.fild-date.value')}
                />
                <TextField
                    component="input"
                    name="language"
                    type="text"
                    placeholder={t('form.fild-language.value')}
                />
                <SelectFiled name="exchange" options={exchangeOptions} />
                <TextField
                    component="textarea"
                    name="textarea"
                    type="text"
                    placeholder={t('form.fild-plot.value')}
                />
                <Button type="submit" name="BannerButton">
                    {t('form.btn-public-book')}
                </Button>
            </Form>
        </Formik>
    );
};

export default AddBookForm;
