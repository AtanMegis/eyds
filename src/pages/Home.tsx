import logo from '@assets/logo.png'
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
import { useEffect, useRef, useState } from 'react'
import Product from '@components/Product'
import { dataProduct } from '@helper/product'
import { SwiperComponent } from '@components/Swiper'
import eyds from '@assets/EYDS Day 1.mp4'
import { FaVolumeMute, FaVolumeDown } from 'react-icons/fa'

export default function Home() {
    const [products, setProducts] = useState<any[]>([])
    const [activeProduct, setActiveProduct] = useState(products[0])
    const videoRef = useRef<HTMLVideoElement>(null) // Reference to the video element
    const [isMuted, setIsMuted] = useState(true) // State to track mute status

    const toggleMute = () => {
        if (videoRef.current) {
            const currentMuted = videoRef.current.muted
            videoRef.current.muted = !currentMuted
            setIsMuted(!currentMuted) // Update state to reflect mute status
        }
    }

    useEffect(() => {
        Aos.init({ duration: 500 })

        setProducts(dataProduct)
        setActiveProduct(dataProduct[0])
    }, [])

    return (
        <>
            <section className="flex gap-4 flex-col justify-around w-dvw h-dvh bg-banner bg-cover bg-center bg-no-repeat relative  py-2 px-12 ">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-white/0"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-white/0"></div>

                <img src={logo} alt="logo" className="pt-2 max-w-36 md:max-w-xs flex w-full  isolate" />

                {/* Content */}
                <div
                    className="w-full  text-white text-xs sm:text-clamp_sm md:text-clamp_md isolate  max-w-6xl mx-auto flex flex-col  sm:gap-2 leading-relaxed "
                    data-aos="fade"
                >
                    <strong>Dear Valued Visitors,</strong>
                    <p>
                          We are excited to announce that as of 31 January 2025, PT Kreatif Dinamika Integrasi is now
                        part of PT Ernst & Young Digital Solutions. As part of this acquisition, our website will be
                        permanently closing.
                    </p>
                      Please note the following important information :
                    <ul className="list-disc list-inside my-2">
                        <li>All services and activities on our current website will cease on 31 January 2025.</li>
                        <li>
                            You can now access all our services and updates on the new website at (insert website link).
                        </li>
                        <li>For any inquiries or support, please contact us at indonesia.bmc@id.ey.com.  </li>
                    </ul>
                     We appreciate your support and loyalty over the years and look forward to continuing to serve you
                    at our new home. Thank you for your understanding and cooperation during this transition.  
                    <span className="mt-2">Sincerely,</span>
                    <strong>PT Kreatif Dinamika Integrasi</strong>
                    <button className="my-4 bg-solidYellow text-black  w-fit flex  self-center px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 ">
                        Visit Ernst & Young Digital Solutions
                    </button>
                    <button
                        className="flex flex-col items-center text-white text-clamp_md animate-bounce"
                        aria-label="Scroll down"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <span className="text-sm my-2">SCROLL DOWN</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-12 h-12"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                {/* Content */}
            </section>
            {/* <div className="flex flex-col justify-center items-center text-center gap-2 font-semibold  relative px-12 py-8   ">
                    <span className="border-4  border-solidOrange h-10 absolute top-0 left-0"></span>
                    <span className="border-4  border-solidOrange w-10 absolute top-0 left-0"></span>
                    <span className="border-4 border-black  h-10 absolute bottom-0 right-0"></span>
                    <span className="border-4 border-black w-10 absolute bottom-0 right-0"></span>
                    <h1 className="text-clamp_lg" data-aos="fade-bottom">
                        Kreatif's <span className="text-solidOrange"> Journey</span>
                    </h1>
                </div> */}
            <section className="w-dvw h-auto sm:min-h-dvh flex flex-col justify-center items-center relative bg-solution bg-cover bg-center bg-no-repeat mix-blend-color-burn">
                <div className="relative max-w-full  h-full w-full">
                    <video
                        ref={videoRef}
                        className=" w-full object-scale-down max-w-full min-w-full h-full sm:max-w-none border-none "
                        autoPlay
                        muted
                        playsInline
                        loop
                    >
                        <source src={eyds} type="video/mp4" />
                    </video>
                </div>

                <button
                    onClick={toggleMute}
                    className="absolute bottom-7 right-7 sm:bottom-14 sm:right-14 bg-white text-solidOrange px-3 py-2 sm:px-6 sm:py-4 rounded opacity-50 hover:opacity-100 cursor-pointer isolate"
                >
                    {isMuted ? (
                        <FaVolumeMute className="size-3 sm:size-6" />
                    ) : (
                        <FaVolumeDown className="size-3 sm:size-6" />
                    )}
                </button>
            </section>

            <section className="flex flex-col justify-center items-center bg-solution bg-no-repeat bg-center bg-cover w-dvw min-h-dvh relative p-12">
                <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black/30 to-white/0"></div>
                <div className="flex flex-col md:flex-row justify-center items-center  gap-4 sm:gap-8 md:max-w-7xl w-full mx-auto h-full">
                    <div
                        className="flex flex-col justify-center items-center text-center gap-2 font-semibold"
                        data-aos="fade-bottom"
                    >
                        <h1 className="text-clamp_lg">
                            Our <span className="text-solidOrange">Solution</span>
                        </h1>
                        <h2>We Deliver Business Solution and Your Specific Needs</h2>
                    </div>
                    <SwiperComponent />
                </div>
            </section>

            <section className="w-dvw min-h-dvh bg-about bg-cover bg-center bg-no-repeat relative px-12 pt-12">
                <div className="flex flex-col justify-center items-center text-center gap-2 font-semibold">
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

            <section className="w-dvw min-h-[550px] bg-white p-12 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-white/0"></div>

                <div className="flex flex-col justify-center items-center text-center gap-2 font-semibold">
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
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col justify-center  gap-2 font-semibold" data-aos="fade-left">
                                <h1 className="text-clamp_lg">
                                    WHY <span className="text-solidOrange"> KREATIF</span>
                                </h1>
                            </div>
                            <p className="text-clamp_md font-light leading-relaxed" data-aos="fade-right">
                                Kreatif Dinamika Integrasi (also known as Kreatif) is a hardware, network, and business
                                solution providers. The company was established in 2012 by industry experts with more
                                than 20 years experience from various IT disciplines and backgrounds.
                            </p>
                            <p className="text-clamp_md font-light leading-relaxed" data-aos="fade-right">
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

            <footer className="w-dvw bg-white h-20 ">
                <h1 className="flex gap-1 justify-center items-center h-full w-full max-w-full sm:text-clamp_sm text-xs">
                    Copyright © 2021 Kreatif. All rights reserved.
                    <a target="_blank" href="https://www.kreatifdinamika.com/privacy">
                        | <span className="underline">Privacy Policy</span>
                    </a>
                </h1>
            </footer>
        </>
    )
}
