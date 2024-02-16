import {FC}from 'react';
import styles from './UserInformation.module.scss'
import { useTranslation } from 'react-i18next';
import { Rating } from 'react-simple-star-rating';
import {UserInformationProps} from "./UserInformationProps";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {List} from "../../../types";
import Button from "../../../uiComponent/Button/Button";
const UserInformation: FC<UserInformationProps> = ({user}) => {
    const { t } = useTranslation('separatePage');
    const { width } = useWindowSize();
    const navigationLinks: List[]= [
        {id:1,icon:'/profile/map-pin.svg/',title:user?.full_name},
        {id:2,icon:'/profile/mail.svg/',title:user?.email},
        {id:3,icon:'/profile/location.svg/',title:t('User.show')}
    ]

    return (
        <div className={styles.Info}>
            <div className={styles.InfoAvatar}>
                {
                    user?.avatar_url?(
                        <img src={user.avatar_url} alt="Avatar"/>
                    ):(<img src="/header/user.svg"
                            alt="Avatar"
                            width={35}
                            height={35}/>)
                }
            </div>
            <div className={styles.InfoData}>
                <h3>{user?.full_name}</h3>
                <div >
                    <Rating
                        initialValue={2}
                        readonly
                        size={width && width <= 900 ? 17 : 24}
                    />
                    <span>(0)</span>
                    <p>Додати відгук</p>
                </div>
                <ul>
                    {navigationLinks.map(item =>(
                        <li key={item.id}><img src={item.icon} alt="icon"/><p>{item.title}</p></li>
                    ))}
                </ul>
                <Button>{t('User.button')}</Button>
            </div>
        </div>
    );
};

export default UserInformation;