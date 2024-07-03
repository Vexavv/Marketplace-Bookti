import { FC, useEffect, useState } from 'react';
import styles from './AdminBook.module.scss';
import axios from 'axios';
import { BASE_URL } from '../../../../../constants/api';
import { IResData } from '../../../../../store/slices/profileSlice/profileSliceTypes';
import { useTranslation } from 'react-i18next';
import BookInfo from '../../../../SeparatePageComponent/BookInfo/BookInfo';
import UserInformation from '../../../../SeparatePageComponent/UserInformation/UserInformation';
import Button from '../../../../../uiComponent/Button/Button';

const AdminBook: FC<{ idPage: number | undefined }> = ({ idPage }) => {
    const { t } = useTranslation('admin');
    const [data, setData] = useState<any>(null);

    async function getData() {
        const { data } = await axios.get<IResData>(
            `${BASE_URL}/books/${idPage}`
        );

        console.log(data);

        setData(data);
    }

    useEffect(() => {
        idPage && getData();
    }, []);

    return (
        <div>
            <div className={styles.AdminBook}>
                <div>
                    <div className={styles.AdminBookBookInform}>
                        <BookInfo {...data} />
                        <UserInformation user={data?.owner} admin={true} />
                    </div>
                    <div></div>
                </div>
                <div className={styles.AdminBookDescription}>
                    <h3>Опис книги</h3>
                    <p>{data?.description}</p>
                </div>
            </div>
            <div className={styles.WrapperButton}>
                <ul>
                    <li>
                        <Button>
                            <img src="/admin/check-mark.svg" alt="accept" />
                            <p>{t('button.confirm')}</p>
                        </Button>
                    </li>
                    <li>
                        <Button name="UserButton">
                            <img src="/header/x.svg" alt="" />
                            <p>{t('button.delete')}</p>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdminBook;
