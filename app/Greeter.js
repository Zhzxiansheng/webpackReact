import React, { component } from 'react'
import config from "./config.json"; //引入json

import styles from './css/Greeter.css';
import resets from './css/main.css';

// 写一个react组件

class Greeter extends React.Component{
    render(){
        return(
            <div className={`${styles.greeter} ${resets.ac}`}>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter