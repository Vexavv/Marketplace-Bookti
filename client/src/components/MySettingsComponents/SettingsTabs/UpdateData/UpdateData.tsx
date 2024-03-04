import React from 'react';
import styles from './UpdateData.module.scss'
import {Formik, Form, Field, ErrorMessage, FormikHelpers, FormikProps,} from 'formik';
import * as yup from 'yup';
import UserPhoto from "./UserPhoto/UserPhoto";





interface UpdateForm {
    name?: string,
    email?:string,
    city?:string,
    avatar_url?: string,
    telegram?: string,
    show_email?: boolean,
    show_telegram?:boolean

}
// initialValues
const initialValuesUpdateForm: UpdateForm = {
    name:'',
    email: '',
    city:'',
    avatar_url:'',
    telegram:'',
    show_email:false,
    show_telegram:false
}





const UpdateData = () => {
    return (
        <div className={styles.Update}>
            <Formik initialValues={initialValuesUpdateForm} onSubmit={(values: UpdateForm) => {
                console.log(values)
            }}>
                <Form>
                    <Field  component={UserPhoto} name="avatar_url" />

                    <button type='submit'>Send</button>
                </Form>

            </Formik>

        </div>
    );
};

export default UpdateData;