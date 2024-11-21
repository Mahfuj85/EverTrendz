import React from 'react'
import Slider from "react-slick"

const TestimonialData = [
    {
        id: 1,
        name: "Abdullah Jabir",
        text: "EverTrendz has completely redefined my online shopping experience. I was amazed by the extensive collection they offer, from the latest electronics to stunning home decor. I recently purchased a smartphone and some decorative pieces for my living room, and both exceeded my expectations in terms of quality and style. Plus, the delivery was super quick, and the items arrived in perfect condition. I’ll definitely be shopping here again!",
        img: "/public/assets/t-1.jfif"
    },
    {
        id: 2,
        name: "Natasha Khan",
        text: "I can’t express how impressed I am with EverTrendz! I needed a laptop for work and spent weeks searching for something powerful yet affordable. Then I found EverTrendz, and it was like hitting the jackpot. The laptop I ordered works flawlessly, and I even got a discount during their seasonal sale. Their customer service team was also incredibly helpful in answering all my questions. Highly recommended!",
        img: "/public/assets/t-2.jpg"
    },
    {
        id: 3,
        name: "Abdur Rauf",
        text: "EverTrendz is a one-stop shop for everything you need, and I mean that! I recently bought a motorcycle from them, and the process was so smooth from start to finish. The bike was delivered on time and in excellent condition. I’ve also picked up some great electronics and home accessories from their site, and every single item has been top-notch. If you haven’t tried shopping here yet, you’re seriously missing out!",
        img: "/public/assets/t-3.jfif"
    },
    {
        id: 4,
        name: "Nur Jannat",
        text: "Decorating my new home was a breeze thanks to EverTrendz! I was blown away by their beautiful collection of home decor items. I ordered a few pieces, including a chic table lamp and a wall hanging, and they completely transformed the look of my living room. The materials feel premium, and the designs are so unique. Plus, the entire shopping experience—from browsing to delivery—was smooth and hassle-free. I’ll definitely be coming back for more!",
        img: "/public/assets/t-4.png"
    },
    {
        id: 5,
        name: "Sanjida Sara",
        text: "EverTrendz is hands down the best online store I’ve ever shopped at. I was initially drawn to their range of electronics, but as I browsed, I discovered so much more—motorcycles, home decor, and even laptops! The website is super easy to navigate, and the checkout process was simple. My order arrived promptly, and the quality of the items was outstanding. EverTrendz has earned a loyal customer for life!",
        img: "/public/assets/t-5.jpg"
    },
    
]

const Testimonials = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        sliderToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    sliderToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    sliderToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    sliderToScroll: 1,
                },
            },
        ],
    };

  return (
    <div className='py-10 mb-10'>
        <div className="container">
            {/* Header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-md text-secondary font-semibold'>What our customers are saying</p>
                <h1 data-aos="fade-up" className='text-4xl font-bold'>Testimonials</h1>
                <p data-aos="fade-up" className='text-md text-gray-400'>See how our products have enhanced the lives of our valued customers, from stylish home decor to cutting-edge electronics. Join our growing community of satisfied shoppers!</p>
            </div>
            {/* Testimonials Card */}
            <div data-aos="zoom-in" className="">
                <Slider {...settings}>
                    {TestimonialData.map((data) => (
                        <div className='my-6'>
                        <div
                        key={data.id}
                        className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                        >
                            <div className='mb-4'>
                                <img src={data.img} alt="" 
                                className='rounded-full w-20 h-20'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-3'>
                                <p className='text-xs text-gray-500'>{data.text}</p>
                                <h1 className='text-xl font-bold text-black/80 dark:text-white/80'>{data.name}</h1>
                                </div>
                            </div>
                            <p className='text-black/20 text-9xl font-serif absolute top-20 right-0 dark:text-white'>
                                ''
                            </p>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}
    
export default Testimonials
