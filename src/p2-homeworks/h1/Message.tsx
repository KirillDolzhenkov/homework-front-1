import React from 'react'
import s from "./Message.module.css";

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessagePropsType> = (props) => {

    return (
       /* <div className={s.message}>
            <div>
                <img className={s.img} src={props.avatar}/>
            </div>
            <div className={`${s.leftPoint} `}></div>
            <div className={`${s.messageBlock}`}>
                <div>{props.name}</div>
                <div >{props.message} </div>
                <div>{props.time}</div>
            </div>
        </div>*/
        <div className={s.message}>
            <img className={s.img} alt='Текст' src={props.avatar}/>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

            <div className={s.clear}></div>

        </div>
    )
}

export {
    Message
}
