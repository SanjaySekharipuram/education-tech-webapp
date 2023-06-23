import React from 'react'
import './Plans.css'
function Plans() {
    const pricingData = [{
        title: 'Regular Member',
        price: '$0',
        duration: '/month',
        backgroundColor: '#fff',
        color:'#132742',
        features: [
            'Unlimited access to the courses',
            'Customer Support',
            'Personal Mentor',
            'Standard Options',
            '5 Classes per week'
        ]
    },
    {
        title: 'Premium Member',
        price: '$100',
        duration: '/month',
        backgroundColor: '#6f55f2',
        color:'#fff',
        features: [
            'Unlimited access to the courses',
            'Customer Support',
            'Personal Mentor',
            'Standard Options',
            '5 Classes per week'
        ]
    },
    {
        title: 'Standard Member',
        price: '$10',
        duration: '/month',
        backgroundColor: '#fff',
        color:'#132742',
        features: [
            'Unlimited access to the courses',
            'Customer Support',
            'Personal Mentor',
            'Standard Options',
            '5 Classes per week'
        ]
    }]

    return (
        <div className='container'>
            <div className='pricing_top'>
                <h2 className='section_title'>Premium Pricing Plan</h2>
                <p>Unlock elite tech sevices with our Premium Pricing Plan and soar ahead of the competition</p>
            </div>
            <div className='pricing_wrapper'>
                {
                    pricingData.map((pricingItem, index) => (
                        <div className='pricing_item' key={index}>
                            <div className='pricing_card-top' style={{ background: pricingItem.backgroundColor,color:pricingItem.color }}>
                                <h2 className='section_title' style={{color:pricingItem.color }}>{pricingItem.title}</h2>
                                <h2 className='pricing_section_title'>
                                    <div className='pricing'>
                                        {pricingItem.price}
                                        <span>
                                            {pricingItem.duration}
                                        </span>
                                    </div>
                                </h2>
                            </div>
                            <div className='services'>
                                <ul>
                                    {
                                        pricingItem.features.map((feature, index) => (

                                            <li key={index}>{feature}</li>
                                        ))
                                    }
                                </ul>
                                <button className='register-btn'>Join</button>
                            </div>
                        </div>

                    ))
                }


            </div>
        </div>
    )
}

export default Plans