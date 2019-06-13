import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class CardElement extends Component{
    render(){
        return(
            <div className="mb-3">
                <Card className="shadow-sm rounded-0">
                    <CardBody>
                        <div className="crd-bar text-uppercase clearfix">
                            <p className="float-left mb-2" style={{color:'#6666'}}>Project</p>    
                            <p className="float-right mb-2">18 Mins Ago</p>
                        </div>
                        <div className="crd-body">
                            <h5 className="mt-0 mb-2">Webdesign</h5>
                            <div className="crd-body-tag">
                              <div className="tag rounded px-3 py-2 d-inline-block text-uppercase">Tag</div>
                            </div>
                            <div className="crd-body-noti my-4">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="crd-sm border rounded text-center">
                                            <div className="crd-sm-number px-2 py-1"><h2 className="mb-0">1200</h2></div>
                                            <div className="crd-sm-title">Assign</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="crd-sm border rounded text-center">
                                            <div className="crd-sm-number px-2 py-1"><h2 className="mb-0">1200</h2></div>
                                            <div className="crd-sm-title">Assign</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="crd-sm border rounded text-center">
                                            <div className="crd-sm-number px-2 py-1"><h2 className="mb-0">1200</h2></div>
                                            <div className="crd-sm-title text-center">Assign</div>
                                        </div>
                                    </div>
                                </div>                             
                            </div>
                        </div>
                        <div className="crd-footer">

                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardElement