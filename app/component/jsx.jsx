import React, { component } from 'react'

import ComponentHeader from './header'

class JSX extends React.Component {
    constructor(props) {
        super(props);
        this.firstClick = this.firstClick.bind(this);
    }

    firstClick() {
        console.log(this);
    }
    render() {
        return (
            <main>
                <ComponentHeader />
                <div className="firstDiv">
                    <h2 className="ac font-18" onClick={this.firstClick}>JSX 页面</h2>
                </div>
            </main>
        )
    }
}

export default JSX