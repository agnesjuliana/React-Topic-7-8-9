import React from 'react'
import MyHeader from './header'

class Kontak extends React.Component {
    render() {
        return (
            <div>
                <MyHeader pict="https://drive.google.com/uc?id=1tTW17byoWPMcIkBlsYP1MOavDwGEAFNk">
                    Contact Person
                        <h4 className="fw-light fst-italic text-center">
                        "Maybe I can't, but We can!"
                        </h4>
                </MyHeader>
            </div>
        )
    }
}

export default Kontak