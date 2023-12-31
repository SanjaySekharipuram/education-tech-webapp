import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'

function Footer() {
    
    const handleOnClick = ()=>{
        window.open('https://github.com/SanjaySekharipuram','_blank')
    }
    const handleClick = ()=>{
        window.scrollTo(0,0)
    }
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer_wrapper'>
                    <div className='footer-box'>
                        <div className='logo'>
                            <div className='logo-img' onClick={handleOnClick}>
                                <img src={footer} alt='footer-img' />
                            </div>
                            <h2>Demo</h2>
                        </div>
                        <p>
                            Embrace the future of innovation and technology with our cutting-edge tech business solutions.
                        </p>
                    </div>

                    <div className='footer-box'>
                        <h4 className='footer_title'>Company</h4>
                        <ul className='footer_links'>
                            <li>
                                <Link to='/courses' onClick={handleClick}>Our Programms</Link>
                            </li>
                            <li>
                                <Link to='/services' onClick={handleClick}>Our Plan</Link>
                            </li>
                            <li>
                                <a>Become a memeber</a>
                            </li>
                        </ul>
                    </div>

                    <div className='footer-box'>
                        <h4 className='footer_title'>Quick Links</h4>
                        <ul className='footer_links'>
                            <li>
                                <Link to='/about-us' onClick={handleClick}>About us</Link>
                            </li>
                            <li>
                                <Link to='/contact-us' onClick={handleClick}>Contact us</Link>
                            </li>
                            <li>
                                <Link to='/support-us' onClick={handleClick}>Support us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer