import { FC } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../../uiComponent/Container/Container';
import styles from './Bookshelf.module.scss';
import cn from 'classnames';

const Bookshelf: FC = () => {
    const { t } = useTranslation('bookshelf');

    return (
        <Container>
            <div className={styles.Wrapper}>
                <div className={styles.WrapperAside}>
                    <nav className={styles.WrapperAsideNavigation}>
                        <Link
                            to={'/'}
                            className={styles.WrapperAsideNavigationLink}
                        >
                            <img
                                src="/bookshelf/arrow-back.svg"
                                alt="Go back"
                            />
                            <p>{t('Nav')}</p>
                        </Link>
                    </nav>
                    <aside className={styles.WrapperAsideAside}>
                        <ul>
                            {t('CounterASide', { returnObjects: true }).map(
                                item => (
                                    <li key={item.title}>
                                        <NavLink
                                            to={`/bookshelf/${item.link}`}
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
                <section className={styles.WrapperContent}>
                    <Outlet />
                </section>
            </div>
        </Container>
    );
};

export default Bookshelf;
