import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './Services.css'
function Services() {
    return (
        <section id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Data Analysis</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li><li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li><li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li><li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/*END OF DATA ANALYSIS*/}
                <article className="service">
                    <div className="service__head">
                        <h3>BlockCahin WEB3</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li><li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li><li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li><li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/*END OF WEB DESIGN*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li><li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li><li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li><li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
