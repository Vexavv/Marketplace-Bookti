import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './UserPhoto.module.scss';
import Button from "../../../../../uiComponent/Button/Button";

interface UserPhotoProps {
    field: { name: string; value: File | null; onChange: (event: ChangeEvent<HTMLInputElement>) => void };
}

const UserPhoto: React.FC<UserPhotoProps> = ({ field }) => {
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
            <p className={styles.WrapperText}>Виберіть фото не менше 200*200</p>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
                name={name}
            />
            <Button name='ResetPasswordButton' type="button" onClick={handleButtonClick}>Завантажити</Button>

        </div>
    );
};

export default UserPhoto;




