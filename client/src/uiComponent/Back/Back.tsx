import React from 'react';
import styles from "./Back.module.scss";
import {useNavigate} from "react-router-dom";
import{BackProps} from "./Back.props";

const Back: React.FC<BackProps> = ({ text }) => {
    const navigate = useNavigate();
    return (
        <button className={styles.Back} onClick={() => navigate(-1)}>
            <img src="/bookshelf/arrow-back.svg" alt="Back"/>
            <span>{text}</span>
        </button>
    );
};

export default Back;