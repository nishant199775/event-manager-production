
import React, { Component,useContext } from 'react';
import { Row,Col,Nav, NavItem, NavLink } from 'reactstrap';
import { RoleContext } from '../App';
import '../index.css'
const Nav1 = (props)=> {
  const {state,dispatch}=useContext(RoleContext);
  const handleLogout=(e)=>{
    localStorage.clear();
    dispatch({type:"USER",payload:3});
  }
    const RenderFooter=()=>{
      if(state===0)
      {
        return(
          <div  style={{overflow:"hidden",marginTop:"auto",backgroundColor:"#343a40",color:"#d0d4d8"}}> 
            
            
            
           
            <Row>
            <hr  />
            <Col sm={4}></Col>
            <Col sm={8}>
            <Nav>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="/aboutUs">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="/showEvent">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  style={{color:"#d0d4d8"}} href="/admin/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  style={{color:"#d0d4d8"}} href="#" onClick={handleLogout}>Logout</NavLink>
        </NavItem>
      </Nav>
      </Col>
      </Row>
      <Row>
          <Col sm={5}>
          </Col>
          <Col sm={2}>
      <hr className="my-1" />
       <p className="my-2 text-center" >Developed by Nishant</p>
       </Col>
       </Row>
      </div>
        )
        
      }
      else if(state===1)
        {
          return(
            <div style={{overflow:"hidden",marginTop:"auto",backgroundColor:"#343a40",color:"#c5bdc4"}}> 
            <hr className="my-2" />
            <Row>
            
            <Col sm={4}></Col>
            <Col sm={6}>
            <Nav>
        <NavItem >
          <NavLink style={{color:"#d0d4d8"}} href="/aboutUs">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="/showEvent">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="/user/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="#" onClick={handleLogout}>Logout</NavLink>
        </NavItem>
      </Nav>
      </Col>
      </Row>
      <Row > 
          <Col sm={5}>
          </Col>
          <Col sm={2} style={{color:"#c5bdc4"}}>
      <hr className="my-1" />
       <p className="my-2 text-center" >Developed by Nishant</p>
       </Col>
       </Row>
      </div>
          )
        }
        else{
        
          return(
            <div style={{marginTop:"auto",overflow:"hidden",backgroundColor:"#343a40",color:"#c5bdc4"}}> 
            <hr className="my-2" />
            <Row>
            
            <Col sm={4}></Col>
            <Col sm={8}>
            <Nav>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="/aboutUs">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="/signin">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="/signup">Signup</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"#d0d4d8"}} href="/signin">Signin</NavLink>
        </NavItem>
        
      </Nav>
      </Col>
      </Row>
      <Row>
          <Col sm={5}>
          </Col>
          <Col sm={2}>
      <hr className="my-1" />
       <p className="my-2 text-center" >Developed by Nishant</p>
       </Col>
       </Row>
      </div>
          )
        
        }
    }
     
        return (
            <RenderFooter/>
         );
    
}
 
export default Nav1;