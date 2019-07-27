import React from 'react';
import {xiaoxi,
    avatar,
    daifahuo,
    daifukuan,
    daipingjia,
    daishouhuo,
    tuikuan,
    toRight,
    kefu,
    dianpu} from '../../image/mine';
import './mine.styl';

class Mine extends React.Component {
    state = {
        orders: [
            {
                title: '待付款',
                img: daifukuan
            },
            {
                title: '待发货',
                img: daifahuo
            },
            {
                title: '待收货',
                img: daishouhuo
            },
            {
                title: '待评价',
                img: daipingjia
            },
            {
                title: '退款/售后',
                img: tuikuan
            },
        ],
        wallets: [
            {
                title: '优惠券',
                num: 0
            },
            {
                title: '店铺会员',
                num: 0
            },
            {
                title: '分期支付',
                num: 0.00
            },
        ],
        tools: [
            {
                title: '关注商品',
                num: 0
            },
            {
                title: '关注店铺',
                num: 0
            },
            {
                title: '喜欢内容',
                num: 0
            },
            {
                title: '浏览商品',
                num: 0
            },
        ]
    }

    renderOrder = () => {
        const { orders } = this.state;
        return (
            orders.map((order, index) => {
                return (
                    <div className="order-item" key={index}>
                        <img src={order.img} alt="" className="orderItem-img" />
                        <div>{order.title}</div>
                    </div>
                )
            })
        )
    }

    renderWallet = () => {
        const { wallets } = this.state;
        return (
            wallets.map((wallet, index) => {
                return (
                    <div className="wallet-item" key={index}>
                        <div className="wallet-num">{wallet.num}</div>
                        <div className="wallet-type">{wallet.title}</div>
                    </div>
                )
            })
        )
    }

    renderTool = () => {
        const { tools } = this.state;
        return (
            tools.map((tool, index) => {
                return (
                    <div className="tool-item" key={index}>
                        <div className="tool-num">{tool.num}</div>
                        <div className="tool-type">{tool.title}</div>
                    </div>
                )
            })
        )
    }

    render() { 
        return (
            <div className="mine">
                <div className="mine-message">
                    <img src={xiaoxi} alt="" className="mine-img" />
                </div>
                <div className="login">
                    <img src={avatar} alt="" className="avatar" />
                    <div className="login-register">登录/注册</div>
                </div>
                <div className="mine-order">
                    <div className="order-header">
                        <div className="myOrder">我的订单</div>
                        <div className="allOrder">
                            <div>全部订单</div>
                            <img src={toRight} alt="" className="toRight" />
                        </div>
                    </div>
                    <div className="order-body">
                        { this.renderOrder() }
                    </div>
                </div>
                <div className="mine-wallet">
                    <div className="wallet-header">
                        <div className="myWallet">我的钱包</div>
                        <div className="allWallet">
                            <div>进入钱包</div>
                            <img src={toRight} alt="" className="toRight" />
                        </div>
                    </div>
                    <div className="wallet-body">
                        { this.renderWallet() }
                    </div>
                </div>
                <div className="mine-tool">
                    <div className="tool-header">我的工具</div>
                    <div className="tool-body">
                        { this.renderTool() }
                    </div>
                    <div className="tool-other">
                        <div className="service">
                            <img src={kefu} alt="" className="service-img" />
                            <div className="service-text">
                                <div className="youzan-service">有赞客服</div>
                                <div className="problem">有问题随时找小赞</div>
                            </div>
                        </div>
                        <div className="opening">
                            <img src={dianpu} alt="" className="opening-img" />
                            <div className="opening-text">
                                <div className="want-opening">我要开店</div>
                                <div className="make-money">轻轻松松赚钱</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Mine;