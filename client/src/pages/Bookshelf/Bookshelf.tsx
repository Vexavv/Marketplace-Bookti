import {FC, useEffect} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Container from '../../uiComponent/Container/Container';
import styles from './Bookshelf.module.scss';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from "../../hook";
import {closeModal, openModal} from "../../store/slices/modalSlice";
import {backUpDeleteBook} from "../../store/slices/addBookSlice/addBookSlice";
import {getUserAsync} from "../../store/slices/userSlices/authSlice";
const Bookshelf: FC = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation('bookshelf');
    const statusDeleteBook = useAppSelector(state => state.addBook.statusDelete)
    const updateDeleteBook = useAppSelector(state => state.addBook.deleteBook)
    //-------------------------------------------------------------------------------------------------------
    const handleOpenModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'},text: t('Modal')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }
    useEffect(() => {
        if(statusDeleteBook === 'success'){
            handleOpenModal();
            dispatch(backUpDeleteBook())
        }
    }, [statusDeleteBook]);


    useEffect(() => {
        dispatch(getUserAsync())
    }, [updateDeleteBook]);

//-------------------------------------------------------------------------------------------------------

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
                            {t('CounterASide', {returnObjects: true}).map(
                                item => (
                                    <li key={item.title}>
                                        <NavLink
                                            to={`/bookshelf/${item.link}`}
                                            className={({isActive}) =>
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
                    <Outlet/>
                </section>
            </div>
        </Container>
    );
};

export default Bookshelf;
