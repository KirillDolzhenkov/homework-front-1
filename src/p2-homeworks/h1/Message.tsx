import React from 'react'
import styles from "./Message.module.css";

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={styles.message}>
            <div>
                <img className={styles.img} src={props.avatar}/>
            </div>
            <div>{props.name}</div>
            <span>{props.message} </span>
            <span>{props.time}</span>

        </div>
    )
}

export {
    Message
}
