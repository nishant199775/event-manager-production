import React from 'react'
import { useLocation } from 'react-router-dom'
import {
     Table, 
     CardHeader,Row,Col,Card
  } from 'reactstrap';
import moment from 'moment'
export default function RegistrantsDetails() {
    const location=useLocation();
    const {details}=location.state;
    const {name,city,phone,gender,email}=details.user;
    const {name:ename}=details.event;
    const {key,createdAt}=details;
    return (
        <div>
            {/* <Card body> */}
            <Row>
                    <Col>
                    <CardHeader className="display-4" style={{margin:"2vw",textTransform:"capitalize",textAlign:"center"}} tag="h3">DETAILS</CardHeader> 

                    </Col>
                </Row>
                <Card body style={{margin:"1vw 15vw"}}>
                <Row>
                    <Col sm="1" xs="0">
                    </Col>
                    <Col sm="10" xs="12">
                <Table>
                <tbody>
                <tr>
                    
                <th scope="row">NAME</th>
                
                <td>{name}</td>
                </tr>
                <tr>
                <th scope="row">EVENT NAME</th>
                
                <td>{ename}</td>
                </tr>
                <tr>
                <th scope="row">EMAIL</th>
                
                <td>{email}</td>
                </tr>
                <tr>
                <th scope="row">PHONE NUMBER</th>
                
                <td>{phone}</td>
                </tr>
                
                
                <tr>
                <th scope="row">CITY</th>
                
                <td>{city}</td>
                </tr>
                <tr>
                <th scope="row">GENDER</th>
                
                <td>{gender}</td>
                </tr>
                <tr>
                <th scope="row">JOINED ON</th>
                
                <td>{moment(createdAt).format("MMM Do YYYY")}</td>
                </tr>
                <tr>
                <th scope="row">JOINED AT</th>
                
                <td>{moment(createdAt).format("hh:mm:ss a")}</td>
                </tr>
                <tr>
                <th scope="row">SECRET KEY</th>
                
                <td>{key}</td>
                </tr>
                
                
            </tbody>
        </Table>
        </Col>
        <Col sm="1" xs="0">
        </Col>
                </Row>
        </Card>
            {/* </Card> */}
                
            </div>
    )
}

