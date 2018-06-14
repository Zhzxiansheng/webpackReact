import React from 'react'
// import { Router, Route, Link } from 'react-router'
import  hashHistory  from 'react-router'

import ComponentHeader from './header'
import Home from './home'
import First from './first'
import Greeter from './Greeter'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


class APP extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <ComponentHeader />
                    <main>
                        <Route component={Home} exact path="/">
                        </Route>
                        <Route component={First} path="/first" ></Route>
                        <Route path="/greeter" component={Greeter} ></Route>
                    </main>
                </div>
            </Router> 
        )
    }
}
    



export default APP 