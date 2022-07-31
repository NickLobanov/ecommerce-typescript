import React from "react";
import mobileLogo from '../../images/mobileLogo.svg'
import Inst from '../../images/Insta.svg'
import Facebook from '../../images/Facebook.svg'
import styles from './mobileMenu.module.scss'

function MobileMenu() {
    return (
        <div className={styles.mobileMenu}>
            <img src={mobileLogo} alt="Логотип" className={styles.mobileLogo} />
            <ul className={styles.list}>
                <li className={styles.listItem}>Мужчины</li>
                <li className={styles.listItem}>Женщины</li>
                <li className={styles.listItem}>Личный кабинет</li>
                <li className={styles.listItem}>Про бренд</li>
            </ul>
            <div className={styles.socialImg}>
                <img src={Inst} alt="Инстаграм" />
                <img src={Facebook} alt="Фб"/>
            </div>
        </div>
    )
}

export default MobileMenu