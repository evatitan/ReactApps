import React from 'react';
import PubSub from "pubsub-js";
import "./index.css";

// import styled from 'styled-components';
// import PropTypes from 'prop-types';


export default class List extends React.Component {

    state={
        users:[],
        isStart:true,
        isLoading:false,
        err:''
    }

    componentDidMount(){
        this.token=PubSub.subscribe("searchInfo",(msg,stateObj)=>{
            this.setState(stateObj)
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users,isStart,isLoading,err} = this.state
        return (
            <div className="row">
                {
                    isStart ? <h3 style={{textAlign:"center",opacity:"0.5", color:'#1a535c'}}>Welcome!</h3> :
                    isLoading ? <h3 style={{textAlign:"center",opacity:"0.5", color:'#1a535c'}}>Loading...</h3> :
                    err ? <h3 style={{textAlign:"center",opacity:"0.5", color:"red"}}>{err}</h3> :

                    users.map((userObj)=>{
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url}>
                                    <img src={userObj.avatar_url} alt="avatar" />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

