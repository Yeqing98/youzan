import React from 'react';
import BScroll from 'better-scroll';
import './Scroll.styl';


class Scroll extends React.Component {
    state = {  }
    componentDidUpdate() {
        if(this.bscroll && this.props.refresh) {
            this.bscroll.refresh()
        }
    }
    componentDidMount() {
        if(!this.bscroll) {
            this.bscroll = new BScroll(this.refs.scrollView, {
                probeType: 3,
                click: ()=>{}
            })
            // this.bscroll.on('scroll', (e) => {
            //     this.props.onScroll(e);
            // })
        }
    }
    componentWillUnmount() {
        this.bscroll = null;
    }
    render() { 
        return (
            <div className="scroll-view" ref="scrollView">
                { this.props.children }
            </div>
        );
    }
}
 
export default Scroll;