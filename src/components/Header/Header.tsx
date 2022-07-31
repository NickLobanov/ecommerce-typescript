import React from "react";
import style from './header.module.scss'
import Logo from '../../images/Logo.svg'
import Basket from '../../images/Basket.svg'
import Burger from '../../images/Burger.svg'

function Header() {
    return (
        <header className={style.header}>
            <ul className={style.list}>
                <li className={style.burgerMenu}>
                    <img src={Burger} alt="Бургер меню" />
                </li>
                <li className={style.listItem}>Женщинам</li>
                <li className={style.listItem}>Мужчинам</li>
                <li className={style.listItem}>Контакты</li>
            </ul>
            <img src={Logo} alt="Logo" className={style.logo}/>
            <ul className={style.list}>
                <li className={style.listItem}>Личный кабинет</li>
                <li>
                    <img src={Basket} alt="Корзина" />
                </li>
            </ul>
        </header>
    )
}

export default Header