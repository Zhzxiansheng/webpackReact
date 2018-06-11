import React, { component } from 'react'
import config from "./config.json"; //引入json

import styles from './css/Greeter.css';
import './css/ceshi.less';
// 写一个react组件

class Greeter extends React.Component{
    render(){
        return(
            <div className={`${styles.greeter} ac div`}>
                {config.greetText}
                <p>p的内容</p>
                <p className="p ac"> 这是引用less文件的内容</p>
            </div>
        )
    }
}

export default Greeter