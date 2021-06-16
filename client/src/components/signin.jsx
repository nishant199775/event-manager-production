
import React, { Component, useContext, useState } from 'react'
import axios from 'axios';
import { Button,Form, FormGroup, Label, Input,Row,Col} from 'reactstrap';
import {useHistory, withRouter} from 'react-router-dom';
import { RoleContext } from '../App';



export default function Signin() {
  const {state,dispatch}=useContext(RoleContext);   
  const history=useHistory();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=async (e)=>
  {
      
    e.preventDefault();
    
    try{
    
    var body = {
     
      email: email,
      password:password,
    }
    if(email===''||password==='')
    {
      alert('Enter all fields')
    }
    else{
      const res=await axios.get("/api/v1/users/signin",{params:body});

      console.log(res.data);
      localStorage.setItem('token',res.data.token);
      localStorage.setItem('role',res.data.role);
      // localStorage.setItem('gender',res.data.gender);
  
      if(res.data.status===200)
      {
        
         dispatch({type:"USER",payload:res.data.role});
         alert('Signed in Successfully')
         history.push('/')
      }
      else{
        alert(res.data.message);
      }
    }
   
    

    }
    catch(err)
    {
        console.log(err);
    }
  }
  return (
    <div style={{backgroundColor:"white"}}>
      <Form style={{margin:"8vw 25vw",border:"2px solid black",padding:"3vw",backgroundColor:"rgba(216, 160, 119, 0.17)",color:"rgba(7, 4, 3, 0.7)",borderRadius:"12px"}}>
                <h2 style={{textAlign:"center",marginBottom:"30px",backgroundColor:"rgba(249, 107, 5, 0.97)",borderRadius:"12px"}}>LOGIN </h2>
            
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email " />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password " />
            </Col>
          </FormGroup>
          
          <FormGroup check row>
            <Col style={{marginTop:"2vw",textAlign:"center"}} sm={{ size: 10}}>
              <Button style={{backgroundColor:"rgba(249, 107, 5, 0.97)"}} onClick={handleSubmit}>Login</Button>
            </Col>
          </FormGroup>
          </Form>   
    </div>
  )
}

  
     

