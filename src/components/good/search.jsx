import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import "./search.styl";
import fenlei from "../../image/fenlei.png";
import sousuo from "../../image/sousuo.png";
import xiaoxi from "../../image/xiaoxi.png";
import Classify from "./classify";

class Search extends React.Component {
    state = {  }
    render() { 
        return(
            <Router>
            <div className="search-content">
                <NavLink className="nav-link" to="/good/classify">
                    <div className="classify" >
                        <img className="classify-img" src={fenlei} alt=""/>
                        <span className="classify-text">分类</span>
                    </div>
                </NavLink>
                <NavLink className="nav-linkSearch" to="/good/classify">
                    <div className="search">
                        <img className="search-img" src={sousuo} alt=""/>
                        <span className="search-text">精选会员</span>
                    </div>
                </NavLink>
                <div className="message" >
                    <img className="message-img" src={xiaoxi} alt=""/>
                    <span className="message-text">消息</span>
                </div>
            </div>
            <Route path="/good/classify" component={Classify} />
            </Router>
        );
    }
}
 
export default Search;