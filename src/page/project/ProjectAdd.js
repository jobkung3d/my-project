import React, { Component } from 'react';
import Layout from '../../component/layout';
import { Button, Form, FormGroup, Label, Input, 
         Container, Row, Col,
         CardHeader, Card, CardBody 
} from 'reactstrap';

class ProjectAdd extends Component{
    constructor(props){
        super(props);
        this.state = {}
        console.log(props);
    }

    render(){
        return(
            <Layout className="py-5">
                <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                        <Card className="shadow-sm rounded-0">
                                <CardHeader><h5>Header</h5></CardHeader>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="projectName">Project Name</Label>
                                            <Input type="text" name="projectName" id="projectName" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="projectType">Type</Label>
                                            <Input type="select" name="projectType" id="projectType">
                                                <option></option>
                                                <option value="project">Project</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="projectTag">Tag</Label>
                                            <Input type="text" name="projectTag" id="projectTag" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="projectNote">Note</Label>
                                            <Input type="text" name="projectNote" id="projectNote" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="projectNoti">Notification</Label>
                                            <Input type="text" name="projectNoti" id="projectNoti" />
                                        </FormGroup>
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