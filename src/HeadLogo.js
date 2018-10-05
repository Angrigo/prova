import React, { Component } from 'react';
import logo from './img/logo.png';

class HeadLogo extends Component {

    render(){
        return(
        <div className="mx-auto text-center">
            <img src={logo} className="img-fluid pb-5" alt="baldacci logo" />
        </div>
        );
    }
}

export default HeadLogo;