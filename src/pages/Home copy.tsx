import banner from '@assets/home-banner.jpg'
import logo from '@assets/logo.png'
import Card from '@components/Card'
import car from '@assets/car.png'
import Button from '@components/Button'
import microsoft from '@assets/microsoft.png'
import meta from '@assets/meta.png'
import darwin from '@assets/darwin.png'
import globe from '@assets/globe.png'
import earth from '@assets/earth.png'
import kreatif from '@assets/kreatif.png'
import bulb from '@assets/bulb.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Product from '@components/Product'
import { dataProduct } from '@helper/product'

export default function Home() {
    const [products, setProducts] = useState<any[]>([])
    const [activeProduct, setActiveProduct] = useState(products[0])

    useEffect(() => {
        Aos.init({ duration: 500 })

        setProducts(dataProduct)
        setActiveProduct(dataProduct[0])
    }, [])

    return (
        <>
            <section className="flex gap-4 flex-col justify-around w-dvw min-h-dvh bg-banner bg-cover bg-center bg-no-repeat relative  pb-12 px-12 pt-2">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-white/0"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-white/0"></div>

                <img src={logo} alt="logo" className="max-w-52 md:max-w-xs flex w-full  isolate" />

                {/* Content */}
                <div
                    className="w-full  text-white text-xs sm:text-clamp_sm md:text-clamp_md isolate  max-w-6xl mx-auto flex flex-col gap-1 sm:gap-2 leading-relaxed "
                    data-aos="fade"
                >
                    <strong>Dear Valued Visitors,</strong>
                    <p>
                          We are excited to announce that as of 20 January 2025, PT Kreatif Dinamika Integrasi is now
                        part of PT Ernst & Young Digital Solutions. As part of this acquisition, our website will be
                        permanently closing.
                    </p>
                      Please note the following important information :
                    <ul className="list-disc list-inside my-2">
                        <li>All services and activities on our current website will cease on 20 January 2025.</li>
                        <li>
                            You can now access all our services and updates on the new website at (insert website link).
                        </li>
                        <li>For any inquiries or support, please contact us at indonesia.bmc@id.ey.com.  </li>
                    </ul>
                     We appreciate your support and loyalty over the years and look forward to continuing to serve you
                    at our new home. Thank you for your understanding and cooperation during this transition.  
                    <span>Sincerely,</span>
                    <strong>PT Kreatif Dinamika Integrasi</strong>
                    <button className="mt-6 bg-solidYellow text-black  w-fit flex  self-center px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 ">
                        Visit Ernst & Young Digital Solutions
                    </button>
                </div>
                {/* Content */}
            </section>
            <section
                className="flex justify-center items-center bg-solution bg-no-repeat bg-center bg-cover w-dvw h-[700px] relative p-12"
                data-aos="fade"
            >
                <div className=" flex flex-col md:flex-row justify-center items-center gap-8 md:max-w-7xl  w-full mx-auto h-full  ">
                    <div className="flex flex-col justify-center  gap-2 font-semibold">
                        <h1 className="text-clamp_lg">
                            Our <span className="text-solidOrange"> Solution</span>
                        </h1>
                        <h2>We Deliver Business Solution and Your Specific Needs</h2>
                    </div>
                    {/* Card Container */}
                    <div className="flex w-full max-w-md md:max-w-full  justify-center gap-4 overflow-x-hidden scroll snap-x scroll-smooth ">
                        <Card
                            img={banner}
                            desc="Offers end-to-end management for vehicle dealerships, fleet operations, and rental businesses, helping streamline operations, from vehicle sales to maintenance, while also enhancing communication between stakeholders."
                            icon={car}
                            title="kucing"
                        />
                        <Card
                            img={banner}
                            desc="Offers end-to-end management for vehicle dealerships, fleet operations, and rental businesses, helping streamline operations, from vehicle sales to maintenance, while also enhancing communication between stakeholders."
                            icon={car}
                            title="kucing"
                        />
                        <Card
                            img={banner}
                            desc="Offers end-to-end management for vehicle dealerships, fleet operations, and rental businesses, helping streamline operations, from vehicle sales to maintenance, while also enhancing communication between stakeholders."
                            icon={car}
                            title="kucing"
                        />
                    </div>
                    {/* Card Container */}
                </div>
                <div className="flex absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3">
                    <button className="size-5 rounded-full bg-solidOrange"></button>
                    <button className="size-5 rounded-full bg-gray-400"></button>
                    <button className="size-5 rounded-full bg-gray-400"></button>
                </div>
            </section>
            <section className="w-dvw min-h-dvh bg-about bg-cover bg-center bg-no-repeat relative px-12 pt-12">
                <div className="flex flex-col justify-center items-center gap-2 font-semibold">
                    <h1 className="text-clamp_lg text-white">
                        Our <span className="text-solidOrange"> Product</span>
                    </h1>
                </div>
                <div className="flex md:justify-center gap-4 my-8 w-full max-w-full mx-auto overflow-x-scroll  scrollbar-default ">
                    {products.map((item) => (
                        <Button
                            key={item?.id}
                            title={item?.productTitle}
                            isActive={activeProduct?.id === item?.id}
                            onClick={() => setActiveProduct(item)}
                        />
                    ))}
                </div>
                <div
                    data-aos="fade-down"
                    className={`transition-opacity duration-300 ease-in-out opacity-100  md:min-h-dvh ${
                        activeProduct ? 'translate-y-0' : 'translate-y-4'
                    }`}
                    key={activeProduct?.id}
                >
                    <Product
                        titleProduct={activeProduct?.productTitle}
                        productDescription={activeProduct?.productDescription}
                        productVideo={activeProduct?.productVideo}
                        productLines={activeProduct?.productLines}
                    />
                </div>
            </section>

            <section className="w-dvw min-h-[550px] bg-white p-12">
                <div className="flex flex-col justify-center items-center gap-2 font-semibold">
                    <h1 className="text-clamp_lg">
                        Our <span className="text-solidOrange"> Principal</span>
                    </h1>
                </div>

                <div className="w-full max-w-7xl py-8 grid gap-10 place-self-center place-items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                    <div
                        className="flex flex-col w-[450px] h-[300px] flex-1  p-3 gap-3 max-w-full  "
                        data-aos="fade-left"
                    >
                        <img src={microsoft} alt="microsoft" className=" w-56  object-contain h-[120px]  " />
                        <p>
                            Microsoft offers a comprehensive suite of technology solutions, from Azure cloud services to
                            Office 365 productivity tools, enabling businesses to operate efficiently and securely.
                        </p>
                    </div>
                    <div
                        className="flex flex-col w-[450px] h-[300px] flex-1  p-3 gap-3 max-w-full"
                        data-aos="fade-left"
                    >
                        <img src={meta} alt="meta" className="  w-56  object-contain h-[120px]  " />
                        <p>
                            Meta, the parent company of Facebook, drives innovation in social technology and virtual
                            reality, providing platforms that enhance digital engagement and create immersive
                            experiences.
                        </p>
                    </div>
                    <div
                        className="flex flex-col w-[450px] h-[300px] flex-1  p-3 gap-3 max-w-full"
                        data-aos="fade-left"
                    >
                        <img src={darwin} alt="microsoft" className=" w-56  object-contain h-[120px]  " />
                        <p>
                            Darwinbox provides a cutting-edge HR technology platform, helping organizations redefine
                            employee experience and streamline HR processes for better productivity.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-dvw min-h-dvh bg-about bg-no-repeat bg-cover flex justify-center items-center p-12 ">
                <div className="text-white max-w-7xl w-full h-full py-8">
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <img src={kreatif} alt="kreatif" className="w-full max-w-full h-auto object-cover" />
                        <div className="flex flex-col gap-5" data-aos="fade-left">
                            <div className="flex flex-col justify-center gap-2 font-semibold">
                                <h1 className="text-clamp_lg">
                                    WHY <span className="text-solidOrange"> KREATIF</span>
                                </h1>
                            </div>
                            <p className="text-clamp_md font-light leading-relaxed">
                                Kreatif Dinamika Integrasi (also known as Kreatif) is a hardware, network, and business
                                solution providers. The company was established in 2012 by industry experts with more
                                than 20 years experience from various IT disciplines and backgrounds.
                            </p>
                            <p className="text-clamp_md font-light leading-relaxed">
                                Our vision and aim is to assist our customers to succeed and to accelerate new
                                technologies as they emerge. We focus on delivering the best service that will fulfill
                                our customers’ needs by constantly updating and improving our service. We continuously
                                evolve as a company by exploring opportunities in business solutions, mobile computing,
                                communication, business intelligence, and more.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex w-full max-w-full justify-center items-center gap-12 pt-8 flex-wrap"
                        data-aos="fade-right"
                    >
                        <img src={bulb} alt="bulb" className="size-24 object-cover max-w-full h-auto " />
                        <ul className="flex flex-col gap-2">
                            <li>#1 Darwinbox Solution Partner in Indonesia</li>
                            <li>
                                #1 Microsoft Partner of The Year FY 2024{' '}
                                <span className="text-solidOrange">for Indonesia</span>
                            </li>
                            <li>#1 Microsoft Business Application Solution Provider  FY 2020</li>
                            <li>#1 Microsoft Business Application Solution Provider  FY 2019</li>
                            <li>
                                #1 Microsoft Partner  of The Year FY 2018{' '}
                                <span className="text-solidOrange"> for Indonesia</span>
                            </li>
                        </ul>
                        <div className="flex md:flex-col gap-4 flex-wrap">
                            <div className="flex gap-4 items-center">
                                <img src={globe} alt="globe" className="size-24 object-cover max-w-full h-auto" />
                                <h1>200+ Customers</h1>
                            </div>
                            <div className="flex gap-4 items-center">
                                <img src={earth} alt="earth" className="size-24 object-cover max-w-full h-auto" />
                                <h1>100+ Technology Experts</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
