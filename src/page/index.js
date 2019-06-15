import React, { Component } from 'react';
import Layout from '../component/layout';
import CardElement from '../component/card';
import '../static/css/style.css';
import { Button } from 'reactstrap';
import { withRouter } from "react-router-dom";

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {projects:""}
    }

    componentDidMount(){
        this.setState({ projects :[
            { projectId : 1, projectName: "Rem13", type: "project", date: "18 MIN AGO", tag: "Websign", notification: [{notiId: 1, title: "Domain", date: "350"}, {notiId: 2, title: "Email", date: "350"}, {notiId: 3, title: "Host", date: "980"}] },
            { projectId : 2, projectName: "๋Jobkung3d", type: "project", date: "50 MIN AGO", tag: "Websign", notification: [{notiId: 1, title: "Domain", date: "950"}, {notiId: 2, title: "Email", date: "80"}, {notiId: 3, title: "Host", date: "500"}] },
            { projectId : 3, projectName: "Thebeginingofsomething", type: "project", date: "25 day AGO", tag: "Facebook", notification: [{notiId: 1, title: "Bucket", date: "350"}]}
        ]})
    }

    showProject(){
        return this.state.projects && this.state.projects.map(project => (
            <div className="col-md-4" key={project.projectId}>
                <CardElement {...project}/>
            </div>
        ))
    }

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