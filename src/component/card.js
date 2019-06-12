import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';

class CardElement extends Component{
    render(){
        return(
            <div>
                <Card className="shadow-sm rounded-0">
                    <CardBody>
                        <div className="card-bar">
                            <p>CardBar</p>    
                        </div>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardElement