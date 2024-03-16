import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './UserPhoto.module.scss';
import Button from "../../../../uiComponent/Button/Button";
import {useTranslation} from "react-i18next";
interface UserPhotoProps {
    field: { name: string; value: File | null; onChange: (event: ChangeEvent<HTMLInputElement>) => void };
}

const UserPhoto: React.FC<UserPhotoProps> = ({ field }) => {
    const {t} = useTranslation(['mySettings', 'login'])
    const { name, value, onChange } = field;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [objectURL, setObjectURL] = useState<string | null>(null);
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileInput = event.currentTarget;
        const files: FileList | null = fileInput.files;

        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const objectURL = reader.result as string;
                setObjectURL(objectURL);
            };

            reader.readAsDataURL(file);
        }


        onChange({
            ...event,
            target: {
                ...event.target,
                type: 'file',
                name: name,
                files: files,
            },
        });
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={styles.Wrapper}>
            <div className={styles.WrapperPhoto}>
                {objectURL ? <img className={styles.WrapperPhotoAvatar} src={objectURL} alt="photo" /> :
                    <img className={styles.WrapperPhotoIcon} src="/header/user.svg" alt="user"/>}
            </div>
            <div className={styles.WrapperContent}>
                <p className={styles.WrapperContentText}>{t('mySettings:UpdateData.text')}</p>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    style={{display: 'none'}}
                    name={name}
                />
                <Button name='ResetPasswordButton' type="button"
                        onClick={handleButtonClick}>{t('mySettings:UpdateData.photoButton')}</Button>

            </div>

        </div>
    );
};

export default UserPhoto;