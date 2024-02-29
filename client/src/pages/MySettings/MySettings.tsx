import React from 'react';
import styles from './MySettings.module.scss'
import Container from "../../uiComponent/Container/Container";
import SettingsTabs from "../../components/MySettingsComponents/SettingsTabs/SettingsTabs";
import {Tab} from "../../types";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import Back from "../../uiComponent/Back/Back";
import UpdateData from "../../components/MySettingsComponents/SettingsTabs/UpdateData/UpdateData";
import Notification from "../../components/MySettingsComponents/SettingsTabs/Notification/Notification";
import ChangePassword from "../../components/MySettingsComponents/SettingsTabs/ChangePassword/ChangePassword";

const MySettings = () => {
    const {t} = useTranslation('mySettings')

    const tabData: Tab[] = [
        { id: 1, label: t('Tabs.data'), content: <UpdateData/> },
        { id: 2, label: t('Tabs.notification'), content: <Notification/>},
        { id: 3, label: t('Tabs.password'), content: <ChangePassword/> },
    ];
    return (
        <Container>
           <Back text={t('Back')}/>
            <SettingsTabs tabs={tabData}/>
        </Container>

    );
};

export default MySettings;