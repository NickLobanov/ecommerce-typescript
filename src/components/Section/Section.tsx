import React from "react";
import SectionItem from "../SectionItem/SectionItem";
import forWomanImg from '../../images/forWomanImg.png'
import forManImg from '../../images/forManImg.png'
import SectionStyle from './section.module.scss'

function Section() {
    return (
        <div className={SectionStyle.container}>
            <SectionItem title={'Женщинам'} img={forWomanImg} color={'pink'}/>
            <SectionItem title={'Мужчинам'} img={forManImg} color={'blue'}/>
        </div>
    )
}

export default Section