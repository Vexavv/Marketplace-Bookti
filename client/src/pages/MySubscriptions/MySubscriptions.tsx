import React from 'react';
import styles from './MySubscriptions.module.scss'
import {useTranslation} from "react-i18next";
import Container from "../../uiComponent/Container/Container";
import Back from "../../uiComponent/Back/Back";
import {useWindowSize} from "../../hooks/useWindowSize";
import {Tab} from "../../types";

const MySubscriptions = () => {
    const {t} = useTranslation('mySubscriptions')
const subscriptionTabs: Tab[] = [
    {id:1, label:t('Tabs.subscriptions'),content:<div></div>},
    {id:2, label:t('Tabs.users'),content:<div></div>}
]
    const { width } = useWindowSize();
    return (
        <Container>
            <Back text={t('Back')}/>
            {width && width <= 900 ? <div>
                MySubscriptions
            </div> : <div>
                My Dextop Version
            </div>}


        </Container>

    );
};

export default MySubscriptions;