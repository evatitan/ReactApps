import React from 'react';
import "./index.css"

export default class Header extends React.Component {
    render() {
        return (
            <div className="todo_header">
                <h2>Todo List</h2>
                <input type="text" id="newTodo" placeholder="Please write a new todo and ENTER"/>
            </div>
        )
    }
}
