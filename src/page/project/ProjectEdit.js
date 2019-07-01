import React, { Component } from 'react'
import Layout from '../../component/layout'
import { Button, Form, FormGroup, Label, Input, 
         Container, Row, Col,
         CardHeader, Card, CardBody, Jumbotron, Alert 
} from 'reactstrap'
import { Link } from 'react-router-dom'
import firebase from '../../firebase'

const initialState = {
    projectName: '',
    projectType: '',
    projectTag: '',
    projectNote: '',
    projectNotiSupportDomain: '',
    projectNotiHostDate: '',
    projectNotiSupportDate: '',
}

class ProjectEdit extends Component{
    constructor(props){
        super(props)
        this.state = initialState
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit      = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        const that = this
        const projectsRef = firebase.database().ref('projects').child(this.props.match.params.id);
        projectsRef.on('value', function(snapshot) {
            if(snapshot.val() != null){

                const { project_name, project_type, project_tag, project_note } = snapshot.val()
                that.setState({
                    projectName: project_name,
                    projectType: project_type,
                    projectTag:  project_tag,
                    projectNote: project_note,
                    projectNotiSupportDomain: '',
                    projectNotiHostDate: '',
                    projectNotiSupportDate: '',
                })

                //Object.keys
                const projectNoti = snapshot.val().project_noti;
                Object.keys(projectNoti).forEach((value)=>{
                    that.setState({
                        projectNoti : {
                            [value] : {
                                projectNotiSupportDomain: projectNoti[value].project_noti_support_domain,
                                projectNotiHostDate: projectNoti[value].project_noti_host_date,
                                projectNotiSupportDate: projectNoti[value].project_noti_support_date,
                            }                         
                        }              
                    })
                })
            }
        });
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
        
            const { projectName, projectType, projectTag, projectNote, projectNoti  } = this.state
            const projectID = this.props.match.params.id
            const NotificationID =  Object.keys(projectNoti)
            const getFullDate = new Date().getDate()+'/'+ new Date().getMonth() + '/' + new Date().getFullYear()

            firebase.database().ref('projects/'+ projectID).update({
                project_name: projectName,
                project_type: projectType,
                project_tag: projectTag,
                project_note: projectNote,
                project_date: getFullDate,
                project_noti: {
                    [NotificationID]: {
                        project_noti_support_domain: {
                            title : 'Domain',
                            value : projectNoti[NotificationID].projectNotiSupportDomain.value
                        },
                        project_noti_host_date: {
                            title : 'Host',
                            value : projectNoti[NotificationID].projectNotiHostDate.value
                        },
                        project_noti_support_date: {
                            title : 'Support',
                            value : projectNoti[NotificationID].projectNotiSupportDate.value
                        },
                    }
                }  
            });
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

    showNotification(){
        return (
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
        )
    }
    render(){ 
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
                                        
                                        { this.showNotification() }
                                        
                                        <Button outline tag={Link} to="/">Back</Button>
                                        <Button color="primary" className="float-right" align="right">Submit</Button>
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

export default ProjectEdit