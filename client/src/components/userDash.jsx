import React, { Component } from 'react'
import UserDashCard from './userDashCard';
import {Redirect} from 'react-router-dom'
import {
    CardHeader,Card,CardTitle 
  } from 'reactstrap';
  import Spinners from './Spinners'
import Axios from 'axios';
export default class userDash extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             usersWithKey:[],
             loaded:false
        }
    }
    async componentDidMount(){
        try{
           const token=localStorage.getItem('token');
            const res=await Axios.get('/api/v1/token/showJoinedEventsWithToken',{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            });
           
            this.setState({loaded:true,usersWithKey:res.data.data})
        }
        catch(err)
        {
            console.log(err);
        }
    }
    

    render() {
        const token=localStorage.getItem('token');
        if(!token)
        {
            return (<Redirect to="/signin"/>)
        }
        if(!this.state.loaded)
        {
            return (<Spinners/>)
        }
        const usersWithKey=this.state.usersWithKey;
        if(usersWithKey.length===0)
        {
            return(
                <div>
                <CardHeader className="display-4" style={{margin:"2vw",textTransform:"capitalize",textAlign:"center"}} >USER DASHBOARD</CardHeader>
                <Card style={{height:"10vw",textAlign:"center",verticalAlign:"bottom"}}>
                    <CardTitle>Currently you have no registered Events</CardTitle>
                </Card>
                
            </div>
            )
        }
        return (
            <div>
                <CardHeader className="display-4" style={{margin:"2vw",textTransform:"capitalize",textAlign:"center"}} >USER DASHBOARD</CardHeader>
                {
                    usersWithKey.map((item)=>{
                        console.log('in map item:',item)
                       return( <UserDashCard key={item._id} item={item}/>)
                    })
                }
                
                
            </div>
        )
    }
}
