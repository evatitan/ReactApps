import React from 'react';
import "./index.css"

export default class Item extends React.Component {
    render() {
        return (
            <div>
            <li className="todo_item">
                <input type="checkbox" defaultChecked="true"/>
                <span>JS</span>
                <button className="todo_btn" style={{display:"none"}}>Delete</button>
            </li>
            <li className="todo_item">
                <input type="checkbox" defaultChecked="true"/>
                <span>JS</span>
                <button className="todo_btn" style={{display:"none"}}>Delete</button>
            </li>
            <li className="todo_item">
                <input type="checkbox" defaultChecked="true"/>
                <span>JS</span>
                <button className="todo_btn" style={{display:"none"}}>Delete</button>
            </li>

            </div>

        )
    }
}
