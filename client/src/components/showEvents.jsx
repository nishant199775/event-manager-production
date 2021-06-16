import React, {ReactDOM,useState, Component, createContext } from 'react';
import Card from './Card';
import {Redirect} from 'react-router-dom'
import { CardHeader,Row,Col, CardGroup } from 'reactstrap';
import axios from 'axios';
import img from '../background.jpeg';
import { useHistory } from 'react-router-dom';
import Spinners from './Spinners'
class showEvents extends Component {
    constructor(props) {
        super(props);
        this.state = { events:[],
        isLoaded:false }
    }
    
    async componentDidMount()
    {
        
        var token=localStorage.getItem('token');
        console.log(token);
       try{
        const res=await axios.get("/api/v1/events",{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
         this.setState({isLoaded:true,events:res.data.events})
        }
        catch(err)
        {
            console.log(err);
        }
    }
    
        
        
    
    render() { 
       const Loaded=this.state.isLoaded
        const data=this.state.events;
        
        const token=localStorage.getItem('token');
        var no=1;
        if(!token)
        {
            return (<Redirect to='/signin'/>)
        }
        if(Loaded)
        {
            if(token)
            {
        return(
            <div style={{ backgroundImage:`url(${img})`,backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',overflow:"hidden"}}>
                <CardHeader className="display-4" style={{margin:"2vw",textTransform:"capitalize",textAlign:"center"}} >EVENTS</CardHeader>
            <CardGroup >
                
            
            <Row sm="3">
            {
                
                data.map((event,index)=>
                {
                    return(
                    // <Col>
                    <>
                    <Card  event={event} key={index} text={event.description} id={event._id} img={event.image} title={event.name} button1="Know More" button2="Register"/>
                    {/* </Col>  */}
                    </>)
                       
                })
                
            }
            </Row>
           </CardGroup>
           </div>
        )
            }
            else{
                return <Redirect to="/"/>
            }
        }
        
        else
        {
            return(
                <Spinners/>
            )
        }
    }
}
 
export default showEvents;
