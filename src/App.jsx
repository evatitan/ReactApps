import React from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends React.Component {
    render() {
        return (
            <div className="todo_container">
                <div className="todo_wrap">
                  <Header />
                  <List />
                  <Footer />
                </div>
            </div>
        )
    }
}


