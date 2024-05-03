import React, {ChangeEvent, Dispatch, FocusEvent, SetStateAction, useRef, useState} from 'react';
import styles from './UserPhotoField.module.scss';
import Button from "../../../../uiComponent/Button/Button";
import {useTranslation} from "react-i18next";
import {ImageType} from "../../../Bookshelf/AddBookForm/AddBook.types";
import {Field} from "formik";


interface UserPhotoProps {
    name: string;
    type: string;
    setTouched: any;
    setImageUrl: Dispatch<SetStateAction<ImageType>>;
    error?: string;
    touch?: boolean;
}


const UserPhotoField: React.FC<UserPhotoProps> = ({
                                                 name,
                                                 type,
                                                 setImageUrl,
                                                 error,
                                                 touch,
                                                 setTouched,
                                             }) => {
    const {t} = useTranslation(['mySettings', 'login']);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={styles.Wrapper}>
            <div className={styles.WrapperContent}>
                <p className={styles.WrapperContentText}>{t('mySettings:UpdateData.text')}</p>

                <Field name={name} type={type}>
                    {(e: any) => (
                        <input
                            ref={fileInputRef}
                            accept="image/png, image/jpeg"
                            type="file"
                            name="avatar_url"
                            style={{display: 'none'}}
                            onChange={({
                                           currentTarget,
                                       }: FocusEvent<HTMLInputElement>) => {
                                const file = currentTarget.files?.item(0);

                                setTouched({
                                    avatarUrl: true,
                                });

                                setImageUrl(file);
                                e.form.setFieldValue('avatarUrl', file);
                            }}
                        />
                    )}
                </Field>
                <Button name='ResetPasswordButton' type="button" onClick={handleButtonClick}>
                    {t('mySettings:UpdateData.photoButton')}
                </Button>
            </div>
        </div>
    );
};

export default UserPhotoField;

