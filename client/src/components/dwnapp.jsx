import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Dwnapp = (props) => {
  return (
    <div>
      <Jumbotron style={{backgroundColor:"rgb(113 113 109)"}}>
        <h1 className="display-3 text-center">GOOD NEWS</h1>
        <p className="lead text-center">With your wonderful support we are working to serve you 
        with an app platform so that managing events become more convenient and easy!</p>
        
        
        <p className="lead text-center">
          <Button color="primary" disabled>Download Now</Button>
          <small>Coming Soon</small>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Dwnapp;