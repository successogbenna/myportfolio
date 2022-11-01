import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const datas = [
    {
        id: 1,
        image: IMG1,
        title: 'Cryto Currency Dashboard & Financial Visualizatio',
        github: 'https://github.com',
        demo:'https://netflex.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Cryto Currency Dashboard & Financial Visualizatio',
        github: 'https://github.com',
        demo: 'https://netflex.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Cryto Currency Dashboard & Financial Visualizatio',
        github: 'https://github.com',
        demo: 'https://netflex.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Cryto Currency Dashboard & Financial Visualizatio',
        github: 'https://github.com',
        demo: 'https://netflex.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Cryto Currency Dashboard & Financial Visualizatio',
        github: 'https://github.com',
        demo: 'https://netflex.com'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Cryto Currency Dashboard & Financial Visualizatio',
        github: 'https://github.com',
        demo: 'https://netflex.com'
    }
]

function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {datas.map((data,index) => {
                    return <article className='portfolio__item' key={data.id}>
                        <div className="portfolio__item-image">
                            <img src={data.image} alt={data.title} />
                        </div>
                        <h3>{data.title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={data.github} className='btn'>Github</a>
                            <a href={data.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                        </div>
                    </article> 
                })}   
            </div>
        </section>
    )
}

export default Portfolio
