import React, { Component } from 'react';
import './shop.styl';

class Shop extends Component {
    state = {  }
    render() { 
        return (
            <div className="shop-body">
                {
                    this.props.dianpu ? 
                    <div></div> :
                    <div className="look-again">
                        <div className="look-text">你还没有留下任何足迹赶快去逛一逛吧！</div>
                        <div className="guangyiguang">逛一逛</div>
                    </div>
                }
            </div>
        );
    }
}
 
export default Shop;