import axios from 'axios';
import React, { Component } from 'react';
import moment from 'moment';
import SimilarEvents from './similarEvents';
import {withRouter} from 'react-router-dom'
  
import {
    Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardDeck, Button, CardHeader
  } from 'reactstrap';

 class eventDetails extends Component {
    constructor(props)
    {
        super(props);
         this.state={event:{},similarEvents:[],reload:false};
    }
    async componentDidMount(){
        const eid=this.props.location.state.eventId;
        
        const res=await axios.get("/api/v1/events/getEventById",{
            params:{
                id:eid
            }
        });
        //  console.log(res.data.data);
         const currEvent=res.data.data;
         const {type} =currEvent;
         const res2=await axios.get("/api/v1/events/getEventByType",{
             params:{type:type}
         });
         const similarEvents=res2.data.data;
         console.log("similar:",res2.data.data)
         this.setState({event:currEvent,similarEvents:similarEvents});
        

    }
    reloadPage=()=>{
        this.setState({reload:!this.state.reload});
        window.location.reload();
        
      }
    handleRegister=(e)=>{
        e.preventDefault();
        const id=e.target.id;
        this.props.history.push({
            pathname:"/registerForm",
            state:{event:this.state.event}
        })
    }
    
    render() {
        const {fees,location,name,description,date,type,image}=this.state.event;
        const similarEvents=this.state.similarEvents;
        
        return (
    <div style={{backgroundColor:"white",overflow:"hidden"}}>
        <Row>
            <Col sm="1">
            </Col>
            <Col sm="10">
            <Card style={{margin:'3vw',marginLeft:'5vw',padding:'3vw',backgroundColor:"silver"}}>
        <Row>
            <Col sm="6">
                <CardImg top height="100%"  src={image} alt="abc.com" />
            </Col>
            <Col sm="6">
            <CardHeader className="display-4" style={{textTransform:"capitalize"}} tag="h3">{name}</CardHeader>
            <CardText>
               <small style={{float:"right",margin:"1vw"}} className="text-muted">Tag: {type}</small> 
            </CardText>
            
            <CardBody>
            
            <CardTitle tag="h3" className="mb-2 text-muted">REGISTRATION FEES: Rs.{fees}</CardTitle>
            </CardBody>
            
            
            <CardBody style={{float:"bottom"}}>
                <CardText>{description} </CardText>
                
                <CardText style={{display:"flex",justifyContent:"space-between"}}>
                
                    <small  className="lead">Date: {moment(date).format("MMM Do YYYY")}</small>
                    <small  className="lead">Location: {location}</small>
                </CardText>
                    <Button  color="success" onClick={this.handleRegister}>Register</Button>
               
            </CardBody>
            </Col>
            
            
     
        </Row>
        </Card>
        <Card style={{margin:'3vw',marginLeft:'5vw',padding:'3vw',backgroundColor:"silver"}}>
        <Row >
            <Col sm="12">
            <CardHeader style={{textAlign:"center"}} className="display-4">SIMILAR EVENTS</CardHeader>
            </Col>
            
          
            <CardDeck style={{margin:"2vw"}}>
               
               
                {
                
                    similarEvents.map((event,index)=>{
                        console.log("in map event",event);
                       return (<SimilarEvents key={index} event={event} reloadPage={this.reloadPage}/>)
                    })
                }
               
                
            </CardDeck>
           
        </Row>
      </Card>
            </Col>
        </Row>
        
    </div>
        )
    }
}

export default withRouter(eventDetails);