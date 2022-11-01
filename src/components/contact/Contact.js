import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oejwrsv', 'template_f9laohk', form.current, '6ztIJspLst0cpyR6b')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
};
  
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me </h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>success.ogbenna@outlook.com</h5>
                        <a href="mailto:success.ogbenna@outlook.com" target='_blank' rel="noreferrer">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messager</h4>
                        <h5>successful</h5>
                        <a href="https://m.me/successogbenna" target='_blank' rel="noreferrer">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>07036119338</h5>
                        <a href="https://wa.me/+2347036119338" target='_blank' rel="noreferrer">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your full name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
