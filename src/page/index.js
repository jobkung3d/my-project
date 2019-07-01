import React, { Component } from 'react';
import Layout from '../component/layout';
import CardElement from '../component/card';
import '../static/css/style.css';
import { Button } from 'reactstrap';
import { withRouter } from "react-router-dom";
import firebase from '../firebase';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {projects:""}
    }

    componentDidMount(){

        const that = this
        var projectsRef = firebase.database().ref('projects');
        projectsRef.on('value', function(snapshot) {
            if(snapshot.val() != null){
                that.setState({
                    projects : snapshot.val()
                })
            }
        });
    }
    showProject(){
        // Firebase retun ค่ากลับมาเป็น Object 
        // ทำให้ .map ไม่ได้ ต้องใช้ Object.keys() เข้าช่วย

        const { projects } = this.state
        return projects && Object.keys(projects).map((project, index) => (
            <div className="col-md-4" key={index}>
                <CardElement {...projects[project]} keyPrg={project} />
            </div>
        ))
    }

    render(){
        return(
            <div>
                <Layout>
                    <div className="container">
                        <div className="toolbox-controls mb-3 pb-3 border-bottom">
                            <Button color="primary" onClick={() => this.props.history.push('project/add')}>Add</Button>{' '}
                        </div>
                        <div className="wrapper">
                            <div className="row">
                                {this.showProject()}
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default withRouter(Home)