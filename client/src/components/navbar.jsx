import Axios from 'axios';
import React,{ useState,useEffect, useContext} from 'react';
import {Redirect, useHistory,Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from 'reactstrap';
import { RoleContext } from '../App';
import jwt from 'jsonwebtoken';

const Navbar1= (props) => {
  const history=useHistory();
  const {state,dispatch}=useContext(RoleContext);
  const [isOpen, setIsOpen] = useState(false);
  const [gender, setGender] = useState("Male");
  
  const toggle = () => setIsOpen(!isOpen);
  const [isLoggedIn,setLogin]=useState(false);
  // const [role,setRole]=useState(3);
  const token=localStorage.getItem('token');
  // useEffect(()=>{
  //   jwt.verify(token,'event',(err,decode)=>{
  //     if(localStorage.getItem('gender'))
  //     setGender(decode.gender)
  //   })
  // },[])
  
  const RenderMenu=()=>{
    
    if(state===0)
    {
      return(
        <Navbar color="dark" dark expand="md" sticky="top">
        <NavbarBrand href="/">Event Manager</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/aboutUs">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/showEvent">Events</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
               
                <DropdownItem>
                  <Link exact to="/createEvent"> Create Event</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <Link exact to="/attendence">Mark Attendance</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
          
            
            
            
          
          <Badge color="rgba(153, 234, 77, 0.73)" style={{color:"rgba(153, 234, 77, 0.73)",border:"0.5px solid white",borderRadius:"12px"}}>Organiser</Badge>
          <NavLink style={{marginLeft:"0"}}>
            <Link exact to="/user/profile">
            <img style={{height:"4rem",width:"4rem",border:'0.5px solid white',borderRadius:"50%"}} src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="profile photo" />
            </Link>
          
          
          </NavLink>
          
        {localStorage.getItem('token')?<NavLink style={{color:"white",border:"0.5px solid white",borderRadius:"12px"}} href="/" onClick={handleLogout}>Logout</NavLink>:<NavLink  href="/signin" exact={true} >Login</NavLink>}
        
          
          
        </Collapse>
      </Navbar>
      )
    }
    else if(state===1)
    {
      return(
        <Navbar color="dark" dark expand="md" sticky="top">
        <NavbarBrand href="/">Event Manager</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/aboutUs">About Us</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/user/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/showEvent">Events</NavLink>
            </NavItem>
            
          </Nav>
          
          
            
          <NavLink style={{marginRight:"0",float:"right",}} ><small style={{height:'2rem',padding:'4px',color:"#DACE5D",border:"0.5px solid white",borderRadius:"12px"}}>User</small></NavLink>
            
          <NavLink >
        <Link exact to="/user/profile">
        <img style={{height:"4rem",width:"4rem",border:'0.5px solid white',borderRadius:"50%"}} src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="profile photo" />
         
        </Link>
        </NavLink>
        
        {localStorage.getItem('token')?<NavLink href="/" onClick={handleLogout} style={{color:"white",border:"0.5px solid white",borderRadius:"12px"}}>Logout</NavLink>:<NavLink  href="/signin" exact={true} >Login</NavLink>}
        
            
          
        </Collapse>
      </Navbar>
      )
    }
    else {
      return(
        <Navbar color="dark" dark expand="md" sticky="top">
        <NavbarBrand href="/">Event Manager</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/aboutUs">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/showEvent" exact={true} href="/showEvent" >Events</NavLink>
            </NavItem>
            
          </Nav>
          
          
            
            <NavLink style={{margin:"1rem",color:"white",border:"0.5px solid white",borderRadius:"12px"}} to="/signup" exact={true} href="/signup" >Signup</NavLink>
          
        
        <NavLink style={{color:"white",border:"0.5px solid white",borderRadius:"12px"}} href="/signin" exact={true} >Login</NavLink>
        
            
          
        </Collapse>
      </Navbar>
      )
    }
  }
  // useEffect(() => {
  //   }, [isLoggedIn])
  //   useEffect(async ()=>{
  //       const token=localStorage.getItem('token');
  //       if(token)
  //       {
  //         const res=await Axios.get('/users',{
  //           headers:{
  //             "Authorization":`Bearer ${token}`
  //           }
  //         })
  //         console.log('in navbar role',res.data.role)
  //         setRole(res.data.role);
  //       }
  //       else{
  //         setRole(3);
  //       }
        
  //   },[])

    

  const handleLogout=()=>{

    localStorage.clear();
    dispatch({type:"USER",payload:3});
    setLogin(true)
  }
  

  return (
    <div >
      <RenderMenu/>
    </div>
  );
}

export default Navbar1;