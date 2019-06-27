import React, { Component } from 'react';
import Layout from '../../component/layout';
import { Button, Form, FormGroup, Label, Input, 
         Container, Row, Col,
         CardHeader, Card, CardBody, Jumbotron 
} from 'reactstrap';
import firebase from '../../firebase';

class ProjectAdd extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            projectName: '',
            projectType: '',
            projectTag: '',
            projectNote: '',
            projectNotiSupportDomain: '',
            projectNotiHostDate: '',
            projectNotiSupportDate: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit      = this.handleSubmit.bind(this)
    }

    handleSubmit(event){

        
        const { projectName, projectType, projectTag, projectNote, projectNotiSupportDomain, projectNotiSupportDate, projectNotiHostDate  } = this.state
        const projectID = firebase.database().ref().child('projects').push().key;
        const NotificationID = firebase.database().ref().child('project_noti').push().key;

        firebase.database().ref('projects/'+ projectID).set({
           project_name: projectName,
           project_type: projectType,
           project_tag: projectTag,
           project_note: projectNote,
           project_date: new Date().toLocaleString(),
           project_noti: {
               [NotificationID]: {
                    project_noti_support_domain: {
                        title : 'Domain',
                        value : projectNotiSupportDomain
                    },
                    project_noti_host_date: {
                        title : 'Host',
                        value : projectNotiHostDate
                    },
                    project_noti_support_date: {
                        title : 'Support',
                        value : projectNotiSupportDate
                    },
               }
           }  
        });
        
        
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value})
    }

    render(){
        return(
            <Layout>
                <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                        <Card className="shadow-sm rounded-0">
                                <CardHeader><h5>Header</h5></CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit} >
                                        <FormGroup>
                                            <Label for="projectName">Project Name</Label>
                                            <Input type="text" name="projectName" id="projectName" onChange={this.handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="projectType">Type</Label>
                                            <Input type="select" name="projectType" id="projectType" onChange={this.handleInputChange}>
                                                <option></option>
                                                <option value="project">Project</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="projectTag">Tag</Label>
                                            <Input type="text" name="projectTag" id="projectTag" onChange={this.handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="projectNote">Note</Label>
                                            <Input type="text" name="projectNote" id="projectNote" onChange={this.handleInputChange} />
                                        </FormGroup>
                                        <Jumbotron>
                                            <Label><h4>Expire</h4></Label>
                                            <FormGroup>
                                                <Label for="projectNotiSupportDomain">Domain Date</Label>
                                                <Input type="text" name="projectNotiSupportDomain" id="projectNotiSupportDomain" onChange={this.handleInputChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="projectNotiSupportDate">Support Date</Label>
                                                <Input type="text" name="projectNotiSupportDate" id="projectNotiSupportDate" onChange={this.handleInputChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="projectNotiHostDate">Host Date</Label>
                                                <Input type="text" name="projectNotiHostDate" id="projectNotiHostDate" onChange={this.handleInputChange} />
                                            </FormGroup>  
                                        </Jumbotron>    
                                        <Button color="primary">Submit</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Layout>   
        )
    }
}

export default ProjectAdd