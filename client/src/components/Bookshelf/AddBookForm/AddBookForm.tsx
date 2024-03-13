import * as Yup from 'yup';
import { FC, memo, useState } from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { addBookAsync } from '../../../store/slices/addBookSlice/addBookSliceAsync';
import { IFormFilds, ImageType } from './AddBook.types';
import BookPhoto from './BookPhoto/BookPhoto';
import Button from '../../../uiComponent/Button/Button';
import ImageFiled from './ImageFiled/ImageFiled';
import TextField from './TextField/TextField';
import SelectFiled from './SelectFiled/SelectFiled';
import styles from './AddBookForm.module.scss';
import DateField from './DateField/DateField';

const AddBookForm: FC = memo(() => {
    const dispatch = useAppDispatch();
    const { status } = useAppSelector(state => state.addBook);
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
        publication_date: Yup.string().required(
            t('form.fild-date.errorMessage')
        ),
        language: Yup.string().required(t('form.fild-language.errorMessage')),
        trade_format: Yup.string().required(
            t('form.fild-exchange.errorMessage')
        ),
        description: Yup.string()
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
                publication_date: '',
                language: '',
                trade_format: t('form.fild-exchange.values', {
                    returnObjects: true,
                })[0],
                description: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values: IFormFilds) => handleSubmit(values)}
        >
            {({ errors, touched, values, setTouched, setFieldValue }) => {
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
                        <DateField
                            component="input"
                            name="publication_date"
                            type="date"
                            placeholder="asdasdad"
                        />
                        <TextField
                            component="input"
                            name="language"
                            type="text"
                            placeholder={t('form.fild-language.value')}
                        />
                        <SelectFiled
                            name="trade_format"
                            setvalue={setFieldValue}
                            value={values.trade_format}
                            options={t('form.fild-exchange.values', {
                                returnObjects: true,
                            })}
                        />
                        <TextField
                            component="textarea"
                            name="description"
                            type="text"
                            placeholder={t('form.fild-plot.value')}
                        />
                        <Button type="submit" name="BannerButton">
                            {status === 'loading' ? (
                                <div>Loading...</div>
                            ) : (
                                t('form.btn-public-book')
                            )}
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
});

export default AddBookForm;
