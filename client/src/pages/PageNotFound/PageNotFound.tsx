import React from 'react';
import styles from './PageNotFound.module.scss'
import {Link} from "react-router-dom";
const PageNotFound = () => {
    return (
        <div>
            Error: Page not found!!!  <Link to='/'>Home</Link>
        </div>
    );
};

export default PageNotFound;