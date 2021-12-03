import React from 'react';
import PubSub from "pubsub-js";
import axios from "axios";
import "./index.css"
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

export default class Search extends React.Component {

    search=()=>{

        const {keyWordElement:{value:keyWord}}=this
        PubSub.publish('searchInfo',{isStart:false,isLoading:true})

        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response=>{
                PubSub.publish('searchInfo',{isLoading:false,users:response.data.items})
            },
            error=>{
                PubSub.publish('searchInfo',{err:error.message})
            }
        )
    }
    render() {
        return (
            <section>
                <div>
                     <h1>Search Github Users</h1>
                </div>
                
                <div>
                    <input ref={c=>this.keyWordElement=c} className="searchInput" type="text" placeholder="write a user name"/> &nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

