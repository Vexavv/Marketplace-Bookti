import { FC, useMemo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../hook';
import styles from './Tabs.module.scss';
import cn from 'classnames';
import {User} from "../../../../types";

interface TabsProps {
    user: User | null
}


const Tabs= ({user}:TabsProps) => {
    const { t } = useTranslation('profile');

    const myBookshelf = useMemo(
        () => ({
            size: user?.books?.size,
            name: 'my-bookshelf',
        }),
        [user?.books?.size]
    );

    const myFavorites = useMemo(
        () => ({
            size: user?.wishlist?.size,
            name: 'interest',
        }),
        [user?.wishlist?.size]
    );

    const returnTabCount = (link: string) => {
        if (link === myFavorites.name) return myFavorites.size || 0;
        if (link === myBookshelf.name) return myBookshelf.size || 0;
        return 0;
    };

    return (
        <div>
            <ul className={styles.List}>
                {t('list', { returnObjects: true }).map(({ title, link }) => {
                    return (
                        <li className={styles.ListItem} key={link}>
                            <NavLink
                                to={`/account/${link}`}
                                className={({ isActive }) =>
                                    cn(styles.ListItemLink, {
                                        [styles.Active]: isActive,
                                    })
                                }
                            >
                                {title} {returnTabCount(link)}
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
