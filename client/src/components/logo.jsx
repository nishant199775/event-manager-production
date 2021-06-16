import React from 'react';
import { Row,Col,Media } from 'reactstrap';
import {BsFillPersonCheckFill} from 'react-icons/bs';


const Logo = () => {
  return (
      <Row>
          <Col sm={10}></Col>
          <Col sm={2}>
    <Media>
      
      <Media body>
      <Row>
        <Col sm="4">
        <Media heading>
         
          <h5>ADMIN</h5>
          </Media>
          <h6>Profile</h6>
          </Col>
          <Col sm="4">
            <BsFillPersonCheckFill size="60"/>
          </Col>
          </Row>
        </Media>
        
    </Media>
    </Col>
    </Row>
  );
};
export default Logo;