import React from 'react';
import styles from './ContentItem.module.scss';
import {Link} from "react-router-dom";
import {IContentItemPops} from "./ContentItem.pops";

const ContentItem:React.FC<IContentItemPops> = ({id,title,author,imageUrl}) => {
    return (
        <li className={styles.List} key={id}>
            <p>{title}</p>
            <p>{author}</p>
            <Link to={`/separatePage/${id}`}>
                <button>click</button>
            </Link>
        </li>
    );
};

export default ContentItem;