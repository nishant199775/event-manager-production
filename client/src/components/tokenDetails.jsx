import React from 'react'
import {
     Table, 
     CardHeader,Row,Col
  } from 'reactstrap';
export default function TokenDetails(props) {
    return (
        <div>
                <Row>
                    <Col>
                    <CardHeader className="lead" style={{margin:"1vw",textAlign:"center"}} >DETAILS</CardHeader> 

                    </Col>
                </Row>
                <Row>
                    <Col sm="2">
                    </Col>
                    <Col sm="6">
                <Table>
                <tbody>
                <tr>
                <th scope="row">NAME</th>
                
                <td>{props.details.name}</td>
                </tr>
                <tr>
                <th scope="row">EMAIL</th>
                
                <td>{props.details.email}</td>
                </tr>
                <tr>
                <th scope="row">PHONE NUMBER</th>
                
                <td>{props.details.phone}</td>
                </tr>
                
                <tr>
                <tr>
                <th scope="row">CITY</th>
                </tr>
                <td>{props.details.city}</td>
                </tr>
                <tr>
                <th scope="row">GENDER</th>
                
                <td>{props.details.gender}</td>
                </tr>
                
                
            </tbody>
        </Table>
        </Col>
        </Row>
    </div>
            
    )
}
