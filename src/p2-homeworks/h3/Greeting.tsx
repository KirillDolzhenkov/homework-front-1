import React, {ChangeEvent} from 'react'
import styles from './Greeting.module.css'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event:  ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (props ) => {

    const {
        name,
        setNameCallback,
        addUser,
        error,
        totalUsers
    } = props; // деструктуризация пропсов

    const inputClass = error ? s.error : ''; // need to fix with (?:)

    return (
        <div className={styles.greetItems}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span> {totalUsers}</span>
            {error && <div className={s.errorText}>error, please enter correct value {error}</div>}
        </div>
    )
}

export default Greeting
