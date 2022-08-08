import React from "react";
import FooterStyle from './footer.module.scss'
import Insta from '../../images/Insta.svg'
import FB from '../../images/Facebook.svg'

function Footer() {
    return (
        <footer className={FooterStyle.footer}>
            <img src={Insta} alt="Inst" className={FooterStyle.socialImg}/>
            <img src={FB} alt="Inst" className={FooterStyle.socialImg}/>
            <ul className={FooterStyle.list}>
                <li className={FooterStyle.listItem}>Уход</li>
                <li className={FooterStyle.listItem}>Про бренд</li>
                <li className={FooterStyle.listItem}>Lookbooks</li>
            </ul>
        </footer>
    )
}

export default Footer