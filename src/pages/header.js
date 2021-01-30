import React, { Component } from 'react'

class MyHeader extends Component {
    render() {
        return (
            <div className={"row align-items-center mx-auto my-header"}>
                <br></br>
                <div className="col-md-8">
                        <h1 className="text-center">{this.props.children}</h1>
                </div>
                <div className="col-md-4">
                    <img className="header-pict img-fluid mx-auto d-block" src={this.props.pict}/>
                </div>
            </div>
        )
    }
}

export default MyHeader