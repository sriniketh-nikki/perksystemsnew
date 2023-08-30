import React from 'react';
import clients from './clients.jpg'

const Clients = () => {
    return (
        <div>
            <div className='clients'>
                <img src={clients} alt='clients banner' id="clientsbannerimg"/>
                <h1 id="clientshead">Clients</h1>
            </div>
            <div className='clients2'>
            <p>Perk Systems Inc proud to have associated with outstanding companies in all sectors and all sizes from fortune 500 companies to individual start up companies. For most of our consultants, this diversity is a key reason for their choice of profession: because this guarantees a broad variety of tasks and challenges. We typically assign a dedicated team of experienced staff members to our clients that will coordinate all matters with respect to your international subsidiaries, so continuity and quality of service are guaranteed.</p>
            <h6 id="clientssubhead">Verticals Served:</h6>
            <ul>
                <li>Automotive</li>
                <li>Communications</li>
                <li>Financial/Banking</li>
                <li>Manufacturing</li>
                <li>Retail</li>
                <li>Health Care</li>
                <li>Information Technology</li>
            </ul>
            </div>
        </div>
    );
};

export default Clients;