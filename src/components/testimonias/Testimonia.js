import React from 'react'
import './Testimonia.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        name: 'Aliko Dangote',
        avatar: AVTR1,
        review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam enim, labore esse nihil laborum veniam id minus voluptatibus, adipisci dolorem voluptatum? Tempora deserunt molestiae aut quod, voluptatibus vel libero id!"
    },
    {
        name: 'Bill Gate',
        avatar: AVTR2,
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam enim, labore esse nihil laborum veniam id minus voluptatibus, adipisci dolorem voluptatum? Tempora deserunt molestiae aut quod, voluptatibus vel libero id!"
    },
    {
        name: 'Ali Baba',
        avatar: AVTR3,
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam enim, labore esse nihil laborum veniam id minus voluptatibus, adipisci dolorem voluptatum? Tempora deserunt molestiae aut quod, voluptatibus vel libero id!"
    }, {
        name: 'Eluk Musk',
        avatar: AVTR4,
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam enim, labore esse nihil laborum veniam id minus voluptatibus, adipisci dolorem voluptatum? Tempora deserunt molestiae aut quod, voluptatibus vel libero id!"
    }
]
function Testimonia() {
    return (
        <section id='testimonials'>
            <h5>Review from Client</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonial__container"
                // install Swiper modules
                modules={[ Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {data.map(({name,review,avatar},index) => {
                    return (
                        <SwiperSlide className="testimonial" key={index}>
                            <div className="client__avatar">
                                <img src={avatar} alt="Avatar one" />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>
                                {review}
                            </small>
                        </SwiperSlide> 
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonia
