
import { Button,Col,Form, FormGroup, Label, Input } from 'reactstrap';
import {Redirect,withRouter} from 'react-router-dom';
import Spinners from './Spinners'
import React, { Component } from 'react'
import Axios from 'axios';
import {Collapse} from 'reactstrap';
import {
  Card, Alert, 
   CardHeader,Row,CardBody
} from 'reactstrap';
import Details from './tokenDetails'
 class attendence extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       events:[],
       unauthorized:false,
       loaded:false,
       selectedEvent:'',
       secretKey:'',
       email:'',
       attendenceMarked:false,
       warning:false,
       message:'',
       eid:'',
       details:{},
       visible:true,
       isOpen:false,
       isDetails:''
    }
    
  }
  async componentDidMount(){
    try{
      const token=localStorage.getItem('token');
      const res=await Axios.get('/api/v1/users/showCreatedEvents',{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      console.log('events:',res.data.data)
      this.setState({events:res.data.data,loaded:true});
    }
    catch(err)
    {
      console.log(err);
      this.setState({unauthorized:true})
    }
  }
  // ondismiss for alert
  onDismiss=()=>
{
 this.setState({visible:false})
}
  // handle show details
  handleDetails=async (e)=>{
    e.preventDefault();
    const {email,selectedEvent,secretKey}=this.state;
    if(email!=''&&selectedEvent!=''&&secretKey!='')
    {
        try{
          const name=this.state.selectedEvent;
      console.log('name',name);
      const token=localStorage.getItem('token');
      console.log('selected',name.length);
      var eid='';
    await this.state.events.map((event)=>{
      console.log('inside name',event.name,'length',event.name.trim().length)
      if(event.name.trim()===name)
      {
        
        eid=event._id
        console.log('inside eid',eid);
      }
    });
    console.log('eid',eid,'email',this.state.email,'key',this.state.secretKey)
    const res=await Axios.post('/api/v1/token/showDetails',
    {key:this.state.secretKey,eid:eid,email:this.state.email},
    {
      headers:{
        "Authorization":`Bearer ${token}`
      }
    })
    console.log(res.data);
    if(res.data.status===200)
    this.setState({details:res.data.data,isOpen:!this.state.isOpen,isDetails:true});
    else
    {
      this.setState({isOpen:!this.state.isOpen,isDetails:false})
    }
    }
    catch(err)
    {
      console.log(err);
      this.setState({unauthorized:true})
    }
  }
    else{
      alert('Enter all fields')
    }
  }
  // handle submit
   handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const name=this.state.selectedEvent;
      console.log('name',name);
      const token=localStorage.getItem('token');
      console.log('selected',name.length);
      var eid='';
      
    await this.state.events.map((event)=>{
      console.log('inside name',event.name,'length',event.name.trim().length)
      if(event.name.trim()===name)
      {
        
        eid=event._id
        console.log('inside eid',eid);
      }
    });
    
    if(this.state.secretKey!=''&&this.state.email!=''&&eid!='')
    {
      console.log('eid',eid,'email',this.state.email,'key',this.state.secretKey)
    const res=await Axios.post('/api/v1/token/markAttendance',
    {key:this.state.secretKey,eid:eid,email:this.state.email},
    {
      headers:{
        "Authorization":`Bearer ${token}`
      }
    })
    console.log(res.data);
    var warning=false
    res.data.status===200?warning=false:warning=true;
    this.setState({message:res.data.message,warning:warning,visible:true})
    }
    else
    {
      alert('please enter all the fields')
    }
  }
  catch(err){
    console.log(err);
    this.setState({unauthorized:true});
  }
    

  }
  
  render() {
    if(!this.state.loaded)
    {
      return(<Spinners/>)
    }
    if(this.state.unauthorized)
    {
      return <Redirect to="/unauthorized"/>
    }
    const events=this.state.events;
    return (
      
      <div>
        {this.state.message!=''?<Alert style={{marginTop:"2vw",textAlign:"center"}} color={this.state.warning?"warning":"success"} isOpen={this.state.visible} toggle={this.onDismiss}>
      {this.state.message}
    </Alert>:''}
        <Form style={{margin:"4vw 25vw",border:"2px solid black",padding:"2vw",backgroundColor:"rgba(117, 9, 29, 0.07)",color:"rgba(7, 4, 3, 0.7)",borderRadius:"12px"}}>
                <h2 style={{textAlign:"center",padding:"1vw",borderRadius:"12px",marginBottom:"30px",backgroundColor:"rgba(117, 9, 29, 0.67)"}}>MARK ATTENDANCE </h2>
            
      <FormGroup row>
        <Label for="exampleEvent" sm={6}>Event</Label>
        <Col sm={12}>
          <Input type="select" name="event" onChange={(e)=>{console.log('event:',e.target.value);this.setState({selectedEvent:e.target.value})}}>
           {
             
             events.map((event,index)=>{
              
               return(index===0?<option selected style={{textTransform:'uppercase'}}>{event.name}</option>:
               <option style={{textTransform:'uppercase'}}>{event.name}</option>)
             })
           }
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
            <Label for="exampleEmail" sm={6}>Email</Label>
            <Col sm={12}>
              <Input type="email" name="email" onChange={(e)=>this.setState({email:e.target.value})} placeholder="Enter Email " />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplesecretKey" sm={10}>Secret Key</Label>
            <Col sm={12}>
              <Input type="text" name="secretKey" onChange={(e)=>this.setState({secretKey:e.target.value})} placeholder="Enter Password " />
            </Col>
          </FormGroup>
          
          <FormGroup check row>
            <Col style={{marginTop:"2vw",display:"flex",justifyContent:"space-between"}} sm={{ size: 8, offset: 2 }}>
            <Button id="toggler" style={{backgroundColor:"rgba(117, 9, 29, 0.67)"}} onClick={this.handleDetails}>Show Details</Button>
              <Button style={{backgroundColor:"rgba(117, 9, 29, 0.67)",}} onClick={this.handleSubmit}>Mark Attendance</Button>
            </Col>
            <Col style={{marginTop:"1vw"}} sm={{ size: 8, offset:2  }}>
              
            </Col>
          </FormGroup>
          <Collapse isOpen={this.state.isOpen} >
          <Card>
            <CardBody>
                {!this.state.isDetails?<h2>No details</h2>
                :<Details details={this.state.details}/>}
              </CardBody>
          </Card>
        </Collapse>
          </Form>   
    
      </div>
    )
  }
}

export default withRouter(attendence);



