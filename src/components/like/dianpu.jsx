import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
import Shop from './body/shop';
import BigShop from './body/bigshop';
import './dianpu.styl';

class Dianpu extends Component {
    state = {
        dianpuTabs: [
            {
                name: '最近浏览',
                type: 'recently',
                path: '/like/dianpu/recently'
            },
            {
                name: '我买过的',
                type: 'bought',
                path: '/like/dianpu/bought'
            },
            {
                name: '我收藏的',
                type: 'collected',
                path: '/like/dianpu/collected'
            },
            {
                name: '发现新店',
                type: 'new',
                path: '/like/dianpu/new'
            },
        ],
        type: 'recently'
    }

    handleDianpuTab = () => {
        const { dianpuTabs, type } = this.state;
        return (
            dianpuTabs.map((dianpuTab) => {
                return (
                    <NavLink to={dianpuTab.path} className="dianpu-tab-item" onClick={() => {
                        console.log(dianpuTab.type)
                        this.setState=({ 
                            type: dianpuTab.type 
                        })
                    }} >
                        <div key={dianpuTab.type}>
                            { dianpuTab.name }
                        </div>
                    </NavLink>
                )
            })
        )
    }

    render() {
        return (
            <Router>
                <div className="dianpu">
                    <div className="dianpu-tab">
                        { this.handleDianpuTab() }
                    </div>
                    <Route path="/like/dianpu/recently" component={Shop} />
                    <Route path="/like/dianpu/bought" component={Shop} />
                    <Route path="/like/dianpu/collected" component={Shop} />
                    <Route path="/like/dianpu/new" component={BigShop} />
                    <Redirect from="/like/dianpu" to="/like/dianpu/recently" />
                </div>
            </Router>
        );
    }
}
 
export default Dianpu;