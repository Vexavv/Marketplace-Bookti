import React from 'react';
import {MobileCategoryProps} from "./MobileCategory.props";
import styles from './MobileCategory.module.scss';
import Drawer from "@mui/material/Drawer";
import LibraryCategory from "../LibraryCategory";
import {useTranslation} from "react-i18next";

const MobileCategory: React.FC<MobileCategoryProps> = ({mobileCategoryOpen, mobileCategoryToggle}) => {
    const {t} = useTranslation('library');
    return (
        <Drawer anchor="left"
                component="div"
                variant="temporary"
                open={mobileCategoryOpen}
                onClose={mobileCategoryToggle}
                ModalProps={{keepMounted: true}}
                SlideProps={{timeout: 400}}
                sx={{
                    display: {md: 'none'},
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: {xs: '80%', sm: '50%', md: 'none'},
                        overflow: 'hidden',
                        // color: "#FFF",
                        // display: {md: 'none'},
                        // '&:active': {color: '#BA933E'}
                    }
                }}>
            <div className={styles.Menu}>
                <h3 className={styles.MenuTitle}>{t('Category.Book')}</h3>
                <img className={styles.MenuClose} onClick={mobileCategoryToggle} src="/header/x.svg" alt="close"/>
                <div className={styles.MenuList}>
                    <LibraryCategory/>
                </div>


            </div>


        </Drawer>
    );
};

export default MobileCategory;
