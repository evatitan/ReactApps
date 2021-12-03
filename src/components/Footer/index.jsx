import React from 'react';
import "./index.css"

export default class Footer extends React.Component {
    render() {
        return (
            <div className="todo_footer">
                <input type="checkbox" defaultChecked="true"/>
                <span> All 2  /  Done  1</span>
                <button className="todo_btn">Delete All Done</button>
            </div>
        )
    }
}

