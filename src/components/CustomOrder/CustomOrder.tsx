import React from "react";
import CustomOrderStyle from './customOrder.module.scss'
import CustomOrderImg from '../../images/CustomOrderImg.svg'

function CustomOrder() {
    return(
        <div className={CustomOrderStyle.wrapper}>
            <h2 className={CustomOrderStyle.title}>Индивидуальные заказы</h2>
            <div className={CustomOrderStyle.orderContainer}>
                <img src={CustomOrderImg} alt="img" />
                <p className={CustomOrderStyle.describe}>Мы принимаем индивидуальные заказы при 100% оплате
                Выбирайте наши модели в индивидуальных цветах и размерах</p>
                <div>
                    <p className={CustomOrderStyle.orderDescribe}>Для индивидуального пошива, оставьте свой номер</p>
                    <div className={CustomOrderStyle.phoneContainer}>
                        <input type="tel" placeholder="+7 999-999-99-99" className={CustomOrderStyle.input}/>
                        <button className={CustomOrderStyle.button}>Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomOrder