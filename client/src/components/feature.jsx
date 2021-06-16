import React from 'react';
import {
  Card, CardGroup, CardText,Row ,Col , CardBody, CardLink,
  CardTitle, CardDeck
} from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';

const Feature = (props) => {
  return (
      <>
     <hr  className="my-2" /> 
    <div>
    <Jumbotron style={{backgroundColor:"rgb(113 113 109)"}}>
      <h1 className="display-3 text-center">FEATURES</h1>
      <p className="lead text-center">Exciting Experience of Well Organised Event Ahead!</p>
      <hr className="my-2" />
      
    
  
  <Row>
  <CardDeck >
      
      
      <Card style={{backgroundColor:"rgba(12, 5, 4, 0.5)",color:"white"}}>
       
        <CardBody>
          <CardTitle className="display-4 text-center">HOST</CardTitle>
          <CardText className="my-2">Here you can publish your any type of event such as Webinars, Bootcamp, Hackathon.
            Your event will be displayed to a large network of our registered users.
            Hence you get a platform to increase your reach in public.  </CardText>
        </CardBody>
      </Card>
      
      
      <Card style={{backgroundColor:"rgba(12, 5, 4, 0.5)",color:"white"}}>
        
        <CardBody >
          <CardTitle className="display-4 text-center">PARTICIPATE</CardTitle>
          <CardText>Here any registered user can participate in any of the published event by 
            simply registering and paying the fees for the event.It is a common platform to 
            get notified for the ongoing events.User get a secret key on registering event which 
            can be used to mark their attendance.</CardText>
        </CardBody>
      </Card>
      
      
      <Card style={{backgroundColor:"rgba(12, 5, 4, 0.5)",color:"white"}}>
        
        <CardBody>
          <CardTitle className="display-4 text-center">TRACK</CardTitle>
          <CardText>Here both the organiser and user get their own dashboard where they can track their records of the events registered and 
            events created.Also organiser can mark attendance of the user and user can track their attendance 
            on dashboard section.
          </CardText>
        </CardBody>
      </Card>
     
      
    </CardDeck>
    </Row>
    </Jumbotron>
    </div>
    
    </>
  );
};

export default Feature;