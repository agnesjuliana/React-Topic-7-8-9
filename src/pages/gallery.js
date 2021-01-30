import React from 'react'
import Card from './card'
import MyHeader from './header'
import $ from "jquery"

class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            buku: [
                {
                    isbn: "12345",
                    judul: "Rich Dad Poor Dad",
                    penulis: "Roy Kiyosi",
                    penerbit: "Gramedia",
                    harga: 180000,
                    cover: "https://drive.google.com/uc?id=193jXQSc6XgGqkSLiaUrC_RHjbxERahho"
                },
                {
                    isbn: "1831785",
                    judul: "The Intelligent Investor",
                    penulis: "Bejamin Graham",
                    penerbit: "Amazon",
                    harga: 100000,
                    cover: "https://drive.google.com/uc?id=1DOJMJXVhUzVM-ez-Ig_TSKBVq4Smm3oP"
                },
                {
                    isbn: "181923524",
                    judul: "GRIT",
                    penulis: "Angela Duckworth",
                    penerbit: "Gramedia",
                    harga: 200000,
                    cover: "https://drive.google.com/uc?id=1PG6NfQr8e-UJvuc0hcNJ1xE-3UQzwmBm"
                },
            ],

            action: "",
            isbn: "",
            judul: "",
            penulis: "",
            penerbit: "",
            harga: 0,
            cover: "",
            selectedItem: null,
            keyword: "",
            filterBuku: [],
            user: ""
        }
        this.state.filterBuku = this.state.buku
    }

    // FUNCTION ADD START
    Add = () => {
        window.$("#modal_buku").modal("show")
        this.setState({
            isbn: Math.random(1, 10000000),
            judul: "",
            penulis: "",
            penerbit: "",
            cover: "",
            harga: 0,
            action: "insert"
        })
    }
    // FUNCTION START END

    // FUNCTION EDIT START
    Edit = (item) => {
        $("#modal_buku").modal("show")
        this.setState({
            isbn: item.isbn,
            judul: item.judul,
            penulis: item.penulis,
            penerbit: item.penerbit,
            cover: item.cover,
            harga: item.harga,
            action: "update",
            selectedItem: item
        })
    }
    // FUNCTION EDIT END

    // FUNCTION SAVE START
    Save = (event) => {
        event.preventDefault()

        //tampung dulu data state buku yang bentuknya array itu
        let tempBuku = this.state.buku

        if (this.state.action === "insert") {
            // Ambil data buku yang baru diinput di variable temporary dan push
            tempBuku.push({
                isbn: this.state.isbn,
                judul: this.state.judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                cover: this.state.cover,
                harga: this.state.harga,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].isbn = this.state.isbn
            tempBuku[index].judul = this.state.judul
            tempBuku[index].penulis = this.state.penulis
            tempBuku[index].penerbit = this.state.penerbit
            tempBuku[index].cover = this.state.cover
            tempBuku[index].harga = this.state.harga
        }

        this.setState({ buku: tempBuku })

        //menutup komponen modal
        $("#modal_buku").modal("hide")
    }
    //FUNCTION SAVE END

    // FUNCTION DELETE DATA START
    Drop = (item) => {
        if (window.confirm("apakah anda yakin menghapus data ini?")) {
            let tempBuku = this.state.buku
            let index = tempBuku.indexOf(item)
            tempBuku.splice(index, 1)
            this.setState({ buku: tempBuku })
        }
    }
    //FUNCTION DELETE DATA END

    // FUNCTION SEARCH START
    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode tombol enter

            let keyword = this.state.keyword.toLocaleLowerCase()
            let tempBuku = this.state.buku
            let result = tempBuku.filter(item => {
                return item.judul.toLocaleLowerCase().includes(keyword) ||
                    item.penulis.toLocaleLowerCase().includes(keyword) ||
                    item.penerbit.toLocaleLowerCase().includes(keyword)
            })
            this.setState({ filterBuku: result })
        }
    }
    //FUNCTION SEARCH END

    // FUNCTION SETUSER START
    setUser = () => {
        if (sessionStorage.getItem("user") === null) {
            let prompt = window.prompt("Insert your Name", "")
            if (prompt === null || prompt === "") {
                this.setUser()
            } else {
                //add the user to session storage
                sessionStorage.setItem("user", prompt)
                //add user data to state
                this.setState({ user: prompt })
            }
        } else {
            //if the user already in the session storage
            //access the user data in the session storage
            let name = sessionStorage.getItem("user")
            this.setState({ user: name })
        }
    }
    // FUNCTION SETUSER END

    // FUNCTION CALL USER SESSION STORAGE START
    componentDidMount() {
        this.setUser()
    }
    // FUNCTION CALL USER SESSION STORAGE END

    // FUNCTION ADD TO CART START
    addToCart = (selectedItem) => {
        // create array for cart temporary data
        let tempCart = []

        if (localStorage.getItem("cart") !== null) {
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }

        // check the data that clicked already on cart or not
        let existItem = tempCart.find(item => item.isbn === selectedItem.isbn)

        if (existItem) {
            window.alert("You already add this product on your cart")
        } else {
            let promptJumlah = window.prompt("Select Quantity", "")
            if (promptJumlah !== null && promptJumlah !== "") {
                selectedItem.jumlahBeli = promptJumlah
                //push to tempopary array
                tempCart.push(selectedItem)

                //add temporary array to local storage
                localStorage.setItem("cart", JSON.stringify(tempCart))
            }
        }
    }
    // FUNCTION ADD TO CART END

    render() {
        return (
            <div>
                <MyHeader pict="https://drive.google.com/uc?id=1vB8EYUIvyM2e1KwRgH56c04csH2_kJQ9">
                        Hi, {this.state.user}!
                        <h4 className="fw-light fst-italic text-center">
                        "Today a reader, tomorrow a leader"
                        </h4>
                </MyHeader>

                <div className="container">
                    {/* DISPLAY USER NAME SESSION STORAGE START */}
                    {/* DISPLAY USER NAME SESSION STORAGE END */}

                    {/* FIELD SEARCH START */}
                    <input type="text" className="form-control my-2" placeholder="pencarian"
                        value={this.state.keyword}
                        onChange={ev => this.setState({ keyword: ev.target.value })}
                        onKeyUp={ev => this.searching(ev)} />
                    {/* FIELD SEARCH END */}

                    {/* DISPLAY MAP CARD START */}
                    <div className="row">
                        {this.state.filterBuku.map((item, index) => (
                            <Card
                                judul={item.judul}
                                penulis={item.penulis}
                                penerbit={item.penerbit}
                                harga={item.harga}
                                cover={item.cover}
                                onEdit={() => this.Edit(item)}
                                onDrop={() => this.Drop(item)}
                                onCart={() => this.addToCart(item)}
                            />
                        ))}
                    </div>
                    {/* DISPLAY MAP CARD END */}

                    <div>
                        <br />
                    </div>

                    {/* BUTTON ADD FIELD START*/}
                    <button className="btn btn-success"
                        onClick={() => this.Add()}>
                        TAMBAH DATA
                </button>
                    {/* BUTTON ADD FIELD END*/}


                    {/* MODAL START */}
                    <div className="modal" id="modal_buku">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    FORM GALLERY BUKU
                            </div>
                                <div className="modal-body">
                                    <form onSubmit={ev => this.Save(ev)}>

                                        {/* INPUT FORM START */}
                                    Judul Buku :
                                    <input type="text"
                                            className="form-control mb-2"
                                            value={this.state.judul}
                                            onChange={ev => this.setState({ judul: ev.target.value })}
                                            required />

                                    Penulis Buku :
                                    <input type="text"
                                            className="form-control mb-2"
                                            value={this.state.penulis}
                                            onChange={ev => this.setState({ penulis: ev.target.value })}
                                            required />

                                    Penerbit Buku :
                                    <input type="text"
                                            className="form-control mb-2"
                                            value={this.state.penerbit}
                                            onChange={ev => this.setState({ penerbit: ev.target.value })}
                                            required />

                                    Harga Buku :
                                    <input type="text"
                                            className="form-control mb-2"
                                            value={this.state.harga}
                                            onChange={ev => this.setState({ harga: ev.target.value })}
                                            required />

                                    Cover Buku :
                                    <input type="text"
                                            className="form-control mb-2"
                                            value={this.state.cover}
                                            onChange={ev => this.setState({ cover: ev.target.value })}
                                            required />
                                        {/* INPUT FORM END */}

                                        {/* BUTTON SUBMIT START */}
                                        <button className="btn btn-info btn-block" type="submit">
                                            SIMPAN
                                    </button>
                                        {/* BUTTON SUBMIT END */}

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* MODAL END */}

                </div>
            </div>
        )
    }


}

export default Gallery