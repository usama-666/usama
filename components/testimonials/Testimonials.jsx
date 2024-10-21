"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
// import { Autoplay } from "swiper/react";

import Client from "@/components/cards/Client";

const Testimonials = () => {
    const clientData = [
        {
            id: 0,
            name: "Emily Johnson",
            title: "CTO, Tech Innovators Inc.",
            comment: (
                <>
                    Working with <strong>Usama Riaz</strong> was an absolute
                    pleasure. His expertise in full-stack development,
                    particularly with the MERN stack, was instrumental in
                    delivering a complex project on time. His ability to
                    seamlessly collaborate with our team remotely made the
                    process smooth and efficient. I highly recommend him for any
                    development role,
                </>
            ),
            image: "../assets/images/proj.jpg",
        },
        {
            id: 1,
            name: "David Williams",
            title: "Product Manager, Global Solutions",
            comment: (
                <>
                    <strong>Usama Riaz</strong> demonstrated exceptional
                    technical skills and attention to detail while developing
                    our web application. His proficiency in React and Node.js
                    allowed us to scale the project efficiently. He was
                    responsive, reliable, and always delivered high-quality
                    work. I would gladly work with him again on future projects,
                </>
            ),
            image: "../assets/images/proj.jpg",
        },
        {
            id: 2,
            name: "Sophia Martinez",
            title: "CEO, Creative Digital Agency",
            comment: (
                <>
                    I was impressed by <strong>Usama Riaz's</strong> ability to
                    take our ideas and transform them into a functional,
                    visually appealing product. His understanding of UX/UI
                    design and frontend technologies like Tailwind CSS ensured
                    our project not only looked great but performed
                    exceptionally well. His dedication and professionalism make
                    him stand out in the field
                </>
            ),
            image: "../assets/images/proj.jpg",
        },
        {
            id: 3,
            name: "Michael Brown",
            title: "Lead Developer, Startup Innovative AI",
            comment: (
                <>
                    From the start, <strong>Usama Riaz</strong> showed great
                    initiative and problem-solving abilities. His backend work
                    with Node.js and MongoDB was key to optimizing our system's
                    performance. He communicated effectively throughout the
                    project and was always open to feedback. His contributions
                    greatly improved our application's functionality,
                </>
            ),
            image: "../assets/images/proj.jpg",
        },
    ];
    return (
        // <Wrapper width="w-[95%] md:w-[70%]">
        <div className="p-5 mt-5 md:p-10 md:mb-10" id="project">
            <h1 className="text-center text-2xl font-bold">My Happy Clients</h1>

            <p className="text-center text-gray-500 my-5">
                Here are some of my recent Client Reviews that I've worked with.
            </p>
            <Swiper
                spaceBetween={1} // Space between slides
                loop={true} // Enable infinite loop
                autoplay={{
                    delay: 0, // No delay between scrolls
                    disableOnInteraction: false, // Continue scrolling after interaction
                }}
                speed={3000} // Speed of the continuous scroll
                // modules={[Autoplay]} // Enable Autoplay module
                className="mySwiper"
                breakpoints={{
                    // Adjust slide per view based on screen width
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                }}
            >
                {clientData.map((card) => (
                    <SwiperSlide
                        key={card.id}
                        className="w-full h-full p-5 "

                        // className="w-full bg-red-200 h-full  border-t-4 rounded-t-xl border-t-blue-400 col-span-3 md:col-span-1 shadow-xl p-5"
                    >
                        <Client card={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        // </Wrapper>
    );
};

export default Testimonials;

// <div className="grid grid-cols-3 gap-5 md:gap-2">
// {clientData.map((card) => (
//     <Client key={card.id} card={card} />
// ))}
// </div>
