import React from 'react';
import Item from "../Item";
import "./index.css";

export default class List extends React.Component {
    render() {
        const {todos}= this.props
        return (
            <ol className="todo_list">
                {
                    todos.map((todoObj)=>{
                        return <Item key={todoObj.id} {...todoObj}/>
                    })
                }
            </ol>
        )
    }
}
