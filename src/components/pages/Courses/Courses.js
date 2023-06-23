import React from 'react'
import './Courses.css'
import ai_logo from '../../../assets/img/ai.png'
import dm_logo from '../../../assets/img/dg.png'
import cs_logo from '../../../assets/img/hacking.png'
import sd_logo from '../../../assets/img/sd.png'

function Courses() {

    const course_data = [
        {
            title:'AI DEVELOPMENT',
            desc:'Matser AI development',
            img:ai_logo
        },
        {
            title:'DIGITAL MARKETING',
            desc:'Master Digital Marketing!!!',
            img:dm_logo
        },
        {
            title:'CYBER SECURITY',
            desc:'Matser Cyber security',
            img:cs_logo
        },
        {
            title:'SOFTWARE DEVELOPMENT',
            desc:'Matser Software Development!!!',
            img:sd_logo
        }
    ]
    return (
        <div className='container course-container'>
            <div className='course-top'>
                <h2 className='section_title'>Our Free Courses</h2>
                <p>The top trending free courses with free certificates</p>
            </div>
            <div className='course-wrapper'>
                {
                    course_data.map((course,index)=>(
                        <div className='course-item' key={index}>
                            <span className='course-icon'>
                                <img src={course.img} alt='' />
                            </span>
                            <div className='course-content'>
                                <h4>{course.title}</h4>
                                <p>{course.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Courses