import React from "react";
import ModalStyle from './modal.module.scss'

interface IProps {
    children: JSX.Element,
    isOpen: boolean
}

function Modal({children, isOpen}:IProps) {
    return (
        <div className={`${ModalStyle.modalContainer} ${isOpen && ModalStyle.modalContainerOpen}`}>
            {children}
        </div>
    )
}

export default Modal