import React from 'react';
import styles from './MySubscriptions.module.scss'
import {useTranslation} from "react-i18next";
import Container from "../../uiComponent/Container/Container";
import Back from "../../uiComponent/Back/Back";
import {useWindowSize} from "../../hooks/useWindowSize";
import {Tab} from "../../types";
import MySubscriptionsUsers from "../../components/MySubscriptionsComponent/MySubscriptionsUsers/MySubscriptionsUsers";
import NewUsers from "../../components/MySubscriptionsComponent/NewUsers/NewUsers";
import SettingsTabs from "../../uiComponent/SettingsTabs/SettingsTabs";

const MySubscriptions = () => {
    const {t} = useTranslation('mySubscriptions')
    const subscriptionTabs: Tab[] = [
        {id: 1, label: t('Tabs.subscriptions'), content: <MySubscriptionsUsers/>},
        {id: 2, label: t('Tabs.users'), content: <NewUsers/>},
    ]
    const {width} = useWindowSize();
    return (

            <Container>
                <Back text={t('Back')}/>
                {width && width <= 900 ?
                    <SettingsTabs tabs={subscriptionTabs}
                                  classNamePanel={styles.TabsPanel}
                                  classNameTabs={styles.Tabs}
                                  classNameTabList={styles.TabsList}
                                  classNameTab={styles.TabsListTab}
                    />
                    : <div>
                        <MySubscriptionsUsers/>
                        <NewUsers/>
                    </div>}


            </Container>



    );
};

export default MySubscriptions;