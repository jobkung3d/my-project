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
        /*this.setState({ projects :[
            { projectId : 1, projectName: "Rem13", type: "project", date: "18 MIN AGO", tag: "Websign", notification: [{notiId: 1, title: "Domain", date: "350"}, {notiId: 2, title: "Support", date: "350"}, {notiId: 3, title: "Host", date: "9980"}] },
            { projectId : 2, projectName: "Jobkung3d", type: "project", date: "50 MIN AGO", tag: "Websign", notification: [{notiId: 1, title: "Domain", date: "950"}, {notiId: 2, title: "Support", date: "80"}, {notiId: 3, title: "Host", date: "500"}] },
            { projectId : 3, projectName: "Thebeginingofsomething", type: "project", date: "25 day AGO", tag: "Facebook", notification: [{notiId: 1, title: "Bucket", date: "350"}]}
        ]})*/
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
                <CardElement {...projects[project]}/>
            </div>
        ))
    }

    render(){
        return(
            <div>
                <Layout>
                    <div className="container">
                        <div className="toolbox-controls pb-4">
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