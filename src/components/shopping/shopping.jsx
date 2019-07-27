import React from 'react';
import './shopping.styl'

class Shopping extends React.Component {
    state = {  }
    render() { 
        return (
            <div className="shopping">
                <div className="shopping-header">购物车</div>
                <div className="shopping-body">
                    {
                        this.props.shopping ? 
                        <div></div> :
                        <div className="shopping-again">
                            <div className="shopping-title">购物车快饿扁了T.T</div>
                            <div className="shopping-text">快给我挑点宝贝</div>
                            <div className="quguangguang">去逛逛</div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
 
export default Shopping;