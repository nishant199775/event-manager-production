import axios from 'axios';
import React, {ReactDOM,useState, Component, createContext } from 'react';
import { Button,Row,Col,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {withRouter} from 'react-router-dom'


class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Name:'',Location:'',Date:'',
    RegFee:0,
    Type:'Learning',Img:'abc.com',Details:'' };
    this.handleChange=this.handleChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  handleChange(e){
    const target=e.target;
    const value=target.value;
    const name=target.name;
    this.setState({
      [name]:value
    })
    
  }
  async onSubmit(){
    try
    {
      var token=localStorage.getItem("token");
      var data;
    data={"name":this.state.Name,
    "fees":this.state.RegFee,
    "type":this.state.Type,
    "image":this.state.Img,
    "description":this.state.Details,
    "date":this.state.Date,
    "location":this.state.Location
  }
  console.log(data);
  if(data.name===''||data.fees===''||data.type===''||data.image===''||data.description===''||data.date===''||data.location==='')
  {
    alert('Enter all fields');
  }
  else{
    const res=await axios.post('/api/v1/events/create',data,{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    });
    
  console.log(res);
    alert('event created successfully');
    this.props.history.push({
      pathname:'/showEvent'
    })
  }
  
}
catch(err)
{
  console.log(err);
}

    
  }
  
  

  render(props) { 
    
    const CreateButton=(
      <Form  inline>

     
          <FormGroup style={{textAlign:"center"}} className="mb-4 mr-sm-4 mb-sm-0">
          <Button sm="5" onClick={this.onSubmit}>Create</Button>
          </FormGroup>
      
      
      </Form>
);
    const CreateEvent=(
      <Form style={{margin:"5vw 10vw",border:"2px solid black",padding:"2vw",backgroundColor:"rgba(6, 4, 15, 0.32)",color:"white",borderRadius:"12px"}}>
      <h2 style={{textAlign:"center",padding:"1vw",borderRadius:"12px",marginBottom:"2vw",backgroundColor:"rgba(7, 4, 3, 0.7)"}}>Create Event</h2>
      
      
      <FormGroup>
      <Label for='Name'>Name</Label>
      <Input type='name' 
       name='Name' onChange={this.handleChange} id='Name' placeholder="Enter Name" />
     </FormGroup>
     <FormGroup>
      <Label for='RegFee'>Registration Fee</Label>
      <Input type='number' 
       name='RegFee' onChange={this.handleChange} id='RegFee' placeholder='Enter Registration Fee' />
     </FormGroup>
     <FormGroup>
      <Label >Details</Label>
      <Input type='textarea' 
       name='Details' onChange={this.handleChange} id='Details' placeholder='Enter Details' />
     </FormGroup>
     <FormGroup>
      <Label >Image URL</Label>
      <Input type='url' 
       name='Img' onChange={this.handleChange} id='url' placeholder='Enter URL' />
     </FormGroup>
     <FormGroup>
      <Label >Date of Event</Label>
      <Input type='date' 
       name='Date' onChange={this.handleChange}  placeholder='select date' />
     </FormGroup>
     <FormGroup>
      <Label >Location of Event</Label>
      <Input type='text' 
       name='Location' onChange={this.handleChange}  placeholder='Enter Location' />
     </FormGroup>

     <FormGroup>
      <Label >Type of Events</Label>
      <Input type="select" name="Type" onChange={this.handleChange} id="type">
            <option selected>Learning</option>
            <option >Entertainment</option>
            <option >Cultural</option>
            <option >Meeting</option>
          </Input>
      {/* <Input type="text" 
       name='Type' onChange={this.handleChange} id='type' placeholder='Enter Type' /> */}
     </FormGroup>
     {CreateButton}
     
      </Form>
    );
    
    
    
    return (<>
      <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
          {CreateEvent}
          <br></br>
          
          </Col>
      </Row>
      </>  );
  }
}
 
export default withRouter(EventForm);