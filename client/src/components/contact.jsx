import { Jumbotron, Button, Row, Col } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import React from 'react';
const Contact = (props) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
    return (
        <>
       <hr className="my-2" /> 
      <div>
      <Jumbotron style={{backgroundColor:"rgb(113 113 109)"}}>
        <h1 className="display-3 text-center">Get in Touch</h1>
        <hr className="my-2" />
        <Row>
           <Col sm={3}></Col>
           <Col sm={7}>
        <Form>
        <FormGroup>
          <Input type="textarea" name="message" id="message" placeholder="Message" />
      </FormGroup>
      </Form>
      <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        
        <Input type="text" name="Name" id="Name" placeholder="Full Name" />
      </FormGroup>
      <Button onClick={handleSubmit} style={{backgroundColor:"grey"}}>Submit</Button>
    </Form>
    </Col>
    </Row>
        </Jumbotron>
        </div>
        </>
    );

};
export default Contact;
