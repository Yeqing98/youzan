import React from 'react';
import axios from 'axios';
import Scroll from '../../common/scroll/Scroll';
import { getFind } from '../../api/getFind';
import shoutibao from '../../image/shoutibao.png'
import './find.styl';

class Find extends React.Component {
    state = {
        navigation: [
            {
                title: '推荐',
                type: 'tuijian'
            },
            {
                title: '37°男',
                type: '37nan'
            },
            {
                title: '水果当季',
                type: 'shuiguo'
            },
            {
                title: '收纳集合',
                type: 'shouna'
            }
        ],
        findGoods: [],
        img: '',
        refreshScroll: false,
        type: 'tuijian'
    }

    componentDidMount() {
        const url = getFind.url;
        const time = getFind.time;
        let { type } = this.state;
        // setTimeout(() => {
            axios.get(url)
                .then(res => {
                    // console.log(res)
                    const findGoods = res.data.data[type];
                    // console.log(findGoods[0].img)
                    const img = findGoods[0].img
                    this.setState({
                        findGoods: findGoods,
                        img: img
                    })
                })
        // }, time)
    }
    componentDidUpdate() {
        // console.log('update')
        const url = getFind.url;
        const time = getFind.time;
        let { type } = this.state;
        // setTimeout(() => {
            axios.get(url)
                .then(res => {
                    // console.log(res)
                    const findGoods = res.data.data[type];
                    // console.log(findGoods[0].img)
                    const img = findGoods[0].img
                    this.setState({
                        findGoods: findGoods,
                        img: img
                    })
                })
        // }, time)
    }

    // handleChange = (e) => {
    //     console.log(e)
    // }

    renderNav = () => {
        const { navigation, type } = this.state;
        return (
            navigation.map((item, index) => {
                return (
                    <div className="nav-item" key={item.type} onClick={() => {
                        // console.log(item.type)
                        this.setState({
                            type: item.type
                        })
                    }}>
                        <span style={type === item.type ? {color: '#fff', fontSize: '18px'} : {}}>{item.title}</span>
                        <div className="underline" style={{visibility: type === item.type ? '' : 'hidden'}} ></div>
                    </div>
                )
            })
        )
    }

    renderGoods = () => {
        const { findGoods } = this.state;
        return (
            findGoods.map((item, index) => {
                return (
                    <div className="find-item" index={index}>
                        <img src={item.img} alt="" className="item-img" />
                        <div className="item-title">{item.title}</div>
                        <div className="item-message">
                            <div className="item-shop">
                                <img src={item.avatar} alt="" className="avatar" />
                                <div className="item-name">{item.name}</div>
                            </div>
                            <div className="want">
                                <img src={shoutibao} alt="" className="want-img" />
                                <span>{item.want}人想买</span>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        const { img, refreshScroll } = this.state
        // console.log(findGoods[0].img)
        return (
            <div className="find-content">
                <img src={img} alt="" className="backGround" />
                <div className="find-header">
                    <span>发现</span>
                </div>
                <div className="find-navigation">
                    {this.renderNav()}
                </div>
                <div className="find-goods">
                    <Scroll refresh={refreshScroll}>
                        <div>
                            {this.renderGoods()}
                        </div>
                    </Scroll>
                </div>
            </div>
        );
    }
}

export default Find;