import React, {Component} from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
class About extends Component{
    render(){

        return(
            <div>
            <Navbar/>
            <div className="container">
                <h2>19 Things Canadians Travelling to India Should Know</h2>
                <p>Whether your dream is to catch the sunrise at the Taj Mahal or hike through the Himalayas, India offers some of the world’s most rewarding—and intense—travel experiences. Having lived in India for the past 30 years, I’ve witnessed firsthand the disorientation first-time visitors can experience mere moments after touching down. But exactly why is this culture shock so common for Canadians travelling to India? Let’s look at a few facts that set the stage.
                
                Canada’s landmass encompasses almost 10-million square kilometres, making it, geographically speaking, the second largest country in the world. India is roughly a third of that size. Canada has roughly 35.5-million citizens. India packs that same number into two cities alone—Mumbai and New Delhi—and boasts a total population that’s a full billion stronger than Canada’s. They’re older, too (at least historically speaking). The entire Indian subcontinent has been inhabited—and has been a significant player in global civilization and economy—for several thousand years.
                
                With that in mind, things happen differently in India. Very differently. The good news is, a bit of preparation can help you overcome that initial sense of being overwhelmed, and lay the groundwork for a trip that’s truly life-changing. Here are some of the things Canadians travelling to India for the first time should keep in mind.</p>
                </div>
            <Footer/>
            </div>
        );
    }
}


export default About;
