import React from 'react';
import styles from './Description.module.scss'
import Container from "../Container/Container";
import {Link} from "react-router-dom";
import HTag from '../HTag/HTag'
const Description = () => {
    return (
        <Container>
            <div>
                <div>
                    <img src="/home/Description-IMG.png" alt="Description"/>
                </div>
                <div>
                    <HTag tag='h2'>BookBridgeHub</HTag>
                    <p>
                        BookBridgeHub - це онлайн платформа, яка зближує книголюбів та дозволяє їм обмінювати свої
                        улюблені книги з іншими членами спільноти. Саме тут ви можете знайти нові книги для читання,
                        поділитися своїми книгами з іншими та розширити свою бібліотеку безкоштовно. Подаруйте друге
                        життя книгам та знайомтесь з новими літературними шедеврами.
                    </p>
                    <Link to='/about'>Дізнатись більше</Link>
                </div>
            </div>

        </Container>

    );
};

export default Description;