import React from 'react'

import Header from '../Header'
import Hero from '../Hero'
import Footer from '../Footer'
import Tentang from '../Tentang'
import Harga from '../Harga'
import GrafikIkan from '../GrafikIkan'
import Informasi from '../Informasi'
import Produk from '../Produk'
import Mitra from '../Mitra'

const Home = () => {
    return (
        <>
            <Hero />
            <Tentang />
            <Harga />
            <GrafikIkan />
            <Informasi />
            <Produk />
            <Mitra />
            <Footer />
        </>
    )
}

export default Home