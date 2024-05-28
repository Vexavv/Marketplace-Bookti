import React from 'react';
import styles from './LibraryCategory.module.scss';
import {useTranslation} from "react-i18next";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {LibraryCategoryProps} from "./LibraryCategory.props";

const LibraryCategory:React.FC<LibraryCategoryProps> = ({onSelectCategory}) => {
    const {t} = useTranslation('library');
    const {width} = useWindowSize();

    const categoryList: { id: number, name: string }[] = [
        {id: 1, name: t('Category.Fiction')},
        {id: 2, name: t('Category.LearningLanguages')},
        {id: 3, name: t('Category.ChildrenLiterature')},
        {id: 4, name: t('Category.History')},
        {id: 5, name: t('Category.Art')},
        {id: 6, name: t('Category.Business')},
        {id: 7, name: t('Category.Science')},
        {id: 8, name: t('Category.Cooking')},
        {id: 9, name: t('Category.Hobbies')},
        {id: 10, name: t('Category.Health')},
        {id: 11, name: t('Category.Computer')},
        {id: 12, name: t('Category.Beauty')},
    ]
    return (
        <div className={styles.Category}>
            {width && width >= 900 ? <h3 className={styles.CategoryTitle}>{t('Category.Book')}</h3> : null}
            <ul className={styles.CategoryList}>
                {categoryList.map(item => (
                    <li className={styles.CategoryListItem} key={item.id} onClick={() => onSelectCategory(item.name)}>{item.name}</li>
                ))}
            </ul>

        </div>
    );
};

export default LibraryCategory;