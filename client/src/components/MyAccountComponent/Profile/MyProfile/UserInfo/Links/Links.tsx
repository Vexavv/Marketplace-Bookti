import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '../../../../../../hook';
import {getRegistrationDate} from '../../../../../../utils/CreatingDateAccount';
import styles from './Links.module.scss';


const Links: FC = () => {
    const {t} = useTranslation('profile');
    const {user} = useAppSelector(state => state.auth);
    let showTelegram = user?.displayTelegram
    let showEmail = user?.displayEmail
    return (
        <div className={styles.Links}>
            <span>
                {t('user-info.date-register')}{' '}
                {getRegistrationDate(user?.creationDate!)}
            </span>
            <ul>
                <li>
                    <img src="/profile/location.svg" alt=""/>
                    { showTelegram ? (
                        user?.telegramId ? (
                            <a style={{color: 'black'}} href={`https://t.me/${user.telegramId}`} target='_blank'>{user.telegramId}</a>
                        ) : (
                            t('user-info.noTelegram')
                        )
                    ) : (
                        t('user-info.telegram')
                    )}
                </li>
                <li>
                    <img src="/profile/mail.svg" alt=""/>
                    {showEmail ? <a style={{color: 'black'}} href={`mailto:${user?.email}`}>{user?.email}</a>  : t('user-info.email')}

            </li>
            <li>
                <img src="/profile/map-pin.svg" alt=""/>
                    {user?.location}
                </li>
            </ul>
        </div>
    );
};

export default Links;
