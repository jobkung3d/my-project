import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class CardElement extends Component{
    render(){
        return(
            <div className="mb-3">
                <Card className="shadow-sm rounded-0">
                    <CardBody>
                        <div className="crd-bar text-uppercase clearfix">
                            <p className="float-left mb-1" style={{color:'#6666'}}>Project</p>    
                            <p className="float-right mb-1">18 Mins Ago</p>
                        </div>
                        <div className="crd-body">
                          <h5 className="mt-0">Webdesign</h5>
                          <div className="crd-body-tag">
                              <div className="tag rounded p-3">Tag</div>
                          </div>
                          <div className="crd-body-noti my-4">
                              <div className="row">
                                  <div className="col-4">test</div>
                                  <div className="col-4">test</div>
                                  <div className="col-4">test</div>
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