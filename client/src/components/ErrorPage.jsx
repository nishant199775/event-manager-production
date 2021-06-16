import React from 'react'
import { Jumbotron, Container } from 'reactstrap';

export default function ErrorPage(props) {
    return (
        <div>
            <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">ERROR Occured!</h1>
          <p className="lead">props.message</p>
        </Container>
      </Jumbotron>
        </div>
    )
}
