import React from 'react'
import { Row,Col } from 'reactstrap';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faPhoneSquare, faEnvelope } from '@fortawesome/fontawesome-free-solid'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import img from './mypic.jpg'
export default function AboutUs() {
    return (
        <div style={{backgroundColor:"#D8ECF4"}}>
            
            <Row style={{margin:"5vw"}}>
                
                <Col xs="12" sm="4" style={{height:"auto",backgroundColor:"#7995AD",textAlign:"center",borderRadius:"25px",marginBottom:"2vw"}}>
                    
                    <h1 className="display-3 text-center" style={{marginTop:"18vw"}}>ABOUT US</h1>
                    
                </Col>
                <Col xs="0" sm="1">
                </Col>
                <Col xs={{size:12}} sm="6" style={{height:"auto",backgroundColor:"#7995AD",textAlign:"center",borderRadius:"25px"}}>
                <Card style={{margin:"2vw",marginTop:"5vw",borderRadius:"25px",backgroundColor:"#A2B9CD"}}>
        <CardBody>
          <CardTitle className="display-4" tag="h5">CREATOR</CardTitle>
          
        </CardBody >
        <img  style={{backgroundImage:`url(${img})`,height:"10rem",width:"12rem",marginLeft:"12vw",borderRadius:"25%"}} src={img} alt="Card image cap" />
        <CardBody className="lead">
          <CardText>I am a student of B.Tech 4th Year of Computer Science.
              I am graduating from Deenbandhu Chhotu Ram University.
              I beleive in making things more convinient and automative.
             </CardText>
             <CardText>
             <FontAwesomeIcon icon={faEnvelope} /> <b>nkumar199775@gmail.com</b>
                 <br></br>
                 <FontAwesomeIcon icon={faPhoneSquare} /> <b>8053165188</b>
             </CardText>
             
         
        </CardBody>
      </Card>

                </Col>
            </Row>
        </div>
    )
}
