import React from 'react'
import s from "./Message.module.css";

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessagePropsType> = (props) => {

    const {
        avatar,
        name,
        message,
        time,
    } = props;

    return (
        <div className={s.message}>
            <img className={s.img} alt='Текст' src={avatar}/>
            <div className={s.content}>
                <div className={s.name}>{name}</div>
                <div className={s.text}>{message}</div>
                <div className={s.time}>{time}</div>
            </div>
        </div>
    )
}

export {
    Message
}
