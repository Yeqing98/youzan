import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import Good from "./good/good";
import Find from "./find/find";
import Like from "./like/like";
import Shopping from "./shopping.jsx/shopping";
import Mine from "./mine/mine";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="youzan-view">
          {/* 路由 */}
          <Route path="/good" component={Good} />
          <Route path="/find" component={Find} />
          <Route path="/like" component={Like} />
          <Route path="/shopping" component={Shopping} />
          <Route path="/mine" component={Mine} />
          <Redirect path="/" component={Good} />
        </div>
        <div className="youzan-tab">
          <div className="tab-item">
            <NavLink className="nav-link" to="/good" >
              <div className="tab-img"></div>
              <span>精选</span> 
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/find" >
              <div className="tab-img"></div>
              <span>发现</span> 
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/like" >
              <div className="tab-img"></div>
              <span>喜欢</span> 
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/shopping" >
              <div className="tab-img"></div>
              <span>购物车</span> 
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/mine" >
              <div className="tab-img"></div>
              <span>我的</span>
            </NavLink>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
