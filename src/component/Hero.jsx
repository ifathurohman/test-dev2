import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className="text-gray-600 body-font pb-[129px]">
                <div className="lg:w-2/3 mx-auto" />
                <div className="flex flex-wrap w-full bg-gray-100 py-32 relative">
                    <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src="https://s3-alpha-sig.figma.com/img/2722/3bb3/8a038874de054c498fb3825c212228e5?Expires=1703462400&Signature=jZzWOvwmryhdISD~ZiwGLWsj-7m6HnmE9pdpFgEN6dG6mNsNkQe3aypqXLzMgOgM3AZOJ3y-XHyanluji0wwYSDk81qWjP8TiBSX7qn2523U-eD7CBhDoefH31SYSeRcyP1WZYSp947izxLAA8C9bd1kiUTGpbJe14ROGqIBtRiOABJwWXqJQ81CIfcKMzyuAZnNg-PBdHy6WbJDlqoyNTEy0689VjQW2blgB9phX8WdTixFQkQr-k4tYQL1vbw2vr9GzJ8kY8q9EeBlW-tMi2ge~45sMrtz3VCUbKGmtuPMW7gSflVbltdgAuFrXYsbQk6PJtx8lqUBAWnPTJFC1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <div className="pt-[100px] pl-[109px] md:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10 z-0">
                        <h1 className="text-zinc-800 text-4xl font-extrabold font-['Montserrat'] leading-[50.04px] pb-[29px]">Akses Sumber Info <br />Perikanan Orange City<br />Hanya Di Sini!</h1>
                        <p className="w-[419px] text-zinc-800 text-base font-medium font-['Montserrat'] leading-normal pb-[29px]">Mulai dari produk, harga, hingga info persebaran gudang, semua bisa diakses lengkap di Fish Info.</p>
                        <button className="w-[216px] h-14 p-4 bg-sky-500 rounded-lg justify-center items-center gap-2 inline-flex">
                            <div className="text-center text-white text-base font-medium font-Inter leading-normal">Cek Produk</div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero