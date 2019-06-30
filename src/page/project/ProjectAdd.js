import React, { Component } from 'react';
import Layout from '../../component/layout';
import { Button, Form, FormGroup, Label, Input, 
         Container, Row, Col,
         CardHeader, Card, CardBody, Jumbotron, Alert 
} from 'reactstrap';
import firebase from '../../firebase';

const initialState = {
    projectName: '',
    projectType: '',
    projectTag: '',
    projectNote: '',
    projectNotiSupportDomain: '',
    projectNotiHostDate: '',
    projectNotiSupportDate: '',
}

class ProjectAdd extends Component{
    constructor(props){
        super(props)
        
        this.state = initialState

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit      = this.handleSubmit.bind(this)
    }
    
    validationForm = () => {  
        let { projectName, projectType, projectTag } = this.state
        let message = '';
        let bfail = false;
        let alertMessage = '';

        if(!projectName){ message = 'กรุณากรอกชื่อโปรเจค'; bfail = true; }
        else if(!projectType){ message = 'กรุณากรอกประเภทโปรเจค'; bfail = true; }
        else if(!projectTag){ message = 'กรุณากรอกแท๊กโปรเจค'; bfail = true; }
        
        if(bfail){ 
            alertMessage = <Alert color="danger">{message}</Alert>
            this.setState({alertMessage});
           
            return false
        }else{
            alertMessage = <Alert color="success">เพิ่มโปรเจคเสร็จสมบูรณ์</Alert>
            this.setState({alertMessage});
        }
        
        return true
    }

    handleSubmit(event){
        const isValid = this.validationForm();
        if(isValid){     
        
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

            // Clear Value
            this.setState(initialState);
        }
        window.scrollTo(0, 0)
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value})
    }

    render(){
        console.log(new Date().getDate());
        return(
            <Layout>
                <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                        { this.state.alertMessage }
                        <Card className="shadow-sm rounded-0">
                                <CardHeader><h5>Header</h5></CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit} >
                                        <FormGroup>
                                            <Label for="projectName">Project Name</Label>
                                            <Input type="text" name="projectName" id="projectName" onChange={this.handleInputChange} value={this.state.projectName} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="projectType">Type</Label>
                                            <Input type="select" name="projectType" id="projectType" onChange={this.handleInputChange} value={this.state.projectType} >
                                                <option></option>
                                                <option value="project">Project</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="projectTag">Tag</Label>
                                            <Input type="text" name="projectTag" id="projectTag" onChange={this.handleInputChange } value={this.state.projectTag} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="projectNote">Note</Label>
                                            <Input type="text" name="projectNote" id="projectNote" onChange={this.handleInputChange} value={this.state.projectNote} />
                                        </FormGroup>
                                        <Jumbotron>
                                            <Label><h4>Expire</h4></Label>
                                            <FormGroup>
                                                <Label for="projectNotiSupportDomain">Domain Date</Label>
                                                <Input type="text" name="projectNotiSupportDomain" id="projectNotiSupportDomain" onChange={this.handleInputChange} value={this.state.projectNotiSupportDomain} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="projectNotiSupportDate">Support Date</Label>
                                                <Input type="text" name="projectNotiSupportDate" id="projectNotiSupportDate" onChange={this.handleInputChange} value={this.state.projectNotiSupportDate} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="projectNotiHostDate">Host Date</Label>
                                                <Input type="text" name="projectNotiHostDate" id="projectNotiHostDate" onChange={this.handleInputChange} value={this.state.projectNotiHostDate} />
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