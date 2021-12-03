import React from 'react';
import Item from "../Item";
import "./index.css";

export default class List extends React.Component {
    render() {
        return (
            <ol className="todo_list">
                <Item />
            </ol>
        )
    }
}
