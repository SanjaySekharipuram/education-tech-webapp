import React from 'react'
import './Community.css'
import community_logo from '../../../assets/img/tc.png'

function Community() {
    const handleClick =()=>{
        window.open('https://www.google.com','_blank')
    }
    return (
        <div className='container'>
            <div className='start-wrapper'>
            <div className='start-img'>
                <img src={community_logo} alt='community-logo'/>
            </div>
            <div className='start-content'>
                <h2 className='section-title'>Join Our Free Tech Community</h2>
                <p>Unblock the power of knowledge and innovation by joining our vibrant and free whatsapp tech community</p>
                <button className='register-btn' onClick={handleClick}>Join Now</button>
            </div>
            </div>
        </div>
    )
}

export default Community