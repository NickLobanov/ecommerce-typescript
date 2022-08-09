import React, {useState} from "react";
import LogInOutStyle from './logInOut.module.scss'
import Modal from "../Modal/Modal";

interface IProps {
    isOpen: boolean,
    closeModalHandle: () => void
}


function LogInOut({isOpen, closeModalHandle}:IProps) {

    const [isLogIn, setLogIn] = React.useState<boolean>(true)

    return (
        <Modal isOpen={isOpen}>
            <div className={LogInOutStyle.LogInContainer}>
                <h2 className={LogInOutStyle.LogInTitle}>{isLogIn ? 'Вход' : 'Регистрация'}</h2>
                {isLogIn ?
                    <p className={LogInOutStyle.LogInSubtitle}>Нет учетной записи? <span onClick={() => setLogIn(!isLogIn)}>Зарегистрируйся</span></p> :
                    <p className={LogInOutStyle.LogInSubtitle}>У вас уже есть аккаунт? <span onClick={() => setLogIn(!isLogIn)}>Войти</span></p>
                }
                <div className={LogInOutStyle.inputWrap}>
                    {
                        !isLogIn && 
                        <label className={LogInOutStyle.labelWrap}>
                            Имя:
                            <input className={LogInOutStyle.LogInInput} type="text" />
                        </label>
                    }
                    <label className={LogInOutStyle.labelWrap}>
                        Email
                        <input className={LogInOutStyle.LogInInput} type="email" />
                    </label>
                    <label className={LogInOutStyle.labelWrap}>
                        Пароль
                        <input className={LogInOutStyle.LogInInput} type="password" />
                    </label>
                </div>
                {isLogIn && <p className={LogInOutStyle.fogotPass}>Забыли пароль?</p>}
                <button className={LogInOutStyle.LogInButton}>{isLogIn ? 'Войти' : 'Зарегистрироваться'}</button>
                <svg onClick={() => closeModalHandle()} className={LogInOutStyle.closeBtn} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4497 0.843058L12.1569 1.55016L7.20711 6.49991L12.1569 11.4497L11.4497 12.1568L6.5 7.20702L1.55025 12.1568L0.843146 11.4497L5.79289 6.49991L0.843146 1.55016L1.55025 0.843058L6.5 5.79281L11.4497 0.843058Z" fill="#58595B"/>
                </svg>
            </div>
        </Modal>
        
    )
}

export default LogInOut