import React, {Component} from 'react'

import Home from './home'
import About from './about'
import Services from './services'

import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'



class Loader extends Component{


    render(){

        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>

                    </ul>
                </nav>

                <Route path="/" exact component={ Home}     />
                <Route path="/about"  component={ About}     />
                <Route path="/services"  component={ Services}     />


            </div>

        )
    }

}


export default Loader ;