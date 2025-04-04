import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocials from './HeaderSocials'
function Header() {
    return (
        <header id='home'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Ogbenna Chinedu</h1>
                <h4 className="text-light">Software Developer | Date Sciencist |  Project Engineer | Machine Learning Engineer</h4>
                <CTA />
                <Headersocials/>
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
          
        </header>
    )
}

export default Header
