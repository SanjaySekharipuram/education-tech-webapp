import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../components/pages/Home/Home'
import Footer from '../components/Footer/Footer'
import Courses from '../components/pages/Courses/Courses'
import Plans from '../components/pages/Plans/Plans'
import AboutUs from '../components/pages/AboutUs/AboutUs'
import ContactUs from '../components/pages/ContactUs/ContactUs'
import SupportUs from '../components/pages/SupportUs/SupportUs'
function LayoutRoutes() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/education-tech-webapp' element={<Home />} />
                <Route path='/services' element={<Plans />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/support-us' element={<SupportUs />} />
                
            </Routes>
            <Footer />
        </Router>
    )
}

export default LayoutRoutes