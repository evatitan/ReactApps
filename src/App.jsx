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
    render() {
        const {todos}=this.state
        return (
            <div className="todo_container">
                <div className="todo_wrap">
                  <Header />
                  <List todos={todos}/>
                  <Footer />
                </div>
            </div>
        )
    }
}


