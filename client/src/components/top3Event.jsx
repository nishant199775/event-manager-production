import React from 'react'
import {
    Card, CardImg, CardTitle,  
     CardBody,CardSubtitle,CardText,Button
  } from 'reactstrap';
export default function Top3Event(props) {
    const {image,name}=props.event;
    return (
        <div>
             
        <Card style={{width:"25%",display:"inline-block"}}>
        <CardImg top  src="https://wallpaperboat.com/wp-content/uploads/2019/10/best-background-for-website-01.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          
          <Button>Button</Button>
        </CardBody>
      </Card>
    
        </div>
    )
}
