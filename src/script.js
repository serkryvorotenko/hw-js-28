import React from "react";
import {createRoot} from "react-dom/client";
import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import logger from 'redux-logger';
import {Provider} from 'react-redux'


import './style/style.scss'
import App from "./component/App.jsx";


const initialState = {
    todoList:['todoList1', 'todoList2', 'todoList3']
};
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            state = {
                ...state,
todoList: [...state.todoList, action.payload]
            };
            break;
        }
    }
    return state
}

const rootReducer = combineReducers({
    todoReducer:todoReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));
const root = createRoot(document.getElementById('app'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>);



