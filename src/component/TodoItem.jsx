import React, {useState} from "react";

export function TodoItem({children}) {

    const [done, setDone] = useState(false)

    const inputOnChange = () => {
        setDone(!done)
    }

    return <div className='todo__item'>
        <p className='todo__item-text'>{children}</p>
        <input className='todo__item-input' type={"checkbox"} onChange={inputOnChange}/>
        <p className='todo__item-status'>{done ? 'Выполнено' : 'Не выполнено'}</p>
    </div>
}

