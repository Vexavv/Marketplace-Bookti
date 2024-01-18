import React, {useEffect, useState} from 'react';
import styles from './PopperUser.module.scss'
import Button from "../../../uiComponent/Button/Button";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {logout} from "../../../store/slices/authSlice";
import {Link} from "react-router-dom";
import {Popper} from "@mui/base/Popper";
import {useTranslation} from "react-i18next";
import {styled, css} from '@mui/system';
import {NavigationList} from "../../../types";
import {openModal} from "../../../store/slices/modalSlice";
import UserImage from "../../UserImage/UserImage";
import UserNavigation from "../../UserNavigation/UserNavigation";


const StyledPopperDiv = styled('div')(
    ({theme}) => css`
        background-color: #FFF;
        border-radius: 8px;
        border: 1px solid #447B57;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 375px;
        padding: 38px 0 59px;
        opacity: 1;
        margin: 1rem 2rem;

    `,
);
const PopperUser = () => {
    const {t} = useTranslation('header')
    const dispatch = useAppDispatch()
//------------------Selectors-------------------------
    const user = useAppSelector(state => state.auth.user)
    console.log('User>>>>>>>>>', user)
    const loading = useAppSelector(state => state.auth.loading)
//----------------------Logout Google ---------------------
    const handleLogout = () => {
        dispatch(logout())
    };


//--------------------Popper-----------------------------
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const popperList: NavigationList[] = [
        {name: t('Nav.account'), path: "/account", icon: "/header/user.svg"},
        {name: t('Nav.favorite'), path: "/favorite", icon: "/header/paperclip.svg"},
        {name: t('Nav.books'), path: "/bookshelf", icon: "/header/book.svg"},
        {name: t('Nav.read'), path: "/wantRead", icon: "/header/heart.svg"},
        {name: t('Nav.reviews'), path: "/reviews", icon: "/header/star.svg"},
        {name: t('Nav.settings'), path: "/settings", icon: "/header/settings.svg"}
    ]
    //---------------------Content-----------------------


    const renderContent = () => {
        if (!loading) {
            return <div>

                <Link to='/login'>
                    <Button name='HeaderButton'>{t('Button.login')}</Button>
                </Link>
                <Link to='/registration'>
                    <Button name='HeaderButton'>{t('Button.registration')}</Button>
                </Link>
            </div>;
        }

        if (user) {

            return <div>
                <Button onClick={handleClick} name='UserButton'>
                    <img className={styles.PopperUser} src="/header/user.svg" alt="user"/>
                    {user.full_name}</Button>

                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <StyledPopperDiv sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center'}}
                                     onClick={handleClose}>
                        <div>
                            <UserImage picture={user.avatar_url} name={user.full_name}
                                       text={t('Popper.text')}/>
                        </div>
                        <UserNavigation />
                    </StyledPopperDiv>
                </Popper>
            </div>;
        }

    };

    return <div>{renderContent()}</div>
};

export default PopperUser;