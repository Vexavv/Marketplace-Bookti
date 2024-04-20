import React from 'react';
import styles from './Favorite.module.scss'
const Favorite = () => {


const favBooks = null


    return (
        <div>
            {favBooks ? (<div>Loading...</div>) : <p>Favorite Пока ничего нет</p>}


        </div>
    );
};

export default Favorite;