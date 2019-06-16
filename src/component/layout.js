import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class Layout extends Component{
    render(){
        const { children, className } = this.props; 
        return(
            <div>
                <Header />
                    <div className={className} >
                        { children }
                    </div>
                <Footer />
            </div>   
        )
    }
}

export default Layout;