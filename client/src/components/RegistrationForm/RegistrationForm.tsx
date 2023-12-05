import React from 'react';
import styles from './RegistrationForm.module.scss'
import Logo from "../Header/Logo/Logo";
import LoginFormm from "./LoginForm/LoginFormm";
const RegistrationForm = () => {
    return (
        <div className={styles.Wrapper}>
           <div className={styles.WrapperForm}>
               <div className={styles.WrapperFormLogo}>
                   <Logo mobile={true}/>
               </div>
               <p className={styles.WrapperFormGreetings}>Ласкаво просимо</p>
<LoginFormm/>
           </div>
            <div className={styles.WrapperImage}>
                Image
            </div>
        </div>
    );
};

export default RegistrationForm;