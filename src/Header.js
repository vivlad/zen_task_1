import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <header className="App-header">
                <marquee>
                    <h1 className="App-title">*=*=*=Welcome to my first app=*=*=*</h1>
                </marquee>
            </header>
        );
    }
}

export default Header;