import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Jalen. I'm a new full stack engineer with some experience in, HTML, CSS, Javascript, Express JS, Node JS, MySQL, MongoDB, and React.</p>
                
                <p>My dream is to develop an app that will change or improve the whole world and to give back to others less fortunate at a grand scale.</p>
                
                <p>I'm learning new things and perspectives constantly. Currently those things include getting more experience with React, Express Js, MongoDB, and Node JS</p>
                
                <p>My latest project, Pickup, is app for anyone that wants to play a pickup basketball game and locate a gym in their area. They'll also be able to invite friends. I plan on expanding the app to cover more sports.</p>
                
                <p>When I'm not learning something involved with code you can catch me working out at the gym, going for runs, or hiking. I love being active.</p>
            </Content>
        </div>
    );
}

export default AboutPage;