

import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './UserPhoto.module.scss';
import Button from "../../../../uiComponent/Button/Button";
import { useTranslation } from "react-i18next";

interface UserPhotoProps {
    field: { name: string; value: File; onChange: (event: ChangeEvent<HTMLInputElement>) => void };
}

const UserPhoto: React.FC<UserPhotoProps> = ({ field }) => {
    const { t } = useTranslation(['mySettings', 'login']);
    const { name,value, onChange } = field;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>( null);
    console.log(file)
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileInput = event.currentTarget;
        const files: FileList | null = fileInput.files;

        if (files && files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);

            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);

            onChange(event);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={styles.Wrapper}>
            <div className={styles.WrapperPhoto}>
                {file ? <img className={styles.WrapperPhotoAvatar} src={URL.createObjectURL(file)} alt="photo" /> :
                    <img className={styles.WrapperPhotoIcon} src="/header/user.svg" alt="user" />}
            </div>
            <div className={styles.WrapperContent}>
                <p className={styles.WrapperContentText}>{t('mySettings:UpdateData.text')}</p>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    name={name}
                />
                <Button name='ResetPasswordButton' type="button" onClick={handleButtonClick}>
                    {t('mySettings:UpdateData.photoButton')}
                </Button>
            </div>
        </div>
    );
};

export default UserPhoto;





