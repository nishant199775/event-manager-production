import Axios from 'axios'
import React, { Component } from 'react'
import jwt from 'jsonwebtoken';
import {
    Card, Table, CardImg, CardLink,
    CardTitle, CardHeader,Row,Col
  } from 'reactstrap';

export default class profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             details:{}
        }
    }
    async componentDidMount(){
        const token=localStorage.getItem('token')
        // const res=await Axios.get('/user/profile',{
        //     headers:{
        //         "Authorization":`Bearer ${token}`
        //     }
        // })
        
        jwt.verify(token,'event',(err,decode)=>{
            if(err)
            console.log(err);
            else
            this.setState({details:decode})
        })
    }
    
    render() {
        const {name,city,role,gender,phone,email}=this.state.details;
        return (
            <div>
                <Row>
                    <Col>
                    <CardHeader className="display-4" style={{margin:"2vw",textTransform:"capitalize",textAlign:"center"}} tag="h3">PROFILE</CardHeader> 

                    </Col>
                </Row>
                <Row>
                    <Col sm="3">
                    </Col>
                    <Col sm="6">
                <Table>
                <tbody>
                <tr>
                <th scope="row">NAME</th>
                
                <td>{name}</td>
                </tr>
                <tr>
                <th scope="row">EMAIL</th>
                
                <td>{email}</td>
                </tr>
                <tr>
                <th scope="row">PHONE NUMBER</th>
                
                <td>{phone}</td>
                </tr>
                
                <tr>
                <th scope="row">ROLE</th>
                
                <td>{role===0?"ORGANISER":"USER"}</td>
                </tr>
                <tr>
                <th scope="row">CITY</th>
                
                <td>{city}</td>
                </tr>
                <tr>
                <th scope="row">GENDER</th>
                
                <td>{gender}</td>
                </tr>
                
                
            </tbody>
        </Table>
        </Col>
                </Row>
            </div>
        )
    }
}
