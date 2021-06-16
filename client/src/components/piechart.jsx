import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Card,CardHeader, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {Bar,Pie} from 'react-chartjs-2';
import {BsFillTagFill,BsFillBriefcaseFill,BsFillEyeFill} from 'react-icons/bs';
import Recent from './recentRegistrants';
import { Link } from 'react-router-dom';
const Piechart = (props) => {
    var token=localStorage.getItem('token');
    const [names,setName]=useState([]);
    const [members,setMembers]=useState([]);
    const [income,setIncome]=useState([]);
    const [totalEvents,setTotalEvents]=useState(0);
    const [totalIncome,setTotalIncome]=useState(0);
    const [views,setViews]=useState(0);
    const [topRegistrants,setTopRegistrants]=useState([]);
    const [allRegistrants,setAllRegistrants]=useState([]);

    useEffect(async ()=>{
    try{
      const res=await axios.get("/api/v1/users/showCreatedEvents",{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      });
    const events=res.data.data;
    var enames=[];
    var participants=[];
    var income=0;
    var individualIncome=[];
    var view=0;
    events.map((event)=>{
      enames.push(event.name);
      participants.push(event.participants.length);
      income+=event.fees*(event.participants.length);
      individualIncome.push(event.fees*(event.participants.length));
      view+=event.participants.length;
    })
    const res2=await axios.get('/api/v1/token/registrants/recent',{
      headers:{
          "Authorization":`Bearer ${token}`
      }
  })
  console.log('res2',res2.data)
    setTopRegistrants(res2.data.users.slice(0,5));
    setAllRegistrants(res2.data.users);
    setName(enames);
    setMembers(participants);
    setTotalEvents(events.length);
    setTotalIncome(income);
    setViews(view);
    setIncome(individualIncome);
    }
    catch(err)
    {
      console.log(err);
    }
      
   

    },[])
    const state = {
        labels: names,
        datasets: [
          {
            label: ['Candidates'],
             backgroundColor: ['rgb(94, 186, 161)','rgb(165, 212, 139)','rgb(218, 138, 203)',
             'rgb(156, 28, 16)','rgb(121, 104, 206)'],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data:members
          }
        ]
      }
      const data = {
        labels: names,
        datasets: [
          {
            label: ['Candidates'],
            backgroundColor: ['rgb(94, 186, 161)','rgb(165, 212, 139)','rgb(218, 138, 203)',
            'rgb(156, 28, 16)','rgb(121, 104, 206)'],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: income
          }
        ]
      }
  return (
      <>
    <Row>
        
        <Col sm="1"></Col>
      <Col sm="3">
        <Card body>
          <CardTitle>EVENTS CREATED<BsFillBriefcaseFill/></CardTitle>
          <CardText>{totalEvents}</CardText>
          
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle>TOTAL INCOME <BsFillTagFill/></CardTitle>
          <CardText>{totalIncome}</CardText>
          
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle>TOTAL USERS<BsFillEyeFill/></CardTitle>
          <CardText>{views}</CardText>
     
        </Card>
      </Col>
      
    </Row>
    <br></br>
    <Row>
        <Col sm="1"></Col>
        <Col sm="6">
            <Card body>
        <Bar
          data={state}
          height={157}
          options={{
            title:{
              display:true,
              text:'Registration for Your Events',
              fontSize:30
            },
            legend:{
              display:true,
              position:'top'
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                scaleSteps:1
              }]
            }
          }}
        />
        </Card>
        </Col>
        
        <Col sm="4">
        <Card body>
        <Pie
          data={data}
          height={250}
          options={{
            title:{
              display:true,
              text:'CONTRIBUTION TO INCOME',
              fontSize:30
              
            },
            legend:{
              display:true,
              position:'top'
            }
          }}
        />
        </Card>
    </Col>
  </Row>
  <br>
  </br>
  <Row>
    <Col sm="1">
    </Col>
    <Col sm="10">
      <Card style={{padding:'1vw'}}>
      <CardHeader className="my-2" style={{textTransform:"capitalize",textAlign:"center"}} tag="h1">
         REGISTRANTS</CardHeader>
        <Card body>
        <Row>
          <Col sm="5"></Col>
          <Col sm="2"><h2 style={{border:"2px solid green",color:"green",textAlign:"center",borderRadius:"12px"}} className="my-2">Recent</h2></Col>
          <Col sm="4"></Col>
          <Col sm="1" ><Link style={{color:"white"}} exact to={{
                                    pathname:'/allRegistrants',
                                    state:{allRegistrants:allRegistrants}
                            }}><Button style={{backgroundColor:"rgb(155, 49, 23)",borderRadius:"12px"}}>All</Button></Link></Col>
        </Row>
        </Card>
        
          <Recent registrants={topRegistrants}/>
      </Card>
    </Col>
  </Row>
  </>
  )
};

export default Piechart;