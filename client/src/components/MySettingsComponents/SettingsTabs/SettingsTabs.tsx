import React, {useState} from 'react';
import styles from './SettingsTabs.module.scss'
import {SettingTabsProps} from "./SettingsTabs.props";


const SettingsTabs: React.FC<SettingTabsProps> = ({ tabs })  => {
    const [activeTab, setActiveTab] = useState<number>(tabs[0]?.id || 0);

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
    };

    return (
        <div className={styles.Tabs}>
            <ul className={styles.TabsTabList}>
                {tabs.map(tab =>(
                    <li className={`${styles.TabsTabListTab} ${activeTab === tab.id ? styles.ActiveTab : ''}`} key={tab.id} onClick={() => handleTabClick(tab.id)}>{tab.label}</li>
                ))}
            </ul>
            <div className={styles.TabsPanel}>
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