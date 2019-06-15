import React, { Component } from 'react';
import Layout from '../component/layout';
import CardElement from '../component/card';
import '../static/css/style.css';
import { Button } from 'reactstrap';
import { withRouter } from "react-router-dom";

class Home extends Component{
    render(){
        return(
            <div>
                <Layout>
                    <div className="container">
                        <div className="toolbox-controls">
                            <Button color="primary" onClick={() => this.props.history.push('project/add')}>Add</Button>{' '}
                        </div>
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-md-4">
                                    <CardElement title="Title1" date="18 MIN AGO" tag="TAG" type="project"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default withRouter(Home)