import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormLabel } from 'react-bootstrap';
import axios from 'axios';
// import {CreateForm} from './createForm';
import { Button,Form, FormGroup, Label, Input,Row,Col} from 'reactstrap';

class signup extends Component {
    constructor(props)
    {
      super(props);
      this.state={name:"",email:"",password:"",role:"Participant",confirmPassword:"",gender:'',phone:-1,city:""}
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit=async (e)=>
    {
      e.preventDefault();
      const {name,email,role,confirmPassword,password,city,gender,phone}=this.state;
      if(name===''||email===''||role===''||confirmPassword===''||city===''||gender==='Male'||phone==='')
      {
        alert('Enter all the fields')
      }
      else if(password!=confirmPassword)
      {alert('password and confirm password doesnot match')}
      else if(phone.length!=10)
      {
        alert('Phone Number cant be length other than 10 ')
      }
      else
      {
        //  post req to server
       
        try{
          var selectedRole=1;
          if(role==='Host')
          selectedRole=0;
          
        var body = {
          name: name,
          email: email,
          password:password,
          role:selectedRole,
          city:city,
          gender:gender,
          phone:phone
      }
      console.log('role',body.role,'selected role',selectedRole);
      const res=await axios.post("/api/v1/users/signup",body);
      console.log(res);
      if(res.data.status===200)
      {
      alert('Signed Up successfully');
      this.props.history.push({pathname:'/signin'})
      }
      else{
          console.log(res);
        alert(res.data.message);
      }
     console.log(res);
  }
      catch(error) {
        
          console.log(error);
      };
      }

    }
    
    
    render() {

        return (
          
        <Form style={{margin:"5vw 10vw",border:"2px solid black",padding:"2vw",backgroundColor:"rgba(6, 4, 15, 0.32)",color:"white",borderRadius:"12px"}}>
            <h2 style={{textAlign:"center",padding:"1vw",borderRadius:"12px",marginBottom:"2vw",backgroundColor:"rgba(7, 4, 3, 0.7)"}}>SignUp Form</h2>
        <FormGroup row>
        <Label for="Name" sm={2}>Name</Label>
        <Col sm={10}>
          <Input type="name" name="name" onChange={(e)=>this.setState({name:e.target.value})} placeholder="Enter Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" onChange={(e)=>this.setState({email:e.target.value})} placeholder="Enter Email " />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" onChange={(e)=>this.setState({password:e.target.value})} placeholder="Enter Password " />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Confirm Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" onChange={(e)=>this.setState({confirmPassword:e.target.value})} placeholder="Confirm Password" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleGender" sm={2}>Gender</Label>
        <Col sm={10}>
          <Input type="select" name="gender" onChange={(e)=>{console.log(e.target.value);this.setState({gender:e.target.value})}}>
            <option >Female</option>
            <option selected>Male</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>City</Label>
        <Col sm={10}>
          <Input type="city" name="city" onChange={(e)=>this.setState({city:e.target.value})} placeholder="Enter your City" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Phone Number</Label>
        <Col sm={10}>
          <Input type="number" name="phone" onChange={(e)=>this.setState({phone:e.target.value})} placeholder="Enter Phone Number" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleRole" sm={2}>Role</Label>
        <Col sm={10}>
          <Input type="select" name="Role" onChange={(e)=>this.setState({role:e.target.value})}>
            <option >Host</option>
            <option selected>Participant</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 5 }}>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Col>
      </FormGroup>
      </Form>  
      
           
        );
    }
}

export default withRouter(signup);
