import React from 'react';
import banner from './aboutus12.jpg';
import perksystems from './perksysinc.jpg'
import vision from './vision.jpg';
import mission from './mission.jpg';
import approach from './our-approach.jpg'

const Aboutus = () => {
    return (
        <div className='about-main'>
            <div className='about'>
                <img src={banner} alt='About Us' id="aboutbannerimg"/>
                <h1 id="abouthead">About Us</h1>
            </div>
            <div className='aboutdiv'>
                <img src={perksystems} alt='perk systems' id="perkimg"/>
                <div id="aboutparas">
                    <h2>Welcome to Perk Systems, Inc.</h2>
                    <p>Perk Systems, Inc. customized technology service provider for a wide variety of clients from different industries. Over the decade we have been offering recruitment, consulting, project outsourcing and unparalleled expertise in delivering solutions.</p>
                    <p>We offer a uniquely comprehensive and innovative solution set that effectively meets the needs of our clients and associates from recruitment to IT Technology solutions. During that time, both the client and the employee have time to evaluate the situation and determine the relationship. All our processes are designed to leverage our knowledge most effectively to facilitate our client satisfaction and candidate’s growth.</p>
                    <p>We provide services to a wide spectrum of clients ranging from startups to fortune 500 companies. We always take the time to understand your vision, requirements and needs – simply so we can develop the right solution for your business. We’re extremely experienced at developing solutions to meet all kinds of business and client needs. We employ highly skilled professionals, all of which have extensive experience, ensuring we meet client expectations and industry standards.</p>
                </div>
            </div>
            <div className='visiondiv'>
                <div id="vision1">
                    <h6>Our Vision</h6>
                    <div className='vision'>
                    <p>To capture the high market share by maintaining consistently high level of value proposition&customer service excellence in order to continuously exceed customer expectations.</p>
                    <img src={vision} alt='Our vision'/>
                    </div>
                </div>
                <div id="vision2">
                    <h6>Our Mission</h6>
                   <div className='vision'>
                   <p>To be an enduring company by creating superior service products for several diversified industries by constantly upgrading our professional & technological competencies to suit the customer needs and changing IT industry trends. Exceed industry standards for quality, growth, profitability, rates of return and shareholder equity.</p>
                    <img src={mission} alt='Our mission'/>
                   </div>
                </div>
            </div>
            <div className='approachdiv'>    
                <div id="approach">
                    <h6 id="approachh6">Our Approach</h6>
                  <p><b>Integrity</b> – Always dealing with our clients and our colleagues in a fair and ethical manner; gaining trust through our actions.</p>
                  <p><b>Knowledge</b> – The value we place on our ability to develop leaders and the need to continually grow our collective technical expertise to meet the needs of ever more sophisticated clients.</p>
                  <p><b>Service</b> – Encompasses the concept of quality in everything we do, having a service-mindset when dealing with clients and demanding a lot of ourselves.</p>
                  <p><b>Respect</b> – Respect for one another in the office will lead to greater morale and staff satisfaction, which ultimately will result in lower to higher turnover.</p>
                  <p><b>Leadership</b> – Leadership both within the firm with respect to developing our next generation of leaders and within our market segment with respect to being recognized by current and prospective clients as a firm that is the leading expert in the field.</p>
                  <p><b>Enthusiasm</b> – Employing and nurturing staff with a passion for providing the highest-level quality service to our clients.</p>
                </div>
                <img src={approach} alt='Our Approach' id="approachimg"/>
            </div>
        </div>
    );
};

export default Aboutus;