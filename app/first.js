import React, { component } from 'react'


class First extends React.Component{
    constructor(props){
        super(props);
        this.firstClick = this.firstClick.bind(this);
    }

    firstClick(){
        console.log(this)
    }
    render(){
        return(
            <div className="firstDiv">
                <h2 className="ac font-18" onClick={this.firstClick}>First Text and Click me</h2>
            </div>
        )
    }
}

export default First