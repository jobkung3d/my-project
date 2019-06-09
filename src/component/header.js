import React, { Component } from 'react';

class Header extends Component{
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

    render() {
        return(
            <div className="clearfix">
                <div className="float-left">Header</div> 
                <div className="float-right">{this.state.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}

export default Header