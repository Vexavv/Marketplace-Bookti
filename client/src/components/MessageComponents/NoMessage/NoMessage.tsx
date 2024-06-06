import styles from './NoMessage.module.scss'
import noNotifications from '../../../assets/noNotifications.png'
import { useTranslation } from 'react-i18next'

const NoMessage = () => {
    const {t} = useTranslation('message')

    return(
        (
            <div className={styles.NoMessage}>
                <img src={noNotifications} alt={t('noNotifications')} />
                <h2>{t('noNotifications')}</h2>
            </div>
        )
    )
}

export default NoMessage