
import Axios from 'axios'
import React, { Component } from 'react'
import { CardHeader,Card,Col,Row,Button} from 'reactstrap'
import { Link } from 'react-router-dom';
import moment from 'moment';
export default class recentRegistrants extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             regitrants:[],
             loading:false
        }
    }
    
    
    render() {
        
            const {registrants}=this.props;
        return (
            <>
               
                {
                    registrants.map((registrant)=>{
                        return(<Card body style={{marginTop:"2vw"}}>
                        <Row>
                            <Col sm="2">
                                {registrant.user.name}
                            </Col>
                            <Col sm="3">
                               <b>{registrant.event.name}</b> 
                            </Col>
                            <Col sm="2">
                                {moment(registrant.createdAt).format("MMM Do YYYY")}
                            </Col>
                            <Col sm="2">
                                {registrant.user.city}
                            </Col>
                            <Col sm="2">
                                {registrant.user.phone}
                            </Col>
                            
                            <Col sm="1">
                                <Link style={{color:"white"}} exact to={{
                                    pathname:'/registrant/details',
                                    state:{details:registrant}
                            }}><Button style={{}}>Details</Button></Link>
                                    
                                
                            </Col>
                        </Row>
                    </Card>);
                    })

                }
                    
                
                 
            </>
        
        )
    }
}
