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

    render() {
        const {mouse}= this. state
        const {id, name, done}= this.props
        return (
            <div>
                <li style={{backgroundColor: mouse? "#ced4da" : "#e5e5e5"}} className="todo_item" onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
                    <input type="checkbox" checked={done} onChange={this.handleUpdate(id)}/>
                    <span>{name}</span>
                    <button className="todo_btn" style={{display: mouse? "block" : "none"}}>Delete</button>
                </li>
            </div>

        )
    }
}
