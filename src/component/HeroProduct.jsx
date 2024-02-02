import React from 'react'

const HeroProduct = () => {
    return (
        <section className="text-gray-600 body-font pb-[129px]">
            <div className="lg:w-2/3 h-full mx-auto" />
            <div className="flex flex-wrap w-full bg-gray-100 relative">
                <img alt="gallery" className="w-full h-[406px] object-cover object-center block absolute inset-0" src="./Frame-34.png" />
                <div className="pt-[100px] pl-[109px] md:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10 z-0">
                    <div class="text-blue-900 text-sm font-bold font-Poppins uppercase leading-[18px] tracking-[4px] pb-[10px]">FISH FRESH</div>
                    <h1 className="text-zinc-800 text-4xl font-extrabold font-['Montserrat'] leading-[50.04px] pb-[29px] uppercase">Olahan<br />ikan segar<br /></h1>
                    <p className="w-[419px] text-neutral-500 text-base font-normal font-Cairo lowercase leading-relaxed">SEMUA JENIS OLAHAN PRODUK IKAN <br />DAPAT DI LIHAT DI SINI.</p>
                </div>
            </div>
        </section>
    )
}

export default HeroProduct
