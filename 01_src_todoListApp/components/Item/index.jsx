import React from 'react';
import "./index.css"

export default class Item extends React.Component {

    state={mouse:false}

    handleMouse=(flag)=>{
        return ()=>{
            //console.log(flag);
            this.setState({mouse:flag})
        }
    }

    handleUpdate=(id)=>{
        return(event)=>{
            console.log(event.target.checked)
            this.props.updateTodo(id,event.target.checked)
        }
    }

    handleDelete=(id)=>{
        console.log(id)
        this.props.deleteTodo(id)
    }

    render() {
        const {mouse}= this. state
        const {id, name, done}= this.props
        return (
                <li className="todo_item" onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
                    <label className="todo_label">
                        <input type="checkbox" checked={done} onChange={this.handleUpdate(id)}/>
                        <span className="todo_name">{name}</span>
                    </label>
                    <button onClick={()=>this.handleDelete(id)} className="todo_btn" style={{display: mouse? "block" : "none"}}>Delete</button>
                </li>
        )
    }
}
