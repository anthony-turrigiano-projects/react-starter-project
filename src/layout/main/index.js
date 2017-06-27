import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../components/home';
import About from '../../components/about';
import Contact from '../../components/contact';

const Main = (props) => (
    <main className="main container" role="main">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>        
    </main>
)

export default Main;