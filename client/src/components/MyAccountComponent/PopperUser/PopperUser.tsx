import React, {useState} from 'react';
import styles from './PopperUser.module.scss'
import Button from "../../Button/Button";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {logout} from "../../../store/slices/authSlice";
import {Link} from "react-router-dom";
import {Popper} from "@mui/base/Popper";
import {useTranslation} from "react-i18next";
import {styled, css} from '@mui/system';
import {NavigationList} from "../../../types";
import {openModal} from "../../../store/slices/modalSlice";


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
        margin: 1rem 0;

    `,
);
const PopperUser = () => {
    const {t} = useTranslation('header')

    const dispatch = useAppDispatch()
//------------------Selector-------------------------
    const tokenResponse = useAppSelector(state => state.auth.data)
    const googleLoading = useAppSelector(state => state.auth.loadingGoogle)
//----------------------Logout Google ---------------------
    const handleLogout = () => {
        dispatch(logout())
    };

    //---------------Modal----------------------------
    const handleOpenModal = () => {
        dispatch(openModal({type: 'addBook', props: {key: 'value'}}));
    }
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
        {name: t('Nav.books'), path: "/books", icon: "/header/book.svg"},
        {name: t('Nav.favorite'), path: "/favorite", icon: "/header/heart.svg"}
    ]
    //---------------------Content-----------------------
    const renderContent = () => {
        if (!googleLoading) {
            return <div>
                <Link to='/login'>
                    <Button name='HeaderButton'>{t('Button.login')}</Button>
                </Link>
                <Link to='/registration'>
                    <Button name='HeaderButton'>{t('Button.registration')}</Button>
                </Link>
            </div>;
        }

        if (tokenResponse) {
            return <div>
                <Button onClick={handleClick} name='UserButton'>
                    <img className={styles.HeaderWrapperUser} src="/header/user.svg" alt="user"/>
                    {tokenResponse.name}</Button>

                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <StyledPopperDiv onClick={handleClose}>


                            <Link to='/account'> <img className={styles.PopperImg} src={tokenResponse.picture}
                                                      alt="img"/></Link>
                            <p className={styles.PopperText}>{t('Popper.text')} {tokenResponse.name} !</p>

                            <div className={styles.PopperButton}>
                                <Button>
                                    <div className={styles.PopperButtonContent} onClick={handleOpenModal}>
                                        <p>{t('Popper.button')}</p>
                                        <img src="/header/plus.svg" alt="plas"/>
                                    </div>
                                </Button>

                            </div>
                            <ul className={styles.PopperNav}>
                                {
                                    popperList.map(item => (
                                        <li className={styles.PopperNavItem}><Link className={styles.PopperNavItemLink}
                                                                                   to={item.path}><img src={item.icon}
                                                                                                       alt="icon"/>{item.name}
                                        </Link></li>
                                    ))
                                }
                                <div className={styles.PopperClosed} onClick={handleLogout}>
                                    <img src="/header/log-out.svg" alt="log out"/>
                                    <p className={styles.PopperClosedText}>{t('Popper.exit')}</p>
                                </div>
                            </ul>




                    </StyledPopperDiv>
                </Popper>
            </div>;
        }

    };

    return <div>{renderContent()}</div>
};

export default PopperUser;