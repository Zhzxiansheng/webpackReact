import React, { Component } from 'react';


import First from './first'
import Greeter from './Greeter'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import '../css/header.less'

class ComponentHeader extends Component {

    constructor() {
        super();
        this.state = {
            miniHeader: false,
            username:'默认用户'
        }
    }

    componentWillMount(){
        var username = localStorage.getItem('username');
        this.setState({
            username: username
        })
    }
    switchHeader() {
        this.setState({
            miniHeader: !this.state.miniHeader
        })
    };
    render() {
        const styleComponentHeader = {
            header: {
                backgroundColor: "#333333",
                color: "#FFFFFF",
                
                //"padding-top": (this.state.miniHeader) ? "3px" : "15px",
                //paddingBottom: (this.state.miniHeader) ? "3px" : "15px"
            },
            //还可以定义其他的样式
        };
        var userName = 'anniu';
        var flag = true;
        var html = <h2>很可以的</h2>;
        var html2 = "IMO \u0020 OC&nbsp;LESSON abcd";

        return (
            <header className="ComponentHeader"
                onClick={this.switchHeader.bind(this)}
                style={styleComponentHeader.header}>
                <ul className="clearFloat">
                    <li className="fl"><Link to='/Home'>欢迎页</Link></li>
                    <li className="fl"><Link to='/First'>First</Link></li>
                    <li className="fl"><Link to='/Greeter'>Greeter</Link></li>
                    <li className="fl fr signOut"><Link to='/'>退出登录</Link></li>
                    <li className="fl fr  signOut">{this.state.username}</li>
                </ul>
            </header>
        );
    }
}

export default ComponentHeader;
