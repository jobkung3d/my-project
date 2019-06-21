import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class CardNotification extends Component{
    render(){
        const {date, title} = this.props;
        return(
            <div className="crd-sm border rounded text-center">
                <div className="crd-sm-number px-2 py-1"><h5 className="mb-0">{date}</h5></div>
                <div className="crd-sm-title">{title}</div>
            </div>   
        )
    }
}
class CardElement extends Component{

    showCardNotification(){
        return this.props.notification && this.props.notification.map(noti => (
            <div className="col mb-2" key={noti.notiId} style={{minWidth:'80px'}}>
                <CardNotification {...noti} />
            </div>
        ))
    }

    render(){
        const {projectName, date, tag, type} = this.props;
        return(
            <div className="mb-3">
                <Card className="shadow-sm rounded-0">
                    <CardBody>
                        <div className="crd-bar text-uppercase clearfix">
                            <p className="float-left mb-2" style={{color:'#6666'}}>{type}</p>    
                            <p className="float-right mb-2">{date}</p>
                        </div>
                        <div className="crd-body">
                            <h5 className="mt-0 mb-2">{projectName}</h5>
                            <div className="crd-body-tag">
                              <div className="tag rounded px-3 py-2 d-inline-block text-uppercase">{tag}</div>
                            </div>
                            <div className="crd-body-noti my-3">
                                <div className="row">
                                    {this.showCardNotification()}
                                </div>                             
                            </div>
                        </div>
                        <div className="crd-footer">
                            <p>Footer</p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardElement