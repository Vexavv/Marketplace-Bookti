import React, {useState} from 'react';
import styles from './SettingsTabs.module.scss'
import {SettingTabsProps} from "./SettingsTabs.props";

const SettingsTabs: React.FC<SettingTabsProps> = ({ tabs,classNameTab, classNameTabs, classNameTabList, classNamePanel })  => {
    const [activeTab, setActiveTab] = useState<number>(tabs[0]?.id || 0);

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
    };

    return (
        <div className={classNameTabs}>
            <ul className={classNameTabList}>
                {tabs.map(tab =>(
                    <li className={`${classNameTab} ${activeTab === tab.id ? styles.ActiveTab : ''}`} key={tab.id} onClick={() => handleTabClick(tab.id)}>{tab.label}</li>
                ))}
            </ul>
            <div className={classNamePanel}>
                {tabs.map((tab) =>
                    activeTab === tab.id ? (
                        <div key={tab.id}>{tab.content}</div>
                    ) : null
                )}
            </div>

        </div>
    );
};

export default SettingsTabs;