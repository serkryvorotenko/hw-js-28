import React, {useState} from "react";
import {TodoItem} from "./TodoItem.jsx";
import {connect} from "react-redux";

function App({todoList, addTodoItem}) {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const onAddClick = () => {
        if (inputValue.length === 0)
            return
        addTodoItem(inputValue)
        setInputValue('')
    }

    return (
        <main>
            {todoList.todoList.map((item) => {
                return <TodoItem>
                    {item}
                </TodoItem>
            })}
            <>
                <input type={"text"} onChange={onInputChange} value={inputValue}/>
                <button onClick={onAddClick}>Add</button>
            </>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoItem: (item) => {
            dispatch({
                type: 'ADD',
                payload: item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
