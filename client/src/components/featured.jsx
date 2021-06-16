import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Top3Event from './top3Event';
import {
  Row,  CardDeck
} from 'reactstrap';
import {
  Card, Button, CardImg, CardTitle, CardText, 
  CardSubtitle, CardBody
} from 'reactstrap';
import { Jumbotron } from 'reactstrap';

const Featured = (props) => {
  const history=useHistory();
 
  const [one,setOne]=useState({})
  const [two,setTwo]=useState({})
  const [three,setThree]=useState({})
  useEffect(()=>{
    const response= async ()=>{
     try {
        const res=await Axios.get('/api/v1/events/getTopEvents');
        console.log(res.data)
        const top3=res.data.events.slice(0,3);
          setOne(top3[0]);
          setTwo(top3[1]);
          setThree(top3[2]);
        }
        catch(err)
        {
          console.log('error',err);
          history.push('/Unauthorized')
        }

    }
    response();
  },[])
  return (
    
    <Jumbotron style={{backgroundColor:"rgb(113 113 109)"}}>
    <h1 className="display-3 text-center">TOP EVENTS</h1>
    <p className="lead text-center">Go Get Registered And Have Fun!</p>
    <hr className="my-2" />
    <Row>
    <CardDeck>
      <Card style={{backgroundColor:"rgba(12, 5, 4, 0.5)",color:"white",textAlign:"center"}}>
        <CardImg top width="100%" height="200vw" src={one.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{one.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 ">{one.type}</CardSubtitle>
          
          
        </CardBody>
      </Card>
      <Card style={{backgroundColor:"rgba(12, 5, 4, 0.5)",color:"white",textAlign:"center"}}>
        <CardImg top width="100%" height="200vw" src={two.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{two.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 ">{two.type}</CardSubtitle>
          
        </CardBody>
      </Card>
      <Card style={{backgroundColor:"rgba(12, 5, 4, 0.5)",color:"white",textAlign:"center"}}>
        <CardImg top width="100%" height="200vw" src={three.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{two.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 ">{two.type}</CardSubtitle>
          
          
        </CardBody>
      </Card>
    </CardDeck>

      </Row>
    </Jumbotron>
  );
};

export default Featured;