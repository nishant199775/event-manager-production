import React from 'react'
import { Jumbotron } from 'reactstrap';
import { useLocation } from 'react-router';
export default function Unauthaorized() {
    const location=useLocation();
    const {message}=location.state;
    return (
        <div>
            <Jumbotron>
        <h1 className="display-3">Error 401!Unauthorized Access!</h1>
        
      </Jumbotron>
      <Jumbotron>
        <h2 className="display-4">{message}</h2>
        
      </Jumbotron>
        </div>
    )
}
