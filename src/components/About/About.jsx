import React from 'react';

const About = ({info}) => {
    return (
        <div>
            <p>{info.title}</p>
            <h1>{info.body}</h1>
        </div>
    );
};

export default About;