import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About this App</h1>
            <p className="my-2">Full-stack App</p>
            <ul>
                <li>Express</li>
                <li>MongoDB</li>
                <li>ReactJS</li>
            </ul>
            <p>
                Author: <span className="bg-dark p">Silifonov Alexey</span>{' '}
            </p>
        </div>
    );
};

export default About;
