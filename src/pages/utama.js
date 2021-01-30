import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Beranda from './beranda'
import TentangSaya from './tentang-saya'
import Karya from './karya'
import Kontak from './kontak'
import Gallery from './gallery'
import Cart from './cart'

const Utama = () => (
    <switch>
        <Route exact path="/" component={Beranda}/>
        <Route path="/tentangsaya" component={TentangSaya}/>
        <Route path="/karya" component={Karya}/>
        <Route path="/kontak" component={Kontak}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/cart" component={Cart}/>
    </switch>
)

export default Utama
