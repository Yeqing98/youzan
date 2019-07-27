import React from 'react';
import Swiper from 'swiper';
import axios from 'axios';
import Scroll from '../../common/scroll/Scroll';
import { getGoods } from '../../api/getGoods';
import Search from './search';
import baozheng from '../../image/baozheng.png';
import { guanggaoList } from '../../image/guanggao.js';
import { recommend } from '../../image/recommend.js';
import dongtaitu from '../../image/dongtaitu.jpg'
import toRight from '../../image/to-right.png';
import './good.styl';
import 'swiper/dist/css/swiper.min.css';

class Good extends React.Component {
    state = {
        refreshScroll: false,
        todayWillRob: [],
        carefully: []
    }
    componentDidMount() {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: true,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination'
            }
        })
        const url = getGoods.url;
        const time = getGoods.time;
        setTimeout(() => {
            axios.get(url)
                .then(res => {
                    // console.log(res)
                    const todayWillRob = res.data.data.todayWillRob.slice(0,3);
                    const carefully = res.data.data.carefully;
                    // console.log(todayWillRob)
                    this.setState({
                        todayWillRob,
                        carefully
                    })
                })
        }, time)
    }

    renderSwiperItem = () => {
        return (
            <>
                {
                    guanggaoList.map((item, index) => {
                        return (
                            <div className="swiper-slide" index={index} >
                                <img src={item} width="100%" height="100%" style={{ borderRadius: 10 }} alt="" />
                            </div>
                        )
                    })
                }
            </>
        )
    }

    renderRecommend = () => {
        return (
            <>
                {
                    recommend.map((item, index) => {
                        return (
                            <div className="recommend-item" index={index}>
                                <img src={item.img} alt="" className="recommend-img" />
                                <span>{item.title}</span>
                            </div>
                        )
                    })
                }
            </>
        )
    }

    renderRob = () => {
        const { refreshScroll, todayWillRob, carefully } = this.state;
        return(
            todayWillRob.map((item, index) => {
                return(
                    <div className="rob-item" index={index}>
                        <img src={item.img} alt="" className="rob-img" />
                        <div className="rob-title">{ item.title }</div>
                        <div className="rob-price">
                            <span className="newPrice">￥{ item.newPrice }</span>
                            <span className="oldPrice">￥{ item.oldPrice}</span>
                        </div>
                    </div>
                )
            })
        )
    }

    renderCare = () => {
        const { refreshScroll, todayWillRob, carefully } = this.state;
        return(
            carefully.map((item, index) => {
                return (
                    <div className="carefully-item" index={index}>
                        <img src={item.img} alt="" className="carefully-img" />
                        <div className="carefully-infomation">
                            <div className="carefully-title">{ item.title }</div>
                            <div className="carefully-introduce">
                                { 
                                    item.introduce.map((introdution, i) => {
                                        return(
                                            <div className="introduce-item" index={i}>
                                                { introdution }
                                            </div>
                                        )
                                    })
                                 }
                            </div>
                            <div className="carefully-price">
                                <div className="carefully-newPrice">￥{ item.price }</div>
                                <div className="carefully-count">{ item.count }</div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        const { refreshScroll, todayWillRob, carefully } = this.state;
        return (
            <div className="good-content">
                <Search></Search>
                <div className="scroll">
                    <Scroll refresh={refreshScroll}>
                        <div>
                            <div className="advertisement">
                                <div className="guarantee">
                                    <div className="guarantee-item">
                                        <img className="guarantee-img" src={baozheng} alt="" />
                                        <span>人工优选</span>
                                    </div>
                                    <div className="guarantee-item">
                                        <img className="guarantee-img" src={baozheng} alt="" />
                                        <span>品质担保</span>
                                    </div>
                                    <div className="guarantee-item">
                                        <img className="guarantee-img" src={baozheng} alt="" />
                                        <span>售后无忧</span>
                                    </div>
                                </div>
                                <div className="swiper-container" >
                                    <div className="swiper-wrapper">
                                        {this.renderSwiperItem()}
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                                <div className="recommend">
                                    {this.renderRecommend()}
                                </div>
                                <img src={dongtaitu} alt="" className="goodAdvertisement" />
                            </div>
                            <div className="todayWillRob">
                                <div className="robTitle">
                                    <span className="todayTitle">今日必拼</span>
                                    <div className="successRob"></div>
                                    <div className="moreRob">
                                        <span>更多超值团</span>
                                        <img src={toRight} alt="" className="toRight" />
                                    </div>
                                </div>
                                <div className="robGoods">
                                    { this.renderRob() }
                                </div>
                            </div>
                            <div className="carefully">
                                <div className="carefullyTitle">
                                    <span className="bigTitle">精挑细选</span>
                                    <span className="smallTitle">人工挑选好物</span>
                                </div>
                                <div className="carefullyGoods">
                                    { this.renderCare() }
                                </div>
                            </div>
                        </div>
                    </Scroll>
                </div>
            </div>
        );
    }
}

export default Good;