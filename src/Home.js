import React, {Component} from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

class Home extends Component{
    render(){
        return(
                <div>
                    <Navbar/>
                    <div className="container">
                    <h2>Welcome to Canada </h2>

                    <p>Yes I am in Montreal</p>
                    </div>
                    <Footer/>
                </div>

        )
    }



}

export default Home;