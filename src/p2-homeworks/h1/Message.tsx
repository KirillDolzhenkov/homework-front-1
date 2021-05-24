import React from 'react'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const  Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div>
            <div>
                <img src={props.avatar} className="img"/>
            </div>
            <div>{props.name}</div>
            <div> {props.message}</div>
            <div>{props.time}</div>
        </div>
    )
}

