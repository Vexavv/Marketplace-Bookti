import styles from './AdminPage.module.scss';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, Outlet } from 'react-router-dom';

import Container from '../../uiComponent/Container/Container';
import { useWindowSize } from '../../hooks/useWindowSize';

const AdminPage = () => {
    const { t } = useTranslation('admin');
    const {width} = useWindowSize();

    return (
        <Container>
            <div className={styles.Wrapper}>
                <div className={styles.WrapperAside}>
                    <nav className={styles.WrapperAsideNavigation}>
                        <Link
                            to={'/account'}
                            className={styles.WrapperAsideNavigationLink}
                        >
                            <img
                                src="/bookshelf/arrow-back.svg"
                                alt="Go back"
                            />
                            <p>{t('arrow')}</p>
                        </Link>
                    </nav>
                    <aside className={styles.WrapperAsideAside}>
                        <ul>
                            {t('counterAside', { returnObjects: true }).map(
                                item => (
                                    <li key={item.title}>
                                        <NavLink
                                            to={`${item.link}`}
                                            className={({ isActive }) =>
                                                cn(styles.ListLink, {
                                                    [styles.Active]: isActive,
                                                })
                                            }
                                        >
                                            {item.title}
                                            <span> 0</span>
                                        </NavLink>
                                    </li>
                                )
                            )}
                        </ul>
                    </aside>
                </div>
                <hr />
                <section className={styles.WrapperContent}>
                    <Outlet />
                </section>
            </div>
        </Container>
    );
};

export default AdminPage;
