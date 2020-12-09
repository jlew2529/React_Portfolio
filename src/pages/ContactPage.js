import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Jalen from '../assets/images/Jalen.jpg';


class ContactPage extends React.Component {
    render() {
        return (
            <div>
               <Hero title={this.props.title} />

               <Content>
                   <img src={Jalen} alt="Profile Picture" />;
                   <a href="https://github.com/jlew2529">Github Profile</a>
                   <a href="https://www.linkedin.com/in/jalen-lewis-288065144/">LinkedIn Profile</a>
                   <a href="https://docs.google.com/document/d/13XUQPoc1jwssPCUlkO2DcIefwpDveUDkLmgKbGH1uxI/edit?usp=sharing">Resume</a>
               </Content>
            </div>
        );
    }
}

export default ContactPage;