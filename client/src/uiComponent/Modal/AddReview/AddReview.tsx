import * as Yup from 'yup';
import { FC, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Rating from '@mui/material/Rating';
import Button from '../../Button/Button';
import styles from './AddReview.module.scss';
import { useTranslation } from 'react-i18next';

interface IFormFilds {
    review: string;
    stars: number;
}

const AddReview: FC = () => {
    const { t } = useTranslation('profile');
    const [stars, setStars] = useState<number>(0);

    const validationSchema = Yup.object().shape({
        review: Yup.mixed().required('req'),
        stars: Yup.mixed(),
    });

    const handleSubmit = async (data: IFormFilds) => {
        const body = { ...data, stars };
        console.log(body);
    };

    return (
        <Formik
            initialValues={{
                review: '',
                stars: stars,
            }}
            validationSchema={validationSchema}
            onSubmit={(values: IFormFilds) => handleSubmit(values)}
        >
            <Form className={styles.Form}>
                <h1>{t('reviews.form.title')}</h1>
                <Rating
                    name="simple-controlled"
                    value={stars}
                    onChange={(_, newValue) => {
                        newValue && setStars(newValue);
                    }}
                />
                <h2>{t('reviews.form.clue')}</h2>
                <div className={styles.FormFieldBox}>
                    <Field
                        component="textarea"
                        name="review"
                        placeholder={t('reviews.form.placeholder')}
                        type="text"
                    ></Field>

                    <ErrorMessage
                        name={'review'}
                        className="error"
                        component={'span'}
                    />
                </div>
                <Button type="submit" name="BannerButton">
                    {t('reviews.form.btn-submit')}
                </Button>
            </Form>
        </Formik>
    );
};

export default AddReview;
