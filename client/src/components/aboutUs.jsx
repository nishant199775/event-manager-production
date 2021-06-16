import React from 'react'
import { Row,Col } from 'reactstrap';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import img from './mypic.jpg'
export default function AboutUs() {
    return (
        <div style={{backgroundColor:"#D8ECF4"}}>
            
            <Row style={{margin:"2vw"}}>
                
                <Col sm="4" style={{height:"40vw",backgroundColor:"#7995AD",textAlign:"center",borderRadius:"25px"}}>
                    
                    <h1 className="display-3" style={{marginTop:"18vw"}}>ABOUT US</h1>
                    
                </Col>
                <Col sm="1">
                </Col>
                <Col sm="6" style={{height:"40vw",backgroundColor:"#7995AD",textAlign:"center",borderRadius:"25px"}}>
                <Card style={{margin:"2vw",marginTop:"5vw",borderRadius:"25px",backgroundColor:"#A2B9CD"}}>
        <CardBody>
          <CardTitle className="display-4" tag="h5">CREATOR</CardTitle>
          
        </CardBody >
        <img  style={{backgroundImage:`url(${img})`,height:"10vw",width:"10vw",marginLeft:"15vw",borderRadius:"50%"}} src={img} alt="Card image cap" />
        <CardBody className="lead">
          <CardText>I am a student of B.Tech 4th Year of Computer Science.
              I am graduating from Deenbandhu Chhotu Ram University.
              I beleive in making things more convinient and automative.
             </CardText>
             <CardText>
                 Gmail :nkumar199775@gmail.com
                 <br></br>
                 Phone Number :8053165188
             </CardText>
             
         
        </CardBody>
      </Card>

                </Col>
            </Row>
        </div>
    )
}
