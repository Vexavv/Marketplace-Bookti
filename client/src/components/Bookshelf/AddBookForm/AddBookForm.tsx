import * as Yup from 'yup';
import { FC, useState } from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../hook';
import { addBookAsync } from '../../../store/slices/addBookSlice/addBookSliceAsync';
import { IFormFilds, ImageType } from './AddBook.types';
import BookPhoto from './BookPhoto/BookPhoto';
import Button from '../../../uiComponent/Button/Button';
import ImageFiled from './ImageFiled/ImageFiled';
import TextField from './TextField/TextField';
import SelectFiled from './SelectFiled/SelectFiled';
import styles from './AddBookForm.module.scss';

const AddBookForm: FC = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('addBook');
    const [imageUrl, setImageUrl] = useState<ImageType>(null);

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
            .max(300, t('form.fild-plot.errorMaxLeng'))
            .required(t('form.fild-plot.errorMessage')),
    });

    const handleSubmit = async (data: IFormFilds) => {
        await dispatch(addBookAsync(data));
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
                exchange: t('form.fild-exchange.values', {
                    returnObjects: true,
                })[0],
                textarea: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values: IFormFilds) => handleSubmit(values)}
        >
            {({ errors, touched, values, setTouched, setFieldValue }) => {
                console.log(values);

                return (
                    <Form className={styles.Form}>
                        <BookPhoto
                            url={
                                imageUrl && !errors.image
                                    ? URL.createObjectURL(imageUrl)
                                    : ''
                            }
                        />
                        <ImageFiled
                            isUrl={!!imageUrl}
                            name="image"
                            type="file"
                            setImageUrl={setImageUrl}
                            error={errors.image}
                            touch={touched.image}
                            setTouched={setTouched}
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
                            name="genre"
                            placehold={t('form.fild-genre.placeholder')}
                            setvalue={setFieldValue}
                            value={values.genre}
                            options={t('form.fild-genre.values', {
                                returnObjects: true,
                            })}
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
                        <SelectFiled
                            name="exchange"
                            setvalue={setFieldValue}
                            value={values.exchange}
                            options={t('form.fild-exchange.values', {
                                returnObjects: true,
                            })}
                        />
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
                );
            }}
        </Formik>
    );
};

export default AddBookForm;
