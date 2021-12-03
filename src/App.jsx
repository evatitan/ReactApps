import React from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends React.Component {

    state={todos:[
        {id:"001",name:"Learn React", done:true},
        {id:"002",name:"Learn Angular", done:true},
        {id:"003",name:"Learn Vue", done:false},
    ]}

    addTodo=(todoObj)=>{
        const {todos}=this.state;
        const newTodos=[todoObj,...todos]
        this.setState({todos:newTodos})
    }

    updateTodo=(id,done)=>{
        const {todos}=this.state;
        const newTodos= todos.map((todoObj)=>{
            if(todoObj.id===id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }



    render() {
        const {todos}=this.state
        return (
            <div className="todo_container">
                <div className="todo_wrap">
                  <Header todos={todos} addTodo={this.addTodo}/>
                  <List todos={todos} updateTodo={this.updateTodo}/>
                  <Footer />
                </div>
            </div>
        )
    }
}


