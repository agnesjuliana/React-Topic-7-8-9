import React from 'react'

export default class CartContainer extends React.Component {
    render() {
        return (
            <div className="row">
                <div class="col-8 mx-auto">
                    <div className="row">

                        {/* COVER START */}
                        <div className="col-4">
                            <img src={this.props.cover} className="img" height="150" />
                        </div>
                        {/* COVER END */}

                        {/* DESCRIPTION ITEM START */}
                        <div className="col-8">
                            <h3>{this.props.judul}</h3>
                            <h4>Harga: Rp {this.props.harga}</h4>

                            {/* BUTTON ADD AND SUBSTRACT START*/}
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn-outline-primary" onClick={this.props.substract}>-</button>
                                <input type="checkbox" className="btn-check" />
                                <label class="btn btn-outline-primary">{this.props.jumlah}</label>
                                <button type="button" className="btn btn-outline-primary" onClick={this.props.add}>+</button>
                            </div>
                            {/* BUTTON ADD AND SUBSTRACT END */}

                            <h4>Total: Rp {this.props.total}</h4>
                        </div>
                        {/* DESCRIPTION ITEM END */}
                        
                        <div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}