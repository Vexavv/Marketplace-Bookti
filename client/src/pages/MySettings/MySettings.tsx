import React from 'react';
import styles from './MySettings.module.scss'
import Container from "../../uiComponent/Container/Container";
import SettingsTabs from "../../uiComponent/SettingsTabs/SettingsTabs";
import {Tab} from "../../types";
import {useTranslation} from "react-i18next";
import Back from "../../uiComponent/Back/Back";
import UpdateData from "../../components/MySettingsComponents/UpdateData/UpdateData";
import Notification from "../../components/MySettingsComponents/Notification/Notification";
import ChangePassword from "../../components/MySettingsComponents/ChangePassword/ChangePassword";

const MySettings = () => {
    const {t} = useTranslation('mySettings')
    const tabData: Tab[] = [
        {id: 1, label: t('Tabs.data'), content: <UpdateData/>},
        {id: 2, label: t('Tabs.notification'), content: <Notification/>},
        {id: 3, label: t('Tabs.password'), content: <ChangePassword/>},
    ];
    return (
        <Container>
            <Back text={t('Back')}/>
            <SettingsTabs tabs={tabData} classNamePanel={styles.TabsPanel} classNameTabs={styles.Tabs}
                          classNameTabList={styles.TabsTabList} classNameTab={styles.TabsTabListTab}/>
        </Container>

    );
};

export default MySettings;