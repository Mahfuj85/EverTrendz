import React from 'react'
import Slider from "react-slick"

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores ea repudiandae tempora corporis? Quo ipsa quia quam quisquam assumenda, iste dignissimos fuga. Nesciunt. Quo ipsa quia quam quisquam assumenda, iste dignissimos fuga. Nesciunt.",
        img: "/public/assets/t-1.jfif"
    },
    {
        id: 2,
        name: "Satya Nadelle",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores ea repudiandae tempora corporis? Quo ipsa quia quam quisquam assumenda, iste dignissimos fuga. Nesciunt. Quo ipsa quia quam quisquam assumenda, iste dignissimos fuga. Nesciunt.",
        img: "/public/assets/t-2.jpg"
    },
    {
        id: 3,
        name: "Micheal Hardy",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores ea repudiandae tempora corporis? Quo ipsa quia quam quisquam assumenda, iste dignissimos fuga. Nesciunt. Quo ipsa quia quam quisquam assumenda, iste dignissimos fuga. Nesciunt.",
        img: "/public/assets/t-3.jfif"
    },
    {
        id: 4,
        name: "Clara Peri",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores ea repudiandae tempora corporis? Quo ipsa quia quam quisquam assumenda, iste dignissimos fuga. Nesciunt. Quo ipsa quia quam quisquam assumenda, iste dignissimos fuga. Nesciunt.",
        img: "/public/assets/t-4.png"
    },
    {
        id: 5,
        name: "Emma Watson",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolores ea repudiandae tempora corporis? Quo ipsa quia quam quisquam assumenda, iste dignissimos fuga. Nesciunt. Quo ipsa quia quam quisquam assumenda, iste dignissimos fuga. Nesciunt.",
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
                <p data-aos="fade-up" className='text-md text-secondary'>What our customers are saying</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus magni modi quod aliquid.</p>
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
