import React from 'react';
import services from './servicefinal.jpg'
import ourservices from './services-300x199.jpg';
const Services = () => {
    return (
        <div>
            <div className='service'>
                <img src={services} alt='services banner' id="servicebannerimg"/>
                <h1 id="servicehead">Services</h1>
            </div>
            <div className=' servicediv'>
                <img src={ourservices} alt='our core services' id="servicesimg"/>
                <div id="serviceparas">
                    <p>Our focus is on meeting your technology needs. We offer a spectrum of services that are appropriate to your requirements – custom product development, application maintenance, system implementation, technical support, and onsite consulting. Whether you are a small company or a Fortune 500 leader, we have the experience and capabilities to work with you. In addition to our technology services, our senior management has extensive expertise in strategy, product innovation, supply chain management, and other areas of business.</p>
                    <h5>Our core areas of services:</h5>
                    <p><a href="##">Application Development</a></p>
                    <p><a href="##">Custom Consulting Services</a></p>
                    <p><a href="##">Training</a></p>
                </div>
                
            </div>
        </div>
    );
};

export default Services;