import React from "react";
import sectionItemStyle from './sectionItem.module.scss'

interface IProps {
    title: string,
    img: string,
    color: string
}

function SectionItem({title, img, color}:IProps) {
    return (
        <div className={`${sectionItemStyle.container} ${color === 'pink' ? sectionItemStyle.container_pink : sectionItemStyle.container_blue}`}>
            <img src={img} alt="Img" className={sectionItemStyle.img}/>
            <span className={sectionItemStyle.text}>{title}</span>
        </div>
    )
}

export default SectionItem