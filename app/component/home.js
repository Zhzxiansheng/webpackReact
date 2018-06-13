import React, { component } from 'react'

import ComponentHeader from './header'

class Home extends React.Component{
    render(){
        return(
            <main>
                <ComponentHeader />
                <h3 className="ac font-18">欢迎来到主页</h3>
            </main>
        )
    }
}
export default Home