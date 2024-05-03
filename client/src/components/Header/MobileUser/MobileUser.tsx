import React, {useEffect, useState} from 'react';
import styles from './MobileUser.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hook';
import Drawer from '@mui/material/Drawer';
import { useTranslation } from 'react-i18next';
import UserImage from '../../UserImage/UserImage';
import UserNavigation from '../../UserNavigation/UserNavigation';
const MobileUser = () => {
    const { t } = useTranslation('header');
    const [mobileUserOpen, setMobileUserOpen] = useState(false);
    const loading = useAppSelector(state => state.auth.loading);
    const user = useAppSelector(state => state.auth.user);

    const mobileUserToggle = () => {
        setMobileUserOpen(current => !current);
    };
    return (
        <div className={styles.User}>
            {loading && (
                <Link to="/bookshelf/add-book">
                    <img
                        className={styles.UserBook}
                        src="/header/communication/add_book.svg"
                        alt="add-book"
                    />
                </Link>
            )}
            <div className={styles.UserAvatar}>
                <Link
                    to={loading ? '#' : '/registration'}
                    onClick={mobileUserToggle}
                >
                    {user?.avatarUrl ? <img className={styles.UserAvatarUserPhoto} src={user.avatarUrl} alt="avatar"/> : <img
                        className={styles.UserAvatarImg}
                        src="/header/user.svg"
                        alt="user"
                    />}
                </Link>
            </div>

            {loading && (
                <Drawer
                    anchor="right"
                    component="div"
                    variant="temporary"
                    open={mobileUserOpen}
                    onClose={mobileUserToggle}
                    ModalProps={{ keepMounted: true }}
                    SlideProps={{ timeout: 400 }}
                    sx={{
                        display: { md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: { xs: '80%', sm: '50%', md: 'none' },
                            overflow: 'hidden',
                            color: '#FFF',
                            display: { sx: 'flex', md: 'none' },
                            alignItems: 'center',
                        },
                    }}
                >
                    <div className={styles.UserPrifile}>
                        <img
                            className={styles.UserPrifileClose}
                            onClick={mobileUserToggle}
                            src="/header/x.svg"
                            alt="close"
                        />
                        {user && (
                            <div className={styles.UserPrifileGreetings}>
                                <UserImage
                                    picture={user.avatarUrl}
                                    name={user.fullName}
                                    text={t('Popper.text')}
                                />
                            </div>
                        )}
                        <UserNavigation mobile  mobileUserToggle={mobileUserToggle} />
                    </div>
                </Drawer>
            )}
        </div>
    );
};

export default MobileUser;
