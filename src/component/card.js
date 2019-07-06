import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

class CardNotification extends Component{
    render(){
        const {value, title} = this.props;
        return(
            <div className="crd-sm border rounded text-center">
                <div className="crd-sm-number px-2 py-1"><h5 className="mb-0 text-truncate">{value?value:'-'}</h5></div>
                <div className="crd-sm-title">{title}</div>
            </div>   
        )
    }
}
class CardElement extends Component{

    constructor(props){
        super(props)

        this.handleRemove = this.handleRemove.bind(this)
    }

    showCardNotification(){ 
        const {project_noti} = this.props
        return Object.keys(project_noti) && Object.keys(project_noti).map(noti => (
                    Object.keys(project_noti[noti]) && Object.keys(project_noti[noti]).map((value, index) => (
                        <div className="col mb-2" key={index} style={{minWidth:'80px'}}>
                            <CardNotification {...project_noti[noti][value]} />
                        </div>
                ))
        ))      
    }

    handleRemove() {    
        if(window.confirm('ยืนยันการลบ')){
            return firebase.database().ref('projects').child(this.props.keyPrg).remove();
        }
    }

    render(){
        const {project_name, project_date, project_tag, project_type, keyPrg} = this.props;
        return(
            <div className="mb-3">
                <Card className="shadow-sm rounded-0">
                    <CardBody>
                        <div className="crd-bar text-uppercase clearfix">
                            <p className="float-left mb-2" style={{color:'#6666'}}>{project_type}</p>    
                            <p className="float-right mb-2 text-muted">{(project_date?project_date:'')}</p>
                        </div> 
                        <div className="crd-body">
                            <h5 className="mt-0 mb-2">{project_name}</h5>
                            <div className="crd-body-tag">
                              <div className="tag rounded px-3 py-2 d-inline-block text-uppercase">{project_tag}</div>
                            </div>
                            <div className="crd-body-noti my-3">
                                <div className="row">
                                    {this.showCardNotification()}
                                </div>                             
                            </div>
                        </div>
                        <div className="crd-footer text-right">
                            { /* <Button outline size="sm" className="mr-2" tag={Link} to={"Project/Edit/" + keyPrg}> Edit </Button> */}
                            <Button outline color="danger" size="sm" onClick={this.handleRemove}> Delete </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardElement