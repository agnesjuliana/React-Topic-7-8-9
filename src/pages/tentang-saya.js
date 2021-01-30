import React from 'react'
import MyHeader from './header'

class TentangSaya extends React.Component {
    render() {
        return (
            <div>
                <MyHeader pict="https://drive.google.com/uc?id=1B1C6-GHtd_txup86zDYRmKUjGCaG5HO_">
                    About Me
                        <h4 className="fw-light fst-italic text-center">
                        "I just belive to my self"
                        </h4>
                </MyHeader>
            </div>
        )
    }
}

export default TentangSaya