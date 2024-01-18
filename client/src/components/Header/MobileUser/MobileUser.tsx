import React, {useState} from 'react';
import styles from './MobileUser.module.scss'
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../hook";
import Drawer from "@mui/material/Drawer";
const MobileUser = () => {
    const [mobileUserOpen, setMobileUserOpen] = useState(false)
    const loading = useAppSelector(state => state.auth.loading)
    const mobileUserToggle = () => {
        setMobileUserOpen(current => !current)
    }
    return (
        <div className={styles.User}>
            {loading &&
                <Link to='/'><img className={styles.UserBook} src="/header/communication/add_book.svg"
                                  alt="add-book"/></Link>}
            <div className={styles.UserAvatar}>
                <Link to={loading ? '#' : '/registration'} onClick={mobileUserToggle}>
                    <img  className={styles.UserAvatarImg} src="/header/user.svg" alt="user"/>
                </Link>
            </div>

            {loading && <Drawer anchor="right"
                     component="div"
                     variant="temporary"
                     open={mobileUserOpen}
                     onClose={mobileUserToggle}
                     ModalProps={{keepMounted: true}}
                     SlideProps={{timeout: 400}}
                     sx={{
                         display: {md: 'none'},
                         '& .MuiDrawer-paper': {
                             boxSizing: 'border-box',
                             width: {xs: '80%', sm: '50%', md: 'none'},
                             overflow: 'hidden',
                             color: "#FFF",
                             display: {md: 'none'},
                             '&:active': {color: '#BA933E'}
                         }
                     }}>
                <div className={styles.UserPrifile}>
                    <img className={styles.UserPrifileClose} onClick={mobileUserToggle} src="/header/x.svg" alt="close"/>

                </div>
            </Drawer>}
        </div>
    );
};

export default MobileUser;