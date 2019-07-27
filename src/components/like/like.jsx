import React from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
import Dianpu from './dianpu';
import Shangpin from './shangpin';
import Faxian from './faxian';
import './like.styl';

class Like extends React.Component {
    state = {
        likeHeaders: [
            {
                name: '店铺',
                type: 'dianpu',
                path: '/like/dianpu'
            },
            {
                name: '商品',
                type: 'shangpin',
                path: '/like/shangpin'
            },
            {
                name: '发现',
                type: 'faxian',
                path: '/like/faxian'
            },
        ]
    }

    handleLikeHeader = () => {
        const { likeHeaders } = this.state;
        return (
            likeHeaders.map((likeHeader) => {
                return (
                    <NavLink to={likeHeader.path} style={{textDecoration: "none"}} className="likeHeader-item" >
                        <div  key={likeHeader.type}>
                            { likeHeader.name }
                        </div>
                    </NavLink>
                )
            })
        )
    }

    render() { 
        return (
            <Router>
                <div className="like">
                    <div className="like-header">
                        { this.handleLikeHeader() }
                    </div>
                    <Route path="/like/dianpu" component={Dianpu} />
                    <Route path="/liek/shangpin" component={Shangpin} />
                    <Route path="/like/faxian" component={Faxian} />
                    <Redirect from="/like" to="/like/dianpu" />
                </div>
            </Router>
        );
    }
}
 
export default Like;