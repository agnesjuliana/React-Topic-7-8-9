import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-md-12">
                <br />
                <div className="card">
                    <div className="card-body row">
                        {/* DISPLAY COVER START */}
                        <div className="col-4">
                            <img src={this.props.cover}
                                className="img"
                                height="200" />
                        </div>
                        {/* DISPLAY COVER END */}

                        {/* DESCRIPTION START */}
                        <div className="col-8">
                            <h5 className="text-info">
                                {this.props.judul}
                            </h5>
                            <h6 className="text-dark">
                                Penulis: {this.props.penulis}
                            </h6>
                            <h6 className="text-dark">
                                Penerbit: {this.props.penerbit}
                            </h6>
                            <h6 className="text-dark">
                                Harga: {this.props.harga}
                            </h6>
                        </div>
                        {/* DESCRIPTION END */}
                        <div>
                            <br/>
                        </div>
                        {/* BUTTON FIELD START */}
                        <div class="d-grid gap-2 d-md-block">
                            <button
                                className="btn btn-primary"
                                onClick={this.props.onEdit}>
                                EDIT
                            </button>

                            <button
                                className="btn btn-danger"
                                onClick={this.props.onDrop}>
                                HAPUS
                            </button>

                            <button
                                className="btn btn-success"
                                onClick={this.props.onCart}>
                                TAMBAHKAN KE KERANJANG
                            </button>
                        </div>
                        {/* BUTTON FIELD START */}

                    </div>
                </div>
            </div>
        )
    }
}

export default Card