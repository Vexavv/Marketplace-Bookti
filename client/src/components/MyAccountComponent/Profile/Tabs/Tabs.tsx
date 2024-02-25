import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Tabs.module.scss';
import cn from 'classnames';

const Tabs: FC = () => {
    const { t } = useTranslation('profile');

    return (
        <div>
            <ul className={styles.List}>
                {t('list', { returnObjects: true }).map(item => {
                    return (
                        <li className={styles.ListItem} key={item.link}>
                            <NavLink
                                to={`/account/${item.link}`}
                                className={({ isActive }) =>
                                    cn(styles.ListItemLink, {
                                        [styles.Active]: isActive,
                                    })
                                }
                            >
                                {item.title} 0
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            <Outlet />
        </div>
    );
};

export default Tabs;
