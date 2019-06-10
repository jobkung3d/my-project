import React, { Component } from 'react';
import Layout from '../component/layout';
import CardElement from '../component/card';
import '../static/css/style.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Layout>
                    <div className="container">
                        <CardElement />
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Home