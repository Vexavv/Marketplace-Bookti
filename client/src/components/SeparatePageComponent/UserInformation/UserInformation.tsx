import {FC, useEffect, useState} from 'react';
import styles from './UserInformation.module.scss'
import {useTranslation} from 'react-i18next';
import {Rating} from 'react-simple-star-rating';
import {UserInformationProps} from "./UserInformationProps";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {List} from "../../../types";
import Button from "../../../uiComponent/Button/Button";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {postNewSubscriberAsync} from "../../../store/slices/subscriptionSlice/postNewSubscriber";
import {closeModal, openModal} from "../../../store/slices/modalSlice";
import {
    backUpAddedSubscriber,
    backUpDeleteSubscriber
} from "../../../store/slices/subscriptionSlice/subscriptionsSlice";

const UserInformation: FC<UserInformationProps> = ({user, admin=false}) => {
    const {t} = useTranslation(['separatePage', 'profile','mySubscriptions']);
    const {width} = useWindowSize();
    const [rating, setRating] = useState(0)
    const dispatch = useAppDispatch();
    let showEmail = user?.displayEmail
    let showTelegram = user?.displayTelegram
    const {statusAdded} = useAppSelector(state => state.subscriptions)
    const navigationLinks: List[] = [
        {id: 1, icon: '/profile/map-pin.svg/', title: user?.location,},
        {id: 2, icon: '/profile/mail.svg/', title: user?.email, href: `mailto:${user?.email}`},
        {id: 3, icon: '/profile/location.svg/', title: user?.telegramId, href: `https://t.me/${user?.telegramId}`}
    ]
    const handleOpenModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'},text: t('mySubscriptions:Modal.added')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }
    useEffect(() => {
        if(statusAdded === 'loaded'){
            handleOpenModal();
            dispatch(backUpAddedSubscriber())
        }
    }, [statusAdded]);
    return (
        <div className={styles.Info}>
            <div className={styles.InfoAvatar}>
                {
                    user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt="Avatar" className={styles.InfoAvatarImage}/>
                    ) : (<img src="/header/user.svg"
                              alt="Avatar"
                              width={35}
                              height={35}/>)
                }
            </div>
            <div className={styles.InfoData}>
                <h3 className={styles.InfoDataName}>{user?.fullName}</h3>
                <div className={styles.InfoDataRating}>
                    <Rating
                        initialValue={rating}
                        readonly
                        size={width && width <= 900 ? 17 : 24}
                    />
                    <span className={styles.InfoDataRatingValue}>({rating})</span>
                    <p>{t('User.review')}</p>
                </div>
                <ul className={styles.InfoDataNav}>
                    {navigationLinks.map(item => (
                        <li className={styles.InfoDataNavItem} key={item.id}>
                            <img className={styles.InfoDataNavItemImage} src={item.icon} alt="icon"/>

                            {item.title ?
                                <a style={{color: 'black'}} className={styles.InfoDataNavItemText} href={item.href}
                                   target='_blank'>{item.title}</a> :
                                <p className={styles.InfoDataNavItemText}>{t('profile:user-info.noTelegram')}</p>}
                        </li>
                    ))}
                </ul>
                {!admin && user?.id &&  ( <Button onClick={() => {
                    if (typeof user.id === 'string' || typeof user.id === 'number') {
                        dispatch(postNewSubscriberAsync(user.id));
                    }
                }}>
                    {t('User.button')}
                </Button>)}
            </div>
        </div>
    );
};

UserInformation.defaultProps = {
    admin: false
}

export default UserInformation;