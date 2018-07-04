import React from 'react'
// import { Router, Route, Link } from 'react-router'
import  hashHistory  from 'react-router'

import ComponentHeader from './component/header'
import Login from './component/login'
import Home from './component/home'
import First from './component/first'
import Greeter from './component/Greeter'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


class APP extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route component={Login} exact path="/"></Route>
                    {/* <ComponentHeader /> */}
                    <main>
                        <Route component={Home} path="/Home" ></Route>
                        <Route component={First} path="/first" ></Route>
                        <Route component={Greeter} path="/greeter" ></Route>
                    </main>
                </div>
            </Router> 
        )
    }
}
    



export default APP 