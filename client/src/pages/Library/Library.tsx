import React, {useState} from 'react';
import styles from './Library.module.scss'
import {useTranslation} from "react-i18next";

import Container from "../../uiComponent/Container/Container";
import Content from "../../components/LibraryComponents/Content/Content";
import Back from "../../uiComponent/Back/Back";
import LibrarySearch from "../../components/LibraryComponents/LibrarySearch/LibrarySearch";
import {useWindowSize} from "../../hooks/useWindowSize";
import LibraryCategory from "../../components/LibraryComponents/LibraryCategory/LibraryCategory";
import MobileCategory from "../../components/LibraryComponents/LibraryCategory/MobileCategory/MobileCategory";


const Library = () => {
    const {t} = useTranslation('library');
    const { width } = useWindowSize();
    const [mobileCategory, setMobileCategory] = useState(false)

    const mobileCategoryToggle = () => {
        setMobileCategory(current => !current)
    }

    return (
        <Container>
            <div className={styles.Wrapper}>
                <div className={styles.WrapperArrow}>
                    <Back text={t('Arrow')}/>
                    <div>
                        {width && width <= 900 ? <img onClick={mobileCategoryToggle} src="/library/categoryHandler.svg" alt="handler"/> : <LibrarySearch/> }
                    </div>
                </div>
                <div className={styles.WrapperSearch}><LibrarySearch/></div>
                <div className={styles.WrapperCategory}><LibraryCategory/></div>
                <div className={styles.WrapperContent}><Content/></div>
            </div>
<MobileCategory mobileCategoryOpen={mobileCategory} mobileCategoryToggle={mobileCategoryToggle} />

        </Container>

    );
};

export default Library;