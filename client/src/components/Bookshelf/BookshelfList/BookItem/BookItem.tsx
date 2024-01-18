import { FC } from 'react';
import Button from '../../../../uiComponent/Button/Button';
import styles from './BookItem.module.scss';
import { useTranslation } from 'react-i18next';

const BookItem: FC = () => {
    const { t } = useTranslation('bookshelf');

    return (
        <div className={styles.Wrapper}>
            <div className={styles.WrapperImgBox}>
                <img
                    src="https://cdn2.wwnorton.com/wwnproducts/TRADE/3/9/9780393244793/9780393244793_300.jpeg"
                    alt="Book"
                />
            </div>
            <div className={styles.WrapperInfoBox}>
                <div className={styles.WrapperInfoBoxHeading}>
                    <h1 title="Маленький принц">“Маленький принц”</h1>
                    <Button name="BookshelfExchange">
                        {t('BookItem.ExchangeBtn')}
                    </Button>
                </div>
                <div className={styles.WrapperInfoBoxBtnBox}>
                    <Button name="BookshelfEdit">
                        <img src="/bookshelf/edit.svg" alt="" />
                        {t('BookItem.EditBnt')}
                    </Button>
                </div>
            </div>
            <table className={styles.WrapperInfoBoxTable}>
                <tbody>
                    <tr>
                        <th>
                            <p>{t('BookItem.Table.Author')}</p>
                        </th>
                        <th>
                            <p>{t('BookItem.Table.Genre')}</p>
                        </th>
                        <th>
                            <p>{t('BookItem.Table.YearPublication')}</p>
                        </th>
                        <th>
                            <p>{t('BookItem.Table.Language')}</p>
                        </th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th>
                            <p>Антуан де Сент-Єкзюпері</p>
                        </th>
                        <th>
                            <p>Філософська казка</p>
                        </th>
                        <th>
                            <p>1942 рік</p>
                        </th>
                        <th>
                            <p>Українська</p>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BookItem;
