import React from 'react'

import Footer from '../Footer'
import Mitra from '../Mitra'
import Breadcumbs from '../Breadcumbs'
import HeroProduct from '../HeroProduct'
import Sidebar from '../Sidebar'

const KatalogProduk = () => {
    return (
        <>
            {/* <section> */}
            <Breadcumbs />
            <HeroProduct />
            <section>
                <Sidebar/>
            </section>
            <Mitra />
            <Footer />
            {/* </section> */}
        </>
    )
}

export default KatalogProduk