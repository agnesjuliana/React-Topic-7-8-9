import React from 'react'
import MyHeader from './header'

class Beranda extends React.Component {
    render() {
        return (
            <div>
                <MyHeader pict="https://drive.google.com/uc?id=1AlrUNM5RlTCb7D_LMq27aJhpNkZfMgBG">
                    Welcome to My Home
                        <h4 className="fw-light fst-italic text-center">
                        "There is no failure, only WINING or LEARNING"
                        </h4>
                </MyHeader>
            </div>
        )
    }
}

export default Beranda