import React, { Component } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';

class Layout extends Component{
    constructor(){
        super();
        this.state = { date: new Date()};
        setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
        this.setState({ date: new Date()});
    }

    render(){
        return(
            <div>
                <Header />
                Hello
                <Footer />
            </div>
        )
    }
}

export default Layout