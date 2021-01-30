import React from 'react'
import MyHeader from './header'

class Karya extends React.Component {
    render() {
        return (
            <div>
                <MyHeader pict="https://drive.google.com/uc?id=1Q9mkHaAKYRL_fLAA-Vtj9zI8rBshNht9">
                    Our Work
                        <h4 className="fw-light fst-italic text-center">
                        "It's a slow process, but quitting won't speed it up"
                        </h4>
                </MyHeader>
            </div>
        )
    }
}

export default Karya