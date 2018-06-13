import React, { component } from 'react'
import { browserHistory } from 'react-router' 

import '../css/login.less'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:null,
            password: null
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        localStorage.setItem("username", this.refs.username.value);
        if (this.refs.username.value != null || this.refs.username.value != undefined){
            window.location.href = location.hash + '/Home'
        }
        
    }

    render(){
        return(
            <div className="login-container">
                <div className="login-content">
                    <p className="ac login-p">用户名： <input type="text" className="username" placeholder="请输入用户名" value={this.state.username} ref="username" /> </p>
                    <p className="ac login-p"> 密码：<input type="password" className="password" placeholder="请输入密码" value={this.state.password} ref="password" /> </p>
                    <p className="ac login-p"> <button className="loginBtn" onClick={this.handleClick}>登录</button> </p>
                </div>
            </div>
        )
    }

}

export default Login