import React from 'react';
import styles from './MySubscriptions.module.scss'
import {useTranslation} from "react-i18next";
import Container from "../../uiComponent/Container/Container";
import Back from "../../uiComponent/Back/Back";
import {useWindowSize} from "../../hooks/useWindowSize";

const MySubscriptions = () => {
    const {t} = useTranslation('mySubscriptions')

    const { width } = useWindowSize();
    return (
        <Container>
            <Back text={t('Back')}/>
            {width && width <= 500 ? <div>
                MySubscriptions
            </div> : <div>
                My Dextop Version
            </div>}


        </Container>

    );
};

export default MySubscriptions;